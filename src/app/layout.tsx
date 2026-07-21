import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IEEE AI/ML Bootcamp 2.0 | IEEE CS Premier University Student Branch Chapter',
  description:
    'Join the IEEE AI/ML Bootcamp 2.0 — From Fundamentals to Real-World Applications. A 10-day intensive bootcamp covering Python, Machine Learning, and AI Deployment. Organized by IEEE Computer Society Premier University Student Branch Chapter, Chattogram, Bangladesh.',
  keywords: [
    'IEEE AI ML Bootcamp',
    'Machine Learning Bangladesh',
    'Python Bootcamp Chittagong',
    'IEEE Computer Society',
    'Premier University IEEE',
    'AI Bootcamp 2026',
    'IEEE Student Branch',
    'Data Science Bootcamp',
    'Scikit-learn',
    'Streamlit deployment',
  ],
  authors: [{ name: 'IEEE CS Premier University Student Branch Chapter' }],
  creator: 'IEEE CS Premier University Student Branch Chapter',
  publisher: 'IEEE Computer Society',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiml-bootcamp.ieeecs.pu.edu.bd',
    siteName: 'IEEE AI/ML Bootcamp 2.0',
    title: 'IEEE AI/ML Bootcamp 2.0 — Learn • Build • Deploy',
    description:
      'A flagship 10-day AI/ML bootcamp organized by IEEE CS Premier University SB Chapter. Covering Python, Machine Learning, and real-world deployment. Chattogram, Bangladesh.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IEEE AI/ML Bootcamp 2.0 — From Fundamentals to Real-World Applications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE AI/ML Bootcamp 2.0 — Learn • Build • Deploy',
    description:
      'A flagship 10-day AI/ML bootcamp by IEEE CS Premier University SB Chapter. Python → ML → Deployment.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  metadataBase: new URL('https://aiml-bootcamp.ieeecs.pu.edu.bd'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050508" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#050508] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
