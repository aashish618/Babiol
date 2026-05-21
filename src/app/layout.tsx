import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Babiol | 10-Minute Baby Care for Urban Parents',
  description:
    'Babiol is an incubation-ready concept for instant verified baby caretakers and baby essentials in Hyderabad and Bangalore.',
  keywords: ['Babiol', 'baby care', 'babysitter', 'caretaker', 'quick commerce', 'Hyderabad', 'Bangalore'],
  openGraph: {
    title: 'Babiol | Book a Baby Caretaker in 10 Minutes',
    description:
      'A Zepto-style baby care and baby essentials platform for busy city parents who need trusted short-duration support.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <body className="text-slate-950 antialiased">{children}</body>
    </html>
  )
}
