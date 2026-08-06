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

Engineered for precision network diagnostics, Speedox measures true physical download bandwidth, upload throughput, latency ping, and network jitter over a **7-second sample window** per phase, delivering un-inflated real-world results.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **⚡ 7-Second Parallel Telemetry** | 7-second sample window per test phase calculating true average Mbps throughput at 60 FPS. |
| **🎯 ISP Line Calibration** | Bypasses RAM loopback speed spikes to report accurate Wi-Fi / Ethernet adapter speed. |
| **📈 Live Bandwidth Telemetry Graph** | Real-time streaming Recharts area graph displaying live download & upload waveforms. |
| **📡 Ping & Jitter Diagnostics** | 10 sequential round-trip probes measuring latency and packet variance. |
| **☀️ Light Theme & Card Effects** | Crisp light theme with vibrant orange glassmorphism card hover glow effects. |
| **📱 100% Mobile Responsive** | Optimized floating capsule navbar with mobile hamburger menu drawer. |
| **🔒 100% Ephemeral & Private** | Zero logs, zero tracking, zero IP storage—operates entirely in memory. |
| **🚀 Single Terminal Command** | Run FastAPI (`:8000`) & Next.js (`:3000`) concurrently with `npm run dev`. |

---

## 🚀 Getting Started

Run both the Next.js frontend and FastAPI backend concurrently with a single command:

```bash
# 1. Clone the repository
git clone https://github.com/anuragkumar88/Speedox.git
cd Speedox

# 2. Install root and frontend dependencies
npm install

# 3. Start development servers (Frontend + Backend)
npm run dev
```

- **Frontend Application**: `http://localhost:3000`
- **FastAPI Engine**: `http://localhost:8000`

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

## 👤 Author & Studio

- **Built By**: [Anurag](https://github.com/anuragkumar88)
- **Powered By**: [Squareup Studio](https://squareupdigital.com/)

---

<div align="center">
  <sub>Made with ❤️ by Anurag. Powered by Squareup Studio.</sub>
</div>
