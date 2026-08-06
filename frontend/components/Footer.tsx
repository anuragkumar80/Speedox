'use client';

import React, { useState } from 'react';
import { ShieldCheck, Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="w-full border-t border-slate-800/80 py-8 px-4 mt-12 bg-slate-950/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Speedox Inc. All rights reserved.</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-cyan-400 border border-slate-700">
            v1.0.0
          </span>
        </div>

        {/* Center: Tagline */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
          <span>for ultra fast bandwidth diagnostics</span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-orange-500 transition-colors duration-200 underline underline-offset-4"
          >
            Privacy Policy
          </button>
          <a
            href="https://github.com/anuragkumar88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-lg w-full p-6 rounded-2xl border border-slate-700 shadow-2xl relative"
            >
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Privacy Commitment</h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  Speedox values your privacy above all else. Our bandwidth measurement engine is 100% ephemeral and operates entirely in memory.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>No user tracking, cookies, or account profiling.</li>
                  <li>No speed test history or IP addresses stored on disk.</li>
                  <li>Binary download streams and uploaded test payloads are discarded immediately after calculation.</li>
                </ul>
                <p className="text-slate-400 pt-2 border-t border-slate-800">
                  Your network telemetry is measured strictly for live user display during your active session.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Close & Accept
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
