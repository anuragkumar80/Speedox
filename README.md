<div align="center">

  <img src="frontend/public/logo.png" alt="Speedox Logo" width="280" />

  # Speedox ⚡
  ### Next-Generation Real-Time Broadband Speed Benchmark

  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.109-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

  ---

  ### 💚 **Built By [Anurag](https://github.com/anuragkumar88)**
  **Powered By [Squareup Studio](https://squareupdigital.com/)**

  ---

</div>

<br />

## 📖 Overview

**Speedox** is a state-of-the-art broadband speed measurement platform built with **Next.js 15 App Router** and a high-performance **FastAPI asynchronous backend engine**. 

Engineered for precision network diagnostics, Speedox measures true physical download bandwidth, upload throughput, latency ping, and network jitter over a minimum **20-second sample window** per phase, delivering un-inflated real-world results.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **⚡ 20-Second Parallel Telemetry** | Minimum 20-second sample window per test phase calculating true average Mbps throughput. |
| **🎯 ISP Line Calibration** | Bypasses RAM loopback speed spikes to report accurate Wi-Fi / Ethernet adapter speed. |
| **📈 Live Bandwidth Telemetry Graph** | Real-time streaming Recharts area graph displaying live download & upload waveforms. |
| **📡 Ping & Jitter Diagnostics** | 10 sequential round-trip probes measuring latency and packet variance. |
| **☀️ Light Theme & Card Effects** | Crisp light theme with vibrant orange glassmorphism card hover glow effects. |
| **📱 100% Mobile Responsive** | Optimized floating capsule navbar with mobile hamburger menu drawer. |
| **🔒 100% Ephemeral & Private** | Zero logs, zero tracking, zero IP storage—operates entirely in memory. |
| **🚀 Single Terminal Command** | Run FastAPI (`:8000`) & Next.js (`:3000`) concurrently with `npm run dev`. |

---

## 🏗️ System Architecture

```mermaid
graph TD
    User([User Browser]) -->|HTTP Sockets / Web Streams| NextJS[Next.js 15 Frontend :3000]
    NextJS -->|Parallel Probes| FastApi[FastAPI Backend :8000]
    NextJS -->|Edge Stream Fallback| CDN[Public CDN Edge Workers]
    FastApi -->|10x Latency Probes| PingEngine[/ping Endpoint]
    FastApi -->|Chunk Stream /50mb| DownloadEngine[/download Endpoint]
    FastApi -->|Delta Byte Tracking| UploadEngine[/upload Endpoint]
    FastApi -->|IP / ISP Lookup| NetworkEngine[/network Endpoint]
```

---

## 🛠️ Technology Stack

```
Speedox
├── Frontend (frontend/)
│   ├── Next.js 15 (App Router, TypeScript)
│   ├── TailwindCSS v4 + CSS Theme Variables
│   ├── Framer Motion (Animations & Drawers)
│   ├── Recharts (Real-Time Telemetry Graph)
│   └── Lucide React (Vector System Icons)
│
└── Backend (backend/)
    ├── FastAPI (Asynchronous Python Engine)
    ├── Uvicorn (ASGI Production Server)
    ├── AsyncIO (Multi-Stream Worker Buffers)
    └── Httpx / Aiofiles (High Concurrency Sockets)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Python**: `v3.10` or higher

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/anuragkumar88/Speedox.git

# Navigate to project directory
cd Speedox

# Install root & frontend dependencies
npm run setup
```

### 2. Single-Terminal Execution
Launch both the **FastAPI Backend (Port 8000)** and **Next.js Frontend (Port 3000)** simultaneously:

```bash
npm run dev
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **FastAPI Backend API**: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 🛰️ API Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `GET /health` | `GET` | Backend server health status & connection check. |
| `GET /ping` | `GET` | High-precision round-trip latency probe. |
| `GET /download` | `GET` | Binary chunk download stream (`?size=50mb`). |
| `POST /upload` | `POST` | CORS-enabled binary payload upload target. |
| `GET /network` | `GET` | Fetches client IP address, ISP, and location details. |

---

## 📁 Application Routes

- `/` — Main Telemetry Engine & Speedometer Gauge
- `/about` — Architecture & Ephemeral Privacy Policy
- `/how-it-works` — Step-by-Step Testing Methodology
- `/blog` — Tech Insights on Multi-Stream Networking & Jitter
- `/faq` — Broadband Speed & Accuracy Q&A

---

## 👤 Author & Studio

- **Built By**: [Anurag](https://github.com/anuragkumar88)
- **Powered By**: [Squareup Studio](https://squareupdigital.com/)

---

<div align="center">
  <sub>Made with ❤️ by Anurag. Powered by Squareup Studio.</sub>
</div>
