'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { CreditSection } from '../../components/CreditSection';
import { BookOpen, ExternalLink, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      id: '1',
      title: 'Why Multi-Stream Testing Outperforms Single-Stream Speed Tests',
      category: 'Network Engineering',
      date: 'Aug 2026',
      readTime: '4 min read',
      excerpt: 'Single HTTP connections can hit TCP window bottlenecks on high-speed fiber connections. Discover how parallel sockets accurately saturate multi-gigabit connections.',
    },
    {
      id: '2',
      title: 'Understanding Ping vs. Jitter: What Impacts Online Gaming?',
      category: 'Performance Insights',
      date: 'Jul 2026',
      readTime: '5 min read',
      excerpt: 'Low ping is great, but high jitter causes sudden packet stutters and rubber-banding during voice calls and competitive multiplayer games.',
    },
    {
      id: '3',
      title: 'Wi-Fi 6E & Wi-Fi 7 vs Gigabit Ethernet Benchmarks',
      category: 'Hardware & Tech',
      date: 'Jun 2026',
      readTime: '6 min read',
      excerpt: 'We benchmarked real-world wireless throughput against CAT6e cabling across obstacle walls and congested 5GHz/6GHz frequency bands.',
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
            <BookOpen className="w-3.5 h-3.5" />
            <span>SPEEDOX TECH INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold theme-heading tracking-tight mb-4">
            Network Performance <span className="text-orange-500">Blog</span>
          </h1>

          <p className="theme-body text-base sm:text-lg leading-relaxed">
            Deep dives into bandwidth measurement algorithms, networking protocols, latency optimizations, and hardware benchmarks.
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {articles.map((art) => (
            <div key={art.id} className="theme-card p-6 rounded-3xl flex flex-col justify-between hover:border-orange-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-orange-500 font-bold uppercase tracking-wider mb-3">
                  <span>{art.category}</span>
                  <div className="flex items-center gap-1 text-slate-500 font-normal">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold theme-heading mb-3 leading-snug hover:text-orange-500 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs theme-body leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-orange-500">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <CreditSection />
      </main>
    </div>
  );
}
