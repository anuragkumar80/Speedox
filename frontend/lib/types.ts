export type TestStage = 'idle' | 'network' | 'ping' | 'download' | 'upload' | 'completed' | 'error';

export interface NetworkInfo {
  ip: string;
  isp: string;
  city: string;
  region: string;
  country: string;
}

export interface SpeedDataPoint {
  timestamp: number; // seconds elapsed
  download?: number; // Mbps
  upload?: number; // Mbps
}

export interface SpeedTestResult {
  ping: number | null; // ms
  jitter: number | null; // ms
  downloadSpeed: number | null; // Mbps
  uploadSpeed: number | null; // Mbps
  networkInfo: NetworkInfo | null;
  quality: 'Excellent' | 'Very Good' | 'Good' | 'Average' | 'Poor' | null;
  history: SpeedDataPoint[];
  stage: TestStage;
  progress: number; // 0 - 100%
  currentSpeed: number; // Live Mbps
  error: string | null;
}
