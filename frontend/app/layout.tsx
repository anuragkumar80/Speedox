import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundDrops } from "../components/BackgroundDrops";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speedox | Next-Gen Internet Speed Test",
  description: "Accurately measure your internet download speed, upload bandwidth, latency ping, and network jitter with Speedox.",
  keywords: ["speed test", "internet speed test", "bandwidth", "ping", "jitter", "fast speedtest", "speedox"],
  authors: [{ name: "Anurag" }],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/logo.png"],
    apple: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col theme-bg-main theme-heading relative">
        <BackgroundDrops />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
