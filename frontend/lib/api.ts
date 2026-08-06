import axios from 'axios';
import { NetworkInfo } from './types';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function fetchHealth(): Promise<boolean> {
  try {
    const res = await axios.get(`${API_BASE_URL}/health`, { timeout: 3000 });
    return res.data?.status === 'ok';
  } catch {
    return false;
  }
}

export async function fetchNetworkInfo(): Promise<NetworkInfo> {
  try {
    const res = await axios.get<NetworkInfo>(`${API_BASE_URL}/network`, { timeout: 6000 });
    return res.data;
  } catch {
    return {
      ip: '127.0.0.1',
      isp: 'Local / Offline Provider',
      city: 'Local Area',
      region: 'Local Region',
      country: 'Local Country'
    };
  }
}

export async function measureSinglePing(): Promise<number> {
  const start = performance.now();
  await axios.get(`${API_BASE_URL}/ping`, {
    headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    params: { _t: Date.now() }
  });
  const end = performance.now();
  return end - start;
}
