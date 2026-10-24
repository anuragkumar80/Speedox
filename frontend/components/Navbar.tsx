'use client';

import React, { useState, useEffect } from 'react';
import { fetchHealth } from '../lib/api';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [serverOnline, setServerOnline] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkBackend = async () => {
      const isOk = await fetchHealth();
      setServerOnline(isOk);
    };
    checkBackend();
    const interval = setInterval(checkBackend, 15000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-2 z-50 w-full max-w-7xl mx-auto px-3 sm:px-4 my-2">
      {/* Light Theme Floating Capsule Navbar Container */}
      <div className="w-full theme-nav rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between min-h-[60px] sm:min-h-[66px]">
        
        {/* Brand Logo - Bold & Readable on Mobile */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/logo.png" 
            alt="Speedox Logo" 
            className="h-12 sm:h-16 md:h-18 w-auto max-w-[150px] sm:max-w-none object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-105 transition-transform" 
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-bold transition-colors duration-200 py-1 ${
                  isActive 
                    ? 'text-orange-500 font-extrabold' 
                    : 'text-slate-700 hover:text-orange-500'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Server Connection Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold">
            <span className={`w-2 h-2 rounded-full ${serverOnline ? 'bg-emerald-500 animate-pulse' : serverOnline === false ? 'bg-rose-500' : 'bg-amber-400'}`} />
            <span className="text-slate-800 text-[11px]">
              {serverOnline ? 'Engine Online' : 'Offline'}
            </span>
          </div>

          {/* Visit Studio Button */}
          <a
            href="https://squareupdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
          >
            <span>Visit Studio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/anuragkumar80"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900 text-white hover:bg-orange-500 text-xs font-extrabold shadow-md transition-all duration-200 shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span className="hidden lg:inline">GitHub</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 hover:text-orange-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-2 p-5 rounded-3xl theme-card shadow-2xl flex flex-col gap-4 border border-slate-200 text-slate-900"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-orange-500 text-white font-black'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="https://squareupdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm shadow-md"
              >
                <span>Visit Studio</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/anuragkumar80"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-slate-900 text-white font-bold text-sm"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
