import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Babiol - On-Demand Baby Care in 10 Minutes',
  description: 'Get trusted babysitters in 10 minutes. The fastest baby care service in Hyderabad and Bangalore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="text-foreground">{children}</body>
    </html>
  )
}
