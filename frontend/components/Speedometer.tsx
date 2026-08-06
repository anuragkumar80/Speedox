'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestStage } from '../lib/types';
import { Download, Upload, Activity, CheckCircle2 } from 'lucide-react';

interface SpeedometerProps {
  speed: number;
  stage: TestStage;
  progress: number;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ speed, stage, progress }) => {
  const getNeedleAngle = (val: number): number => {
    if (val <= 0) return -120;
    if (val >= 1000) return 120;
    const normalized = Math.log10(val + 1) / Math.log10(1001);
    return -120 + normalized * 240;
  };

  const needleAngle = getNeedleAngle(speed);

  // SVG Gauge Calculations
  const radius = 145;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const maxArcLength = circumference * (240 / 360); // 240 degrees total arc

  // Exact speed ratio between 0 and 1
  const speedRatio = Math.max(0, Math.min(1, (needleAngle - (-120)) / 240));
  
  // Active filled orange arc length matching needle position precisely
  const activeArcLength = maxArcLength * speedRatio;

  const tickValues = [0, 10, 50, 100, 250, 500, 1000];

  const getStageBadge = () => {
    switch (stage) {
      case 'ping':
        return (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold tracking-wider uppercase animate-pulse">
            <Activity className="w-3.5 h-3.5" />
            <span>LATENCY TEST</span>
          </div>
        );
      case 'download':
        return (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 text-xs font-bold tracking-wider uppercase animate-pulse">
            <Download className="w-3.5 h-3.5" />
            <span>TESTING DOWNLOAD</span>
          </div>
        );
      case 'upload':
        return (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold tracking-wider uppercase animate-pulse">
            <Upload className="w-3.5 h-3.5" />
            <span>TESTING UPLOAD</span>
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold tracking-wider uppercase">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>TEST COMPLETE</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <span>READY TO TEST</span>
          </div>
        );
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-2 w-full max-w-full overflow-hidden">
      
      {/* Fiber-Optic Ambient Light Trails background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[300px] sm:h-[350px] pointer-events-none opacity-30 blur-sm overflow-hidden">
        <svg className="w-full h-full text-orange-400" viewBox="0 0 400 300" fill="none">
          <path d="M 50 150 Q 200 50 400 80" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <path d="M 50 150 Q 200 100 400 140" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <path d="M 50 150 Q 200 150 400 200" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>

      {/* Main Speedometer Gauge Container */}
      <div className="relative w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center shrink-0">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent blur-2xl pointer-events-none" />

        {/* SVG Arc Gauge - Rotated 150 degrees to start at 0 Mbps (bottom-left) */}
        <svg className="w-full h-full transform rotate-[150deg]" viewBox="0 0 360 360">
          <defs>
            <linearGradient id="orangeGaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#ff8c00" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track Arc (Full 240 degrees Silver Slate) */}
          <circle
            cx="180"
            cy="180"
            r={radius}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={strokeWidth}
            strokeDasharray={`${maxArcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Active Animated Progress Arc (Synchronized 1-to-1 with Needle Position) */}
          <motion.circle
            cx="180"
            cy="180"
            r={radius}
            fill="none"
            stroke="url(#orangeGaugeGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${activeArcLength} ${circumference}`}
            strokeLinecap="round"
            filter="url(#orangeGlow)"
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          />
        </svg>

        {/* Dial Scale Tick Labels */}
        {tickValues.map((val) => {
          const angle = getNeedleAngle(val);
          const rad = ((angle - 90) * Math.PI) / 180;
          const labelRadius = radius - 30;
          const x = 180 + labelRadius * Math.cos(rad);
          const y = 180 + labelRadius * Math.sin(rad);

          return (
            <div
              key={val}
              className="absolute text-[11px] sm:text-xs font-extrabold text-slate-800 font-mono select-none"
              style={{
                left: `${(x / 360) * 100}%`,
                top: `${(y / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {val}
            </div>
          );
        })}

        {/* Center Logo */}
        <div className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <img 
            src="/logo.png" 
            alt="Speedox Logo" 
            className="h-10 sm:h-14 w-auto object-contain mix-blend-multiply drop-shadow-md" 
          />
        </div>

        {/* Animated Sleek Orange Needle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-full h-full relative"
            animate={{ rotate: needleAngle }}
            transition={{ type: 'spring', damping: 30, stiffness: 140 }}
          >
            {/* Needle Shaft */}
            <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-[115px] sm:h-[135px] bg-gradient-to-t from-amber-500 via-orange-500 to-orange-400 rounded-t-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
            {/* Needle Center Pivot Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-4 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)] flex items-center justify-center">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-400" />
            </div>
          </motion.div>
        </div>

        {/* Center Digital Speed Counter Display */}
        <div className="absolute bottom-[20%] flex flex-col items-center justify-center pointer-events-none select-none">
          <motion.div
            key={stage === 'idle' ? 'idle' : Math.floor(speed)}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 font-mono drop-shadow-sm"
          >
            {stage === 'idle' ? '0.00' : speed.toFixed(2)}
          </motion.div>
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-orange-500 mt-0.5">
            MBPS
          </span>
        </div>

      </div>

      {/* Stage Status Badge */}
      <div className="mt-1">
        {getStageBadge()}
      </div>

    </div>
  );
};
