"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-gray-200" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-yiCZY3cqMECrpB7yXaTNi0gAP0DnOK.png"
              alt="Masdar Chain Logo"
              width={32}
              height={32}
            />
            <span className="font-poppins font-semibold text-lg text-gray-900">Masdar Chain</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="https://x.com/MASDAR_OFFICIAL"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image 
                src="/twitter.svg" 
                alt="Twitter" 
                width={20} 
                height={20} 
                className="transition-colors"
                style={{ filter: 'invert(37%) sepia(10%) saturate(505%) hue-rotate(182deg) brightness(94%) contrast(92%)' }}
              />
            </Link>
            <Link
              href="https://t.me/Masdar_Chain"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image 
                src="/telegram.svg" 
                alt="Telegram" 
                width={20} 
                height={20}
                className="transition-colors"
                style={{ filter: 'invert(37%) sepia(10%) saturate(505%) hue-rotate(182deg) brightness(94%) contrast(92%)' }}
              />
            </Link>
            <Link
              href="https://www.dextools.io/app/en/solana/pair-explorer/5jrge11pJi1gLeHEcUVfRntawGH532YYtApurMT2mxyS"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image 
                src="/dextools.svg" 
                alt="DexTools" 
                width={20} 
                height={20}
                className="transition-colors"
                style={{ filter: 'invert(37%) sepia(10%) saturate(505%) hue-rotate(182deg) brightness(94%) contrast(92%)' }}
              />
            </Link>
            <Link
              href="https://dexscreener.com/solana/5jrge11pJi1gLeHEcUVfRntawGH532YYtApurMT2mxyS"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image 
                src="/dex-screener-seeklogo.svg" 
                alt="Dex Screener" 
                width={20} 
                height={20}
                className="transition-colors"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(37%) sepia(10%) saturate(505%) hue-rotate(182deg) brightness(94%) contrast(92%)'
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

