import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';

import { LenisProvider } from '@/components/lenis-provider';
import { Toaster } from '@/components/ui';
import { LanguageProvider } from '@/lib/contexts/language-context';

import '@/styles/globals.css';

const SITE_URL = 'https://santicombina.vercel.app';

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Santiago Combina - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    url: SITE_URL,
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Santiago Combina',
  jobTitle: 'Full Stack Developer',
  url: SITE_URL,
  email: 'santicombina@gmail.com',
  image: `${SITE_URL}/face.webp`,
  sameAs: ['https://linkedin.com/in/santiago-combina', 'https://github.com/santicombina'],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Web Development'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value === 'es' ? 'es' : 'en';

  return (
    <html lang={lang} className={montserrat.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
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
