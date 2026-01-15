"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, HelpCircle } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Dogix?",
      answer:
        "Dogix is a decentralized meme coin built on BNB Chain with a unique instant burn mechanism. It's fully community-driven with a renounced contract, meaning no central authority can manipulate the token.",
    },
    
    {
      question: "Is the contract safe?",
      answer:
        "Yes, the Dogix contract has been renounced, meaning developers have no control over it. The contract is verified on BscScan and the liquidity is locked, making it safe from rug pulls.",
    },
    
    {
      question: "What makes Dogix different from other meme coins?",
      answer:
        "Dogix is fully decentralized with no team allocation beyond 1%. The instant burn mechanism on every transaction and renounced contract make it truly community-owned and deflationary.",
    },
  ]

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Got Questions?
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-orange-400 to-yellow-400" style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Everything you need to know about Dogix and how it works
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* FAQ Box on the Left */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative transition-all duration-300 ease-out"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <Card
                  className="relative bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <CardHeader className="relative transition-all duration-300">
                    <CardTitle className="flex items-center justify-between gap-4">
                      <span className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 transition-all duration-500 ease-out ${
                        openIndex === index ? "rotate-180 text-orange-400" : "text-orange-500/70 group-hover:text-orange-400"
                      }`}>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <CardContent className="relative pt-0 pb-6">
                      <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-gold mb-4 rounded-full"></div>
                      <p className="text-gray-300 leading-relaxed drop-shadow-lg">{faq.answer}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Video on the Right */}
          <div className="relative group h-full flex items-center justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-orange-500 to-gold rounded-3xl blur-2xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-b from-gold/30 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md border border-gold/30 w-full aspect-video overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,140,0,0.2)] transition-all duration-500">
              <video
                src="/video 1.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
