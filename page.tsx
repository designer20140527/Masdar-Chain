import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Zap, ShoppingCart, LayersIcon as LayersLinked } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

// Previous imports remain the same...

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-24">
          <Header />
          <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60 animate-fade-in" />
          <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
          <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-slide-up">
              <div className="relative w-[120px] h-[120px] mx-auto mb-10">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse" />
                <Image
                  src="/hero.png"
                  alt="Masdar Chain Logo"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300 drop-shadow-xl animate-float"
                />
              </div>
              <h1 className="font-poppins text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-8 animate-fade-in">
                Welcome to <span className="text-green-600">Masdar Chain</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed font-inter">
                Imagine a future where finance is not only decentralized but also environmentally responsible. Masdar
                Chain is building that future, creating a next-generation Layer 1 solution that connects isolated
                blockchains into a seamless, thriving ecosystem powered by clean energy.
              </p>
              <div className="mt-12 flex justify-center gap-6">
                <Link
                  href="https://x.com/MASDAR_OFFICIAL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                    Twitter
                  </Button>
                </Link>
                <Link
                  href="https://t.me/Masdar_Chain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Telegram
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          <div className="container mx-auto px-4 text-center relative">
            <p className="text-xl md:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Whether you're building, trading, or exploring, Masdar Chain offers a fast, flexible, and user-friendly
              network that delivers the true power of decentralization without costing the Earth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjhmOGY4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-center font-poppins mb-16 animate-fade-in">
              <span className="text-green-600">Features</span> that Set Us Apart
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up [animation-delay:200ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="font-poppins text-xl text-center">Financial Inclusion</CardTitle>
                </CardHeader>
                <CardContent className="font-inter text-center">
                  Providing banking and financial services to unbanked and underserved populations with fast, secure,
                  and low-cost transactions.
                </CardContent>
              </Card>
              <Card className="border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up [animation-delay:400ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="font-poppins text-xl text-center">DeFi Revolution</CardTitle>
                </CardHeader>
                <CardContent className="font-inter text-center">
                  At the forefront of decentralized finance, offering tools for lending, borrowing, staking, and yield
                  farming.
                </CardContent>
              </Card>
              <Card className="border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up [animation-delay:600ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                    <ShoppingCart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="font-poppins text-xl text-center">E-Commerce Innovation</CardTitle>
                </CardHeader>
                <CardContent className="font-inter text-center">
                  Enable merchants to accept $MASDAR for goods and services, paving the way for faster, more secure
                  transactions.
                </CardContent>
              </Card>
              <Card className="border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up [animation-delay:800ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                    <LayersLinked className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="font-poppins text-xl text-center">Scalable Layer 1</CardTitle>
                </CardHeader>
                <CardContent className="font-inter text-center">
                  A next-generation Layer 1 blockchain providing a scalable foundation for decentralized applications.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainable Future Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 animate-slide-up">
                <h2 className="text-xl text-green-700 font-semibold font-inter mb-4">
                  A Revolutionary Step Towards a Sustainable Future
                </h2>
                <p className="text-4xl md:text-5xl font-semibold font-poppins mb-8 text-gray-900">
                  The Gas-Free Blockchain, Powered by Renewable Energy
                </p>
                <div className="text-gray-600 font-inter space-y-4">
                  <p>
                    Masdar Chain is proud to be partnering with Abu Dhabi Future Energy Company (MASDAR) to build a
                    revolutionary completely free blockchain with zero network fees.
                  </p>
                  <p>
                    This groundbreaking initiative is made possible by a unique energy model combining 5.2 gigawatts
                    (5.2 GW) of solar photovoltaic power with 19 gigawatt-hours (19 GWh) of battery storage.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 animate-slide-up [animation-delay:200ms]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <Image
                    src="/image1.png"
                    alt="Sustainable Energy"
                    width={400}
                    height={400}
                    className="mx-auto relative hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-center font-poppins mb-16 animate-fade-in">
              How It <span className="text-green-600">Works</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 border border-green-100 hover:-translate-y-2 animate-slide-up [animation-delay:100ms] group">
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500" />
                    <Image
                      src="/image2.png"
                      alt="Simplified dApp Development"
                      width={120}
                      height={120}
                      className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-semibold mb-4 text-green-700 text-center">
                  Simplified dApp Development
                </h3>
                <p className="font-inter text-gray-600 text-center">
                  With Masdar Chain, your dApps can connect directly to multiple blockchains without worrying about
                  complex underlying protocols. Our user-friendly SDK and APIs empower developers to unleash their
                  creativity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 border border-green-100 hover:-translate-y-2 animate-slide-up [animation-delay:300ms] group">
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500" />
                    <Image
                      src="/image3.png"
                      alt="Cross-Chain Integration"
                      width={120}
                      height={120}
                      className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-semibold mb-4 text-green-700 text-center">
                  Cross-Chain Integration
                </h3>
                <p className="font-inter text-gray-600 text-center">
                  Seamlessly connect and interact with multiple blockchain networks. Our advanced protocols ensure
                  secure and efficient cross-chain transactions and data exchange.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 border border-green-100 hover:-translate-y-2 animate-slide-up [animation-delay:500ms] group">
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500" />
                    <Image
                      src="/image4.png"
                      alt="Efficient Node Collaboration"
                      width={120}
                      height={120}
                      className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-semibold mb-4 text-green-700 text-center">
                  Efficient Node Collaboration
                </h3>
                <p className="font-inter text-gray-600 text-center">
                  Every node is an essential part of the network. Through efficient collaboration, Masdar Chain
                  optimizes resource allocation, making transaction processing smarter, more effective, and sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-center font-poppins mb-16 animate-fade-in">
              <span className="text-green-600">Tokenomics</span>
            </h2>
            <div className="mx-auto max-w-3xl animate-slide-up">
              <div className="grid gap-6">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                  <h3 className="font-poppins font-semibold text-2xl mb-4 text-green-700">Total Supply</h3>
                  <p className="font-inter text-4xl text-gray-800 font-bold">1 BILLION $MASDAR</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <p className="font-inter text-sm text-gray-600 mb-2">Liquidity Pool</p>
                    <p className="font-poppins text-2xl text-green-700 font-semibold">70%</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <p className="font-inter text-sm text-gray-600 mb-2">Development</p>
                    <p className="font-poppins text-2xl text-green-700 font-semibold">10%</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <p className="font-inter text-sm text-gray-600 mb-2">Ecosystem</p>
                    <p className="font-poppins text-2xl text-green-700 font-semibold">10%</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <p className="font-inter text-sm text-gray-600 mb-2">Team</p>
                    <p className="font-poppins text-2xl text-green-700 font-semibold">5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjhmOGY4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-center font-poppins mb-16">Roadmap</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white font-poppins text-2xl font-semibold shadow-lg">
                      1
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex-grow border border-green-100">
                      <h3 className="font-poppins text-2xl font-semibold mb-4 text-green-700">
                        Phase 1: Token Launch & Testnet
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2 list-disc list-inside">
                        <li>Initial $MASDAR token launch on the Solana blockchain</li>
                        <li>Community building and engagement</li>
                        <li>Partnership development</li>
                        <li>Testnet launch and refinement</li>
                        <li>Expansion of developer tools</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white font-poppins text-2xl font-semibold shadow-lg">
                      2
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex-grow border border-green-100">
                      <h3 className="font-poppins text-2xl font-semibold mb-4 text-green-700">
                        Phase 2: Mainnet Launch & Mapping
                      </h3>
                      <ul className="font-inter text-gray-600 space-y-2 list-disc list-inside">
                        <li>Official launch of the Masdar Chain mainnet</li>
                        <li>Bridging of $MASDAR tokens from Solana to the Masdar Chain</li>
                        <li>Continued ecosystem growth and adoption</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white font-poppins text-2xl font-semibold shadow-lg">
                      3
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex-grow border border-green-100">
                      <h3 className="font-poppins text-2xl font-semibold mb-4 text-green-700">Phase 3: Expansion</h3>
                      <ul className="font-inter text-gray-600 space-y-2 list-disc list-inside">
                        <li>Further development of the Masdar Chain platform and features</li>
                        <li>Onboarding more projects and partners to the ecosystem</li>
                        <li>Scaling solutions and performance optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

