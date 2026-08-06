'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { CreditSection } from '../../components/CreditSection';
import { HelpCircle, Download, Upload, Activity, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '1',
      title: 'Latency Ping & Jitter Probe',
      desc: 'Speedox measures network responsiveness by executing 10 sequential round-trip requests. Ping is calculated as the average round-trip time (RTT), and Jitter measures packet delay variation between probes.',
      icon: Activity,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      num: '2',
      title: '7-Second Parallel Download Test',
      desc: 'To measure real download capacity, Speedox opens multiple concurrent stream connections. Binary data chunks are fetched continuously for a full 7 seconds, measuring live byte accumulation and calculating the overall throughput in Mbps.',
      icon: Download,
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    },
    {
      num: '3',
      title: '7-Second Upload Throughput Test',
      desc: 'Speedox sends binary payload buffers across parallel worker streams for 7 seconds. Using precise progress tracking, it calculates real upstream transmission speed without local memory loopback inflation.',
      icon: Upload,
      color: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      num: '4',
      title: 'Quality Score & Network Telemetry',
      desc: 'Final results are compiled alongside ISP metadata, IP address details, server location, and real-time sparkline telemetry waveforms.',
      icon: CheckCircle2,
      color: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20',
    },
  ];

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

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TEST METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold theme-heading tracking-tight mb-4">
            How Speedox <span className="text-orange-500">Works</span>
          </h1>

          <p className="theme-body text-base sm:text-lg leading-relaxed">
            Understand the step-by-step telemetry process that guarantees accurate, un-inflated broadband speed metrics.
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

        {/* Timeline Steps */}
        <div className="space-y-6 my-10">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="theme-card p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-2xl border ${step.color} shrink-0`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase text-orange-500">Step {step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold theme-heading mb-2">{step.title}</h3>
                  <p className="text-sm theme-body leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <CreditSection />
      </main>
    </div>
  );
}
