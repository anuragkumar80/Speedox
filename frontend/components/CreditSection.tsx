'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CreditSection: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 flex flex-col items-center justify-center text-center">
      
      {/* 1. "Built By Anurag" in Green with GitHub Link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <a
          href="https://github.com/anuragkumar80"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center"
        >
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500 hover:text-emerald-400 tracking-wide transition-colors duration-200 drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
            Built By Anurag
          </span>
          <span className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full group-hover:w-36 transition-all duration-300 mt-1" />
        </a>
      </motion.div>

      {/* 2. "— powered by —" divider subtext */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-4 my-2 text-xs font-semibold text-orange-500 uppercase tracking-widest"
      >
        <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-orange-400" />
        <span>powered by</span>
        <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-orange-400" />
      </motion.div>

      {/* 3. "Squareup Studio" Branding with link to https://squareupdigital.com/ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 flex items-center gap-3"
      >
        <a
          href="https://squareupdigital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group hover:opacity-90 transition-opacity duration-200"
        >
          {/* Isometric 3D Cube Icon */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            <svg className="w-full h-full text-orange-500 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              {/* Top Face */}
              <path d="M 50 15 L 85 35 L 50 55 L 15 35 Z" fill="url(#cubeTop)" />
              {/* Left Face */}
              <path d="M 15 35 L 50 55 L 50 90 L 15 70 Z" fill="url(#cubeLeft)" />
              {/* Right Face */}
              <path d="M 50 55 L 85 35 L 85 70 L 50 90 Z" fill="url(#cubeRight)" />
              <defs>
                <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a00" />
                  <stop offset="100%" stopColor="#ff5500" />
                </linearGradient>
                <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e04000" />
                  <stop offset="100%" stopColor="#b32400" />
                </linearGradient>
                <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d6d6d6" />
                  <stop offset="100%" stopColor="#999999" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Text Logo with Sweeping Speed Arrow Underline */}
          <div className="relative flex flex-col items-start">
            <div className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-1 italic">
              <span className="text-orange-500 drop-shadow-sm group-hover:text-orange-600 transition-colors">Squareup</span>
              <span className="text-slate-400 font-extralight tracking-wider">Studio</span>
            </div>

            {/* Sweeping Speed Arrow Arc */}
            <svg className="w-full h-4 text-orange-500 group-hover:text-orange-600 transition-colors mt-0.5" viewBox="0 0 200 20" fill="none">
              <path
                d="M 5 5 C 60 18, 140 18, 195 5 L 180 15 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </motion.div>

    </div>
  );
};
