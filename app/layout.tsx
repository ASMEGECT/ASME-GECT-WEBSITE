import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import TopTelemetryBar from '@/components/layout/TopTelemetryBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ASME GECT — Mechanical Engineering Student Section | GEC Thrissur',
    template: '%s | ASME GECT',
  },
  description: siteConfig.description,
  keywords: [
    'ASME',
    'ASME GECT',
    'GEC Thrissur',
    'Government Engineering College Thrissur',
    'Mechanical Engineering',
    'Robotics',
    'HPVC',
    'Aerodynamics',
    'CFD',
    'Student Chapter',
    'Engineering India',
    'Kerala Engineering',
  ],
  authors: [{ name: 'ASME GECT Student Section' }],
  creator: 'ASME GECT Technical Wing',
  metadataBase: new URL('https://asme-gect.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://asme-gect.vercel.app',
    siteName: 'ASME GECT Student Section',
    title: 'ASME GECT — Mechanical Engineering Excellence at GEC Thrissur',
    description: siteConfig.description,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'ASME GECT Student Section Engineering Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASME GECT — Mechanical Engineering Student Section',
    description: siteConfig.description,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#090B0E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#090B0E] text-foreground font-sans antialiased flex flex-col selection:bg-asme-red selection:text-white">
        <TopTelemetryBar />
        <Navbar />
        <main className="flex-grow flex flex-col relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
