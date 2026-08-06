'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Upload, Activity, Waves, Globe, Server, Network, MapPin } from 'lucide-react';
import { SpeedTestResult } from '../lib/types';

interface ResultCardsProps {
  result: SpeedTestResult;
}

export const ResultCards: React.FC<ResultCardsProps> = ({ result }) => {
  const { downloadSpeed, uploadSpeed, ping, jitter, networkInfo } = result;

  const sparklineSvg = (
    <svg className="w-full h-8 text-orange-500/80" viewBox="0 0 100 25" fill="none">
      <path
        d="M 0 15 Q 15 5 30 18 T 60 10 T 90 20 L 100 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1: Download */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="theme-card p-5 rounded-2xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold theme-body">Download</div>
              <div className="text-2xl font-black theme-heading font-mono">
                {downloadSpeed !== null ? downloadSpeed.toFixed(2) : '0.00'}{' '}
                <span className="text-xs font-bold text-orange-500">Mbps</span>
              </div>
            </div>
          </div>
          <div className="mt-4">{sparklineSvg}</div>
        </motion.div>

        {/* Card 2: Upload */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="theme-card p-5 rounded-2xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold theme-body">Upload</div>
              <div className="text-2xl font-black theme-heading font-mono">
                {uploadSpeed !== null ? uploadSpeed.toFixed(2) : '0.00'}{' '}
                <span className="text-xs font-bold text-orange-500">Mbps</span>
              </div>
            </div>
          </div>
          <div className="mt-4">{sparklineSvg}</div>
        </motion.div>

        {/* Card 3: Ping */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="theme-card p-5 rounded-2xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold theme-body">Ping</div>
              <div className="text-2xl font-black theme-heading font-mono">
                {ping !== null ? ping : '0'}{' '}
                <span className="text-xs font-bold text-orange-500">ms</span>
              </div>
            </div>
          </div>
          <div className="mt-4">{sparklineSvg}</div>
        </motion.div>

        {/* Card 4: Jitter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="theme-card p-5 rounded-2xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold theme-body">Jitter</div>
              <div className="text-2xl font-black theme-heading font-mono">
                {jitter !== null ? jitter : '0'}{' '}
                <span className="text-xs font-bold text-orange-500">ms</span>
              </div>
            </div>
          </div>
          <div className="mt-4">{sparklineSvg}</div>
        </motion.div>

        {/* Card 5: Network Info List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="theme-card p-4 rounded-2xl flex flex-col justify-center space-y-2 text-xs"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 theme-body font-semibold">
              <Network className="w-3.5 h-3.5 text-orange-500" />
              <span>IP Address</span>
            </div>
            <span className="font-extrabold text-orange-500 font-mono">
              {networkInfo?.ip || 'Detecting...'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 theme-body font-semibold">
              <Server className="w-3.5 h-3.5 text-orange-500" />
              <span>ISP</span>
            </div>
            <span className="font-extrabold text-orange-500 truncate max-w-[120px] text-right">
              {networkInfo?.isp || 'Detecting...'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 theme-body font-semibold">
              <Globe className="w-3.5 h-3.5 text-orange-500" />
              <span>Server</span>
            </div>
            <span className="font-extrabold text-orange-500">Auto Select</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 theme-body font-semibold">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>Location</span>
            </div>
            <span className="font-extrabold text-orange-500 truncate max-w-[120px] text-right">
              {networkInfo?.country ? `${networkInfo.country} 🇮🇳` : 'India 🇮🇳'}
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
