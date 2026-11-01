import type { Metadata, Viewport } from 'next';
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import EVENT from '@/config/event';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600', '700'],
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
  weight: ['400'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'https://aiml-bootcamp-2026.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${EVENT.name} | ${EVENT.organizer.university}`,
    template: `%s | ${EVENT.name}`,
  },
  description:
    'A hands-on, beginner-friendly AI and machine learning bootcamp by the IEEE Computer Society Premier University Student Branch Chapter. 8 sessions, Python to deployment.',
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
  authors: [{ name: EVENT.organizer.name }],
  creator: EVENT.organizer.name,
  publisher: EVENT.organizer.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: EVENT.name,
    title: `${EVENT.name} | ${EVENT.organizer.university}`,
    description:
      'A hands-on, beginner-friendly AI and machine learning bootcamp by the IEEE Computer Society Premier University Student Branch Chapter. 8 sessions, Python to deployment.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: EVENT.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${EVENT.name} | ${EVENT.organizer.university}`,
    description:
      'A hands-on, beginner-friendly AI and machine learning bootcamp by the IEEE Computer Society Premier University Student Branch Chapter. 8 sessions, Python to deployment.',
    images: ['/opengraph-image'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: EVENT.organizer.name,
    alternateName: EVENT.organizer.chapter,
    url: siteUrl,
    email: EVENT.email,
    telephone: EVENT.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Academic Building #4, Premier University',
      addressLocality: 'Chattogram',
      addressCountry: 'BD',
    },
    sameAs: [
      EVENT.socials.facebook,
      EVENT.socials.linkedin,
      EVENT.socials.youtube,
      EVENT.socials.instagram,
    ],
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
