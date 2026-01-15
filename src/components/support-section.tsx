import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function SupportSection() {
  return (
    <section id="support" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Mail className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Get in Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Email
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> Support</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Need help? Our community-driven support team is here to assist you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="circuit-pattern glow-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <Mail className="mr-2 h-6 w-6 text-orange-500" />
                <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)", backgroundColor: "rgba(255, 140, 0, 0.2)", padding: "0.5rem 1rem", borderRadius: "0.375rem"}}>Contact Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)", backgroundColor: "rgba(255, 140, 0, 0.2)", padding: "0.5rem 1rem", borderRadius: "0.375rem", display: "inline-block"}}>Email Us</h3>
                  <p className="text-slate-400 mb-4">
                    For technical support, partnership inquiries, or general questions
                  </p>
                  <Button asChild className="glow-border bg-orange-500 text-white hover:bg-orange-600 border-orange-600">
                    <a href="mailto:Dogi-x@outlook.com">Dogi-x@outlook.com</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
