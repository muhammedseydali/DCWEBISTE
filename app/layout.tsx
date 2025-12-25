import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Digital Credibility Builder - Own Your Identity. Control the Narrative.',
    template: '%s | Digital Credibility Builder',
  },
  description: 'Digital Perception Engineering - Define your Unique Digital Identity Phrase and align your digital presence across all platforms. Build the identity people can find, trust, and remember.',
  keywords: ['digital credibility', 'brand identity', 'digital presence', 'perception engineering', 'identity phrase'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalcredibilitybuilder.com',
    siteName: 'Digital Credibility Builder',
    title: 'Digital Credibility Builder - Own Your Identity',
    description: 'Digital Perception Engineering - Define your Unique Digital Identity Phrase',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Credibility Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Credibility Builder',
    description: 'Own Your Identity. Control the Narrative. Become Unmissable.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
