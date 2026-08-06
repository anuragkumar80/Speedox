'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Speedometer } from '../components/Speedometer';
import { ResultCards } from '../components/ResultCards';
import { LiveGraph } from '../components/LiveGraph';
import { CreditSection } from '../components/CreditSection';
import { useSpeedTest } from '../hooks/useSpeedTest';
import { AlertTriangle } from 'lucide-react';

export default function Home() {
  const speedTest = useSpeedTest();
  const { currentSpeed, stage, progress, error, runTest, resetTest } = speedTest;

  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-orange-500 selection:text-slate-950 theme-bg-main pb-8 w-full overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-6 pb-6 flex flex-col items-center justify-center">
        
        {/* Connection Error Alert Banner */}
        {error && (
          <div className="w-full max-w-4xl my-2 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-600 text-xs sm:text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
            <div className="flex-1">
              <span className="font-bold">Test Interrupted: </span>
              <span>{error}</span>
            </div>
            <button
              onClick={runTest}
              className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-700 font-semibold text-xs border border-rose-500/40"
            >
              Retry
            </button>
          </div>
        )}

        {/* 2-Column Split Layout: Hero Left + Speedometer Right */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4">
          
          {/* Left Column: Hero Banner & Start CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center w-full">
            <Hero
              stage={stage}
              onStart={runTest}
              onCancel={resetTest}
            />
          </div>

          {/* Right Column: Speedometer Gauge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <Speedometer
              speed={currentSpeed}
              stage={stage}
              progress={progress}
            />
          </div>

        </div>

        {/* Live Bandwidth Telemetry Graph */}
        <div className="w-full mt-4">
          <LiveGraph data={speedTest.history} />
        </div>

        {/* Bottom 5-Card Row */}
        <ResultCards result={speedTest} />

        {/* Credit Section: Built By Anurag (Green GitHub link) + powered by Squareup Studio */}
        <CreditSection />

      </main>

    </div>
  );
}
