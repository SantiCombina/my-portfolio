import { Montserrat } from 'next/font/google';
import React from 'react';

import { LenisProvider } from '@/components/lenis-provider';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/language-context';

import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Santiago Combina - Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio featuring innovative web applications and digital solutions.',
  keywords: [
    'Santiago Combina',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'UI/UX Design',
    'Web Applications',
    'Argentina Developer',
  ],
  authors: [{ name: 'Santiago Combina' }],
  creator: 'Santiago Combina',
  publisher: 'Santiago Combina',
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Santiago Combina - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://santicombina.com',
    siteName: 'Santiago Combina Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Santiago Combina - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Combina - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/blue-code.png',
    shortcut: '/blue-code.png',
    apple: '/blue-code.png',
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        <LanguageProvider>
          <LenisProvider>
            <main>{children}</main>
            <Toaster richColors position="top-center" duration={7000} />
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
