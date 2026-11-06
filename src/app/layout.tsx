import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from '@/config/site';

const polySans = localFont({
  src: [
    {
      path: './fonts/PolySans-Neutral.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PolySans-Median.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PolySans-Bulky.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PolySans-Bulky.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-polysans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#422610',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL('https://clevio.co'),
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    locale: 'id_ID',
    siteName: siteConfig.name,
  },
  icons: {
    icon: '/images/clevio-ai-pro-wordmark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${polySans.variable} scroll-smooth`}>
      <body className="selection:bg-brand-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

