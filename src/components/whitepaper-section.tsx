import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Flame, Users } from "lucide-react"

export function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <FileText className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Documentation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Whitepaper
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> & Vision</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Dogix is a decentralized meme coin built to fix the flaws of other meme coins, giving full power to the community with no central control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="circuit-pattern glow-border">
            <CardHeader>
              <Shield className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Decentralized</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Fully community-driven with renounced contract. No developer control or manipulation.
              </p>
            </CardContent>
          </Card>

          <Card className="circuit-pattern glow-border">
            <CardHeader>
              <Flame className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Instant Burn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                3% burned on every buy and sell transaction, creating continuous deflationary pressure.
              </p>
            </CardContent>
          </Card>

          <Card className="circuit-pattern glow-border">
            <CardHeader>
              <Users className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Community Power</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Holders create the value and future. No false promises from centralized teams.
              </p>
            </CardContent>
          </Card>

          <Card className="circuit-pattern glow-border">
            <CardHeader>
              <FileText className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Transparent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Immutable smart contract with all tokenomics clearly defined and verifiable.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="glow-border bg-transparent"
            asChild
          >
            <a href="/Dogix_Whitepaper_Full.pdf" download>
              <FileText className="mr-2 h-5 w-5 text-orange-500" />
              Download Full Whitepaper
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
