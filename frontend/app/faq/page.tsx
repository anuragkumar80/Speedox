'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { CreditSection } from '../../components/CreditSection';
import { FileText, ExternalLink, ArrowLeft, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      q: 'Why does my speed test show different results than my ISP plan limit?',
      a: 'ISP plans specify maximum theoretical link speeds under ideal conditions. Real-world speeds can be affected by Wi-Fi distance, router CPU load, background updates, active devices on the network, and regional ISP routing congestion.',
    },
    {
      q: 'Is Speedox free to use and ad-free?',
      a: 'Yes! Speedox is 100% free, open-source, and contains zero ads, trackers, or popups.',
    },
    {
      q: 'Does Speedox collect or log my IP address?',
      a: 'No. Network information (IP, ISP, Server Location) is fetched temporarily during your active test session for display purposes only. No logs or IP history are stored on any database or server disk.',
    },
    {
      q: 'What is a good Ping and Jitter score for online gaming?',
      a: 'For competitive online gaming, a ping below 30 ms is optimal, and jitter under 3 ms ensures smooth packet delivery without lagging or warping.',
    },
    {
      q: 'How does Speedox ensure upload speeds are accurate?',
      a: 'Speedox measures physical wire throughput over a minimum 20-second sample window across parallel worker streams, calibrating against actual physical link capacity to avoid internal loopback spikes.',
    },
    {
      q: 'Can I test my mobile 5G / 4G speed with Speedox?',
      a: 'Yes! Speedox is fully responsive and optimized for modern mobile web browsers across iOS and Android.',
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
            <FileText className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold theme-heading tracking-tight mb-4">
            Got <span className="text-orange-500">Questions?</span>
          </h1>

          <p className="theme-body text-base sm:text-lg leading-relaxed">
            Find answers to common questions about network speed testing, privacy, ISP bandwidth limits, and latency measurements.
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

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {faqs.map((item, idx) => (
            <div key={idx} className="theme-card p-6 rounded-3xl flex flex-col justify-start">
              <div className="flex items-center gap-2 text-orange-500 font-bold mb-3 text-sm">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <h3 className="theme-heading font-extrabold">{item.q}</h3>
              </div>
              <p className="text-xs theme-body leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <CreditSection />
      </main>
    </div>
  );
}
