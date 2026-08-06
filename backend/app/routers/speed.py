import time
import os
import asyncio
from typing import AsyncGenerator
from fastapi import APIRouter, Request, Query
from fastapi.responses import StreamingResponse
import httpx

router = APIRouter()

# Pre-generate 1MB chunk of pseudo-random bytes in memory for high-performance zero-CPU streaming
CHUNK_1MB = os.urandom(1024 * 1024)

@router.get("/health")
async def health_check():
    return {"status": "ok"}

@router.get("/ping")
async def ping(request: Request):
    """Low latency ping endpoint."""
    return {"timestamp": time.time_ns(), "status": "ok"}

async def generate_binary_stream(target_bytes: int) -> AsyncGenerator[bytes, None]:
    """Streams binary data in 1MB chunks until target_bytes is reached."""
    bytes_sent = 0
    chunk_size = len(CHUNK_1MB)
    
    while bytes_sent < target_bytes:
        remaining = target_bytes - bytes_sent
        if remaining < chunk_size:
            yield CHUNK_1MB[:remaining]
            bytes_sent += remaining
        else:
            yield CHUNK_1MB
            bytes_sent += chunk_size
        await asyncio.sleep(0)

@router.get("/download")
async def download_test(size: str = Query("25mb", description="Data size: 10mb, 25mb, 50mb, 100mb")):
    """
    Streams random binary data for download speed testing.
    Supports sizes: 10MB, 25MB, 50MB, 100MB (default: 25MB)
    """
    size_lower = size.lower().replace("mb", "").strip()
    try:
        size_mb = int(size_lower)
    except ValueError:
        size_mb = 25
        
    if size_mb not in [10, 25, 50, 100]:
        size_mb = 25

    total_bytes = size_mb * 1024 * 1024

    headers = {
        "Content-Disposition": f"attachment; filename=speedtest_{size_mb}MB.bin",
        "Content-Type": "application/octet-stream",
        "Content-Length": str(total_bytes),
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        "Pragma": "no-cache"
    }

    return StreamingResponse(
        generate_binary_stream(total_bytes),
        media_type="application/octet-stream",
        headers=headers
    )

@router.post("/upload")
async def upload_test(request: Request):
    """
    Accepts raw binary payload stream for upload speed test.
    """
    start_time = time.perf_counter()
    total_bytes = 0
    
    async for chunk in request.stream():
        total_bytes += len(chunk)
        
    end_time = time.perf_counter()
    duration = end_time - start_time
    
    mbps = 0.0
    if duration > 0:
        mbps = (total_bytes * 8) / duration / 1_000_000

    return {
        "status": "success",
        "bytes_received": total_bytes,
        "duration_seconds": round(duration, 4),
        "speed_mbps": round(mbps, 2)
    }

@router.get("/network")
async def network_info(request: Request):
    """
    Fetches client's public IP address, ISP name, City, Region, and Country.
    """
    client_ip = request.client.host if request.client else "127.0.0.1"
    
    # Primary API lookup
    try:
        async with httpx.AsyncClient(timeout=4.0) as client:
            res = await client.get("http://ip-api.com/json/?fields=status,message,country,regionName,city,isp,query")
            if res.status_code == 200:
                data = res.json()
                if data.get("status") == "success":
                    return {
                        "ip": data.get("query", client_ip),
                        "isp": data.get("isp", "Unknown ISP"),
                        "city": data.get("city", "Unknown City"),
                        "region": data.get("regionName", "Unknown Region"),
                        "country": data.get("country", "Unknown Country")
                    }
    except Exception:
        pass
        
    # Secondary API lookup fallback
    try:
        async with httpx.AsyncClient(timeout=4.0) as client:
            res = await client.get("https://ipapi.co/json/")
            if res.status_code == 200:
                data = res.json()
                return {
                    "ip": data.get("ip", client_ip),
                    "isp": data.get("org", "Unknown ISP"),
                    "city": data.get("city", "Unknown City"),
                    "region": data.get("region", "Unknown Region"),
                    "country": data.get("country_name", "Unknown Country")
                }
    except Exception:
        pass

    return {
        "ip": client_ip if client_ip not in ["127.0.0.1", "localhost"] else "127.0.0.1",
        "isp": "Local Connection / Default Network",
        "city": "Unknown City",
        "region": "Unknown Region",
        "country": "Local Network"
    }
