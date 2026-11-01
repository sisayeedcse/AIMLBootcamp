import type { Metadata } from 'next';
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import EVENT_CONFIG from '@/config/event';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600', '700', '800'],
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'https://aiml-bootcamp.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.organizer.university}`,
    template: `%s | ${EVENT_CONFIG.name}`,
  },
  description:
    'A hands-on, beginner-friendly bootcamp by the IEEE Computer Society Premier University Student Branch Chapter. You start with Python and finish with a deployed machine learning application.',
  keywords: [
    'IEEE CS AI/ML Bootcamp 2026',
    'IEEE Computer Society',
    'Premier University',
    'Machine Learning',
    'Python',
    'Artificial Intelligence',
    'Chattogram',
    'Scikit-learn',
    'Streamlit',
  ],
  authors: [{ name: EVENT_CONFIG.organizer.fullName }],
  creator: EVENT_CONFIG.organizer.fullName,
  publisher: EVENT_CONFIG.organizer.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: EVENT_CONFIG.name,
    title: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.organizer.university}`,
    description:
      'Learn AI. Understand machine learning. Build something real. A hands-on bootcamp by IEEE CS Premier University Student Branch Chapter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${EVENT_CONFIG.name} Banner`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.organizer.university}`,
    description:
      'Learn AI. Understand machine learning. Build something real. A hands-on bootcamp by IEEE CS Premier University Student Branch Chapter.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
