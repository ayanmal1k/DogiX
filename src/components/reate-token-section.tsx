"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react"
import Link from "next/link"

export function CreateTokenSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Decorative top element */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
                Create Your Own Token
              </span>
            </div>
          </div>

          {/* Main heading with gold gradient */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center">
            <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Launch Your Own</span>
            <br />
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }} className="text-5xl md:text-7xl font-bold">
              BSC Token Today
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-center drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            No coding required. Deploy your custom token on BSC Chain in minutes with our intuitive token creator. 
            <span className="text-orange-300"> 
              {" "}Build your community, launch your vision.
            </span>
          </p>

          {/* Features grid - matching contract section style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              <Zap className="w-10 h-10 mb-3 text-orange-500" />
              <p className="text-white font-semibold drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>Lightning Fast Deploy</p>
              <p className="text-sm text-gray-400 mt-2">Launch in minutes with zero code</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              <Shield className="w-10 h-10 mb-3 text-orange-500" />
              <p className="text-white font-semibold drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>Secure & Audited</p>
              <p className="text-sm text-gray-400 mt-2">Verified contracts on BSCScan</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              <Rocket className="w-10 h-10 mb-3 text-orange-500" />
              <p className="text-white font-semibold drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>Full Community Control</p>
              <p className="text-sm text-gray-400 mt-2">You own and control everything</p>
            </div>
          </div>

          {/* CTA Button - styled like contract section buttons */}
          <div className="flex justify-center mb-12">
            <Link href="/create">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black drop-shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-200 font-bold text-lg px-8 py-6"
              >
                <Sparkles className="w-5 h-5 mr-2 text-black" />
                Create Your Token Now
                <ArrowRight className="w-5 h-5 ml-2 text-black group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-center text-sm text-gray-400 drop-shadow-lg" style={{textShadow: "0 0 8px rgba(255, 140, 0, 0.4)"}}>
            Join 1000+ tokens already created on our platform
          </p>
        </div>
      </div>
    </section>
  )
}