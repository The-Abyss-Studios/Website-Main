import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Game Library | Abyss Studios',
  description: 'Explore our collection of immersive gaming experiences crafted by Abyss Studios.',
  openGraph: {
    title: 'Game Library | Abyss Studios',
    description: 'Explore our collection of immersive gaming experiences crafted by Abyss Studios.',
    images: ['/images/ABYSS.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Library | Abyss Studios',
    description: 'Explore our collection of immersive gaming experiences crafted by Abyss Studios.',
    images: ['/images/ABYSS.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DC143C',
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 