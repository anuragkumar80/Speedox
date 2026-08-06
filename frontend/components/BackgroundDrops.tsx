'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDrops: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Top Left Floating Warm Orange Glow Drop */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400/20 via-amber-500/10 to-transparent blur-3xl"
      />

      {/* Top Right Floating Emerald/Cyan Ambient Drop */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-orange-500/15 via-amber-400/10 to-transparent blur-3xl"
      />

      {/* Bottom Left Subtle Accent Drop */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-amber-500/10 to-transparent blur-3xl"
      />

      {/* Center Subtle Grid Dots Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
      />

    </div>
  );
};
