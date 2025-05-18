import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
//import { Analytics } from "@vercel/analytics/react"
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: 'Abyss Studios | Premier Game Development Studio in India',
  description: 'Abyss Studios is a premier game development company in India, crafting immersive gaming experiences that push the boundaries of entertainment. Led by Suryanshu Mittal, we create innovative games that combine art, music, and cutting-edge technology.',
  keywords: [
    'game development',
    'gaming studio',
    'immersive games',
    'Abyss Studios',
    'game developers',
    'gaming company',
    'video games',
    'game design',
    'Suryanshu Mittal',
    'Delhi',
    'India',
    'Indie games',
    'Game Studio India',
    'Game Development India',
    'Art and Music in Games',
    'Innovative Games',
    'ABYSS',
    'Game Studio Delhi',
    'Indian Game Development',
    'Next-Gen Gaming'
  ].join(', '),
  authors: [{ name: 'Abyss Studios, Suryanshu Mittal', url: 'https://abyssstudios.site' }],
  creator: 'Abyss Studios',
  publisher: 'Abyss Studios',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abyssstudios.site',
    title: 'Abyss Studios | Premier Game Development Studio in India',
    description: 'Crafting immersive gaming experiences that push the boundaries of entertainment. Based in Delhi, India.',
    siteName: 'Abyss Studios',
    images: [
      {
        url: '/images/ABYSS.png',
        width: 1200,
        height: 630,
        alt: 'Abyss Studios - Game Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abyss Studios | Premier Game Development Studio in India',
    description: 'Crafting immersive gaming experiences that push the boundaries of entertainment. Based in Delhi, India.',
    images: ['/images/ABYSS.png'],
    creator: '@theabyssstudios',
  },
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://abyssstudios.site',
  },
  category: 'game development',
  classification: 'Game Development Studio',
  referrer: 'origin-when-cross-origin',
  themeColor: '#DC143C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
