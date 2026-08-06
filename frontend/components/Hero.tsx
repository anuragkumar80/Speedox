'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Play, ArrowRight, RotateCcw, XCircle } from 'lucide-react';
import { TestStage } from '../lib/types';

interface HeroProps {
  stage: TestStage;
  onStart: () => void;
  onCancel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ stage, onStart, onCancel }) => {
  const isTesting = stage === 'network' || stage === 'ping' || stage === 'download' || stage === 'upload';
  const isCompleted = stage === 'completed' || stage === 'error';

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto py-2 sm:py-4">
      
      {/* Feature Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
      >
        <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
        <span>NEXT-GEN BANDWIDTH DIAGNOSTICS</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight theme-heading leading-[1.15] w-full"
      >
        Real-Time Internet <br />
        <span className="text-orange-500 font-black">Speed</span> Benchmark
      </motion.h1>

      {/* Subtitle Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 sm:mt-4 theme-body text-xs sm:text-base leading-relaxed font-normal max-w-2xl lg:max-w-none"
      >
        Measure your download speed, upload bandwidth, latency ping, and network jitter with ultra-precision multi-stream algorithms in real time.
      </motion.p>

      {/* Feature Highlights Grid - 100% Background Matched (No white box) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs font-semibold w-full"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 bg-transparent">
          <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-left">
            <div className="theme-heading font-bold text-xs sm:text-sm">Zero Logging</div>
            <div className="theme-body font-normal text-[11px] sm:text-xs">Privacy Preserved</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 bg-transparent">
          <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 shrink-0">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-left">
            <div className="theme-heading font-bold text-xs sm:text-sm">In-Memory Engine</div>
            <div className="theme-body font-normal text-[11px] sm:text-xs">Blazing Fast</div>
          </div>
        </div>
      </motion.div>

      {/* Large Glowing Start Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 sm:mt-8 flex flex-col items-center lg:items-start gap-3 w-full"
      >
        {isTesting ? (
          <button
            onClick={onCancel}
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 font-bold text-sm sm:text-base hover:bg-rose-500/20 transition-all duration-200"
          >
            <XCircle className="w-5 h-5" />
            <span>Cancel Test</span>
          </button>
        ) : (
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group w-full sm:w-auto px-5 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-extrabold text-base sm:text-lg shadow-[0_10px_35px_rgba(249,115,22,0.35)] hover:shadow-[0_15px_45px_rgba(249,115,22,0.5)] transition-all duration-300 flex items-center justify-between gap-4 sm:gap-6"
          >
            {/* Left Play Icon Circle */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/25 flex items-center justify-center shrink-0">
              {isCompleted ? <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />}
            </div>

            {/* Button Text */}
            <span className="tracking-wide text-white text-center flex-1">
              {isCompleted ? 'Restart Speed Test' : 'Start Speed Test'}
            </span>

            {/* Right Arrow Circle */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </motion.button>
        )}

        {/* Sub-text row */}
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs theme-body font-medium pt-1">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>No Signup</span>
          <span>•</span>
          <span>No Logs</span>
          <span>•</span>
          <span>100% Private</span>
        </div>
      </motion.div>

    </div>
  );
};
