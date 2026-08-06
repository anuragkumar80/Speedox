'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, XCircle } from 'lucide-react';
import { TestStage } from '../lib/types';

interface StartButtonProps {
  stage: TestStage;
  onStart: () => void;
  onCancel: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ stage, onStart, onCancel }) => {
  const isTesting = stage === 'network' || stage === 'ping' || stage === 'download' || stage === 'upload';
  const isCompleted = stage === 'completed' || stage === 'error';

  if (isTesting) {
    return (
      <div className="flex flex-col items-center gap-3 my-4">
        <motion.button
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-sm font-semibold transition-all duration-200"
        >
          <XCircle className="w-4 h-4" />
          <span>Cancel Test</span>
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 my-4">
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden"
      >
        {/* Glow Layer */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-center justify-center gap-3">
          {isCompleted ? (
            <>
              <RotateCcw className="w-5 h-5" />
              <span>TEST AGAIN</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              <span>START SPEED TEST</span>
            </>
          )}
        </div>
      </motion.button>
    </div>
  );
};
