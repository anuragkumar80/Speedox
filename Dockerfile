# Dockerfile for Speedox Full-Stack Production Deployment
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM python:3.11-slim
WORKDIR /app

# Install Node.js for Next.js runtime in single container
RUN apt-get update && apt-get install -y curl nodejs npm && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend & built frontend
COPY backend/ ./backend/
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/package*.json ./frontend/
COPY package.json ./

WORKDIR /app/frontend
RUN npm ci --only=production

WORKDIR /app
EXPOSE 3000 8000

CMD ["sh", "-c", "python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 & npm --prefix frontend start"]
