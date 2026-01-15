import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Users, Flame } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-balance leading-none mb-2 lg:mb-4">
                <span style={{
                  background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 15px rgba(255, 140, 0, 0.8))"
                }}>Dogix</span>
              </h1>
              <div className="space-y-1 lg:space-y-2">
                <span className="text-slate-200 text-4xl lg:text-6xl block font-bold leading-tight">The Future of</span>
                <span style={{
                  background: "linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))"
                }} className="text-4xl lg:text-6xl block font-bold leading-tight">Meme Coins</span>
              </div>
              <p className="text-xl text-slate-300 text-pretty max-w-2xl leading-relaxed mt-6">
                A revolutionary decentralized meme coin built on BNB Chain with an innovative instant burn mechanism.
                Community-driven, renounced contract, and engineered to delete zeros through deflationary tokenomics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
                asChild
              >
                <a 
                  href="https://pancakeswap.finance/swap?outputCurrency=0x99d01f21FfD34916F21c7474F1B376168833a8F5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Buy Dogix Now
                  <TrendingUp className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 font-semibold text-lg px-8 py-4 bg-transparent text-slate-200"
                asChild
              >
                <a href="#whitepaper">
                  Read Whitepaper
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-blue-500/20 to-gold/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
              <div className="premium-card animated-card p-6 rounded-3xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/new logo.png"
                  alt="DOGIX Logo"
                  className="relative w-full max-w-md h-auto rounded-2xl drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
