'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { SpeedDataPoint } from '../lib/types';
import { TrendingUp } from 'lucide-react';

interface LiveGraphProps {
  data: SpeedDataPoint[];
}

export const LiveGraph: React.FC<LiveGraphProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto my-2 px-2 sm:px-4">
        <div className="theme-card p-4 rounded-2xl flex items-center justify-between min-h-[70px] text-xs">
          <div className="flex items-center gap-2 theme-body">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span className="font-semibold">Real-Time Telemetry Graph</span>
          </div>
          <span className="theme-body opacity-75 text-[11px]">Live bandwidth graph streams here during testing</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-7xl mx-auto my-2 px-2 sm:px-4"
    >
      <div className="theme-card p-5 rounded-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <h3 className="text-xs font-bold theme-heading uppercase tracking-wider">
              Live Bandwidth Telemetry
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50" />
              <span className="theme-heading">Download</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
              <span className="theme-heading">Upload</span>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="w-full h-44">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="downloadOrangeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="uploadAmberGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />

              <XAxis
                dataKey="timestamp"
                tick={{ fill: 'var(--text-body)', fontSize: 11 }}
                unit="s"
                stroke="var(--chart-grid)"
              />

              <YAxis
                tick={{ fill: 'var(--text-body)', fontSize: 11 }}
                unit=" Mbps"
                stroke="var(--chart-grid)"
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-nav)',
                  borderColor: 'var(--border-card)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  color: 'var(--text-heading)',
                  fontSize: '12px',
                }}
                formatter={(value: any) => [`${Number(value).toFixed(2)} Mbps`, 'Speed']}
                labelFormatter={(label) => `Time: ${label}s`}
              />

              <Area
                type="monotone"
                dataKey="download"
                stroke="#f97316"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#downloadOrangeGradient)"
                isAnimationActive={false}
              />

              <Area
                type="monotone"
                dataKey="upload"
                stroke="#f59e0b"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#uploadAmberGradient)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </motion.div>
  );
};
