import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Masdar Chain',
  description: 'The Future of Finance, Free and Green.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-transparent.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}