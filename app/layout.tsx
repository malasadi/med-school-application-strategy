import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mo Alasadi | Med school strategy',
  description:
    'Get a personalized breakdown of your Canadian medical school application. Know whether to retake the MCAT, raise your GPA, build activities, or apply this cycle.',
  icons: {
    icon: 'images/icon.svg',
    apple: 'images/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
