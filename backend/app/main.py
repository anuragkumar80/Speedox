from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.speed import router as speed_router

app = FastAPI(
    title="Speedox API Engine",
    description="High performance internet speed test backend",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Length", "Content-Disposition"]
)

# Include routes
app.include_router(speed_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
