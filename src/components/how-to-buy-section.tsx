"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, ArrowRightLeft, ExternalLink, Shield, TrendingUp, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export function HowToBuySection() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x99d01f21FfD34916F21c7474F1B376168833a8F5")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const steps = [
    {
      imagePath: "/htb 1.png",
      title: "Connect Wallet",
      description: "Connect your MetaMask or Trust Wallet to BNB Chain network. This is your gateway to purchasing Dogix tokens. Both wallets are secure and widely used in the crypto community.",
    },
    {
      imagePath: "/htb2.png",
      title: "Swap BNB",
      description: "Visit PancakeSwap, the most trusted decentralized exchange on BNB Chain, to swap your BNB for Dogix tokens. The process is quick, secure, and straightforward.",
    },
    {
      imagePath: "/htb 3 (1).png",
      title: "Hold & Earn",
      description: "Join the Dogix community by holding your tokens. With our innovative tokenomics, every transaction contributes to a 3% burn, naturally increasing the value of remaining tokens over time.",
    },
  ]

  return (
    <section id="how-to-buy" className="py-24 geometric-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Wallet className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Simple Steps
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            How to Buy
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> Dogix</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Get started with Dogix in just 3 simple steps. Join the community-driven revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-gradient-to-br from-[#0a1f3c] to-[#0d2b4d] border-gold/20 backdrop-blur-sm h-full transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
            >
              <div className="absolute -top-6 -left-6 bg-[#FFA500] text-slate-900 rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl shadow-lg border-2 border-background z-10">
                {index + 1}
              </div>
              <CardHeader className="text-center pb-4 relative">
                <div className="mx-auto mb-6 w-48 h-48 flex items-center justify-center">
                  <img 
                    src={step.imagePath} 
                    alt={step.title}
                    className={`w-full h-full object-contain drop-shadow-gold ${index === 1 ? 'scale-75' : ''}`}
                  />
                </div>
                <CardTitle className="text-xl text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
