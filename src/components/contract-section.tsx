"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, ExternalLink, Shield } from "lucide-react"

export function ContractSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x99d01f21FfD34916F21c7474F1B376168833a8F5"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section id="contract" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Shield className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Trust & Security
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Contract Details
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> & Information</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Transparent, secure, and fully verifiable on the blockchain
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group/coin max-w-[300px] md:max-w-none">
                <div className="absolute -inset-8 bg-gradient-to-r from-gold via-blue-500 to-gold rounded-full blur-2xl opacity-30 group-hover/coin:opacity-75 transition duration-1000 group-hover/coin:duration-200 animate-pulse"></div>
                <div className="absolute -inset-12 bg-blue-400/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <img
                  src="/Coin.png"
                  alt="DOGIX Coin"
                  className="w-full h-auto md:w-[600px] md:h-[600px] object-contain drop-shadow-2xl animate-float relative z-10 mx-auto md:transform md:-translate-x-12"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Contract Address</h3>
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <code className="text-sm md:text-base font-mono text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>{contractAddress}</code>
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="sm"
                      className="flex-shrink-0 bg-gold/10 border-gold/30 text-white drop-shadow-lg hover:bg-gold/20 hover:border-gold/50 hover:scale-105 transition-all duration-200"
                      style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Address
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <div className="flex items-center gap-3 text-white mb-8 drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
              <Shield className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">Community Driven</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  A true decentralized project with no fake promises from developers
                </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  The community is in full control
                </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  Main goal is to surpass Shiba Inu
                </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  Contract verified on BscScan
                </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  Ownership renounced
                </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                <p className="flex items-start gap-3 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0, 0.8)"}}>
                  <span className="text-orange-500 text-2xl leading-none">•</span>
                  Liquidity locked forever
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Button
                onClick={() => window.open('https://bscscan.com/token/0x99d01f21ffd34916f21c7474f1b376168833a8f5', '_blank')}
                variant="outline"
                className="w-full bg-black/40 backdrop-blur-sm border-gold/20 text-white drop-shadow-lg hover:bg-gold/10 hover:border-gold/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-200"
                style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}
              >
                <ExternalLink className="mr-2 h-4 w-4 text-orange-500" />
                BscScan
              </Button>
              <Button
                onClick={() => window.open('https://dex.coinmarketcap.com/token/BSC/0x99d01f21ffd34916f21c7474f1b376168833a8f5', '_blank')}
                variant="outline"
                className="w-full bg-black/40 backdrop-blur-sm border-gold/20 text-white drop-shadow-lg hover:bg-gold/10 hover:border-gold/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-200"
                style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}
              >
                <ExternalLink className="mr-2 h-4 w-4 text-orange-500" />
                CoinMarketCap
              </Button>
              <Button
                onClick={() => window.open('https://www.dextools.io/app/en/bnb/pair-explorer/0x9b59c8fa379908307b92c12a484e331ddb74af1f', '_blank')}
                variant="outline"
                className="w-full bg-black/40 backdrop-blur-sm border-gold/20 text-white drop-shadow-lg hover:bg-gold/10 hover:border-gold/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-200"
                style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}
              >
                <ExternalLink className="mr-2 h-4 w-4 text-orange-500" />
                DEXTools
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
