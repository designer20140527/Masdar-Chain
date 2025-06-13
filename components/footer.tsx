"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80 // 考虑固定header的高度
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-yiCZY3cqMECrpB7yXaTNi0gAP0DnOK.png"
                alt="Masdar Chain Logo"
                width={40}
                height={40}
              />
              <span className="font-poppins font-semibold text-xl text-gray-900">Masdar Chain</span>
            </Link>
            <div className="flex space-x-4">
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

          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-3">Menu</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tokenomics')} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Tokenomics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Masdar Chain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

