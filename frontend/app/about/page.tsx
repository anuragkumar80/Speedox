'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { CreditSection } from '../../components/CreditSection';
import { ShieldCheck, Cpu, Zap, Activity, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between theme-bg-main">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-card text-xs font-bold text-slate-700 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Speed Test</span>
        </Link>

        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>ABOUT SPEEDOX ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold theme-heading tracking-tight mb-4">
            Next-Gen Bandwidth <br />
            <span className="text-orange-500">Telemetry Engine</span>
          </h1>

          <p className="theme-body text-base sm:text-lg leading-relaxed">
            Speedox is built from the ground up for high-precision broadband diagnostics without data collection, user profiling, or invasive tracking.
          </p>

          {/* Visit Studio Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://squareupdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <span>Visit Studio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="theme-card p-6 rounded-3xl flex flex-col items-start">
            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-heading mb-2">Parallel Telemetry</h3>
            <p className="text-xs leading-relaxed theme-body">
              Multi-stream worker sockets saturate Wi-Fi 6/7 and gigabit fiber connections to measure true physical wire throughput.
            </p>
          </div>

          <div className="theme-card p-6 rounded-3xl flex flex-col items-start">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-heading mb-2">100% Ephemeral</h3>
            <p className="text-xs leading-relaxed theme-body">
              All binary chunks and upload test buffers live in volatile memory only and are discarded immediately after calculation.
            </p>
          </div>

          <div className="theme-card p-6 rounded-3xl flex flex-col items-start">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold theme-heading mb-2">Jitter & Ping Probes</h3>
            <p className="text-xs leading-relaxed theme-body">
              Sends 10 sequential round-trip probes to calculate exact latency variance and packet stability for gaming and video calls.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="theme-card p-8 rounded-3xl space-y-6 text-sm theme-body leading-relaxed my-10">
          <h2 className="text-2xl font-bold theme-heading text-orange-500">Engine Architecture</h2>
          <p>
            Traditional single-stream speed tests frequently report artificially throttled numbers due to single TCP window limitations on modern operating systems. Speedox solves this by deploying parallel asynchronous worker threads via Web Streams API and FastAPI backend endpoints.
          </p>
          <p>
            By sampling bandwidth utilization across a minimum 20-second sample window, Speedox eliminates temporary burst spikes and computes true continuous average throughput.
          </p>
        </div>

        <CreditSection />
      </main>
    </div>
  );
}
