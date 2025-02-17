import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-yiCZY3cqMECrpB7yXaTNi0gAP0DnOK.png"
        />
        <title>Masdar Chain - The Future of Finance, Free and Green</title>
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}

