import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Lock, Zap, Shield, CheckCircle, AlertTriangle, Sparkles } from "lucide-react"

export function TechnicalSection() {
  return (
    <section id="technical" className="py-24 geometric-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-gold/10 to-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Cpu className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Advanced Tech
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Technical Excellence
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> & Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Built on BNB Chain with advanced tokenomics, security features, and cutting-edge smart contract technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative min-h-[600px] md:min-h-[800px]">
          {/* Left Cards Column */}
          <div className="space-y-6 md:space-y-8">
            <Card className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 border-gold/20 backdrop-blur-sm rounded-xl md:rounded-[2rem] md:rounded-r-none transform hover:translate-x-2 transition-transform">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 bg-gold/20 rounded-lg mr-3">
                    <Database className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Blockchain Infrastructure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Network</span>
                  <Badge className="bg-gold/20 text-white border-gold/30 drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>BNB Chain (BEP-20)</Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Standard</span>
                  <Badge className="bg-gold/20 text-white border-gold/30 drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>BEP-20</Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Decimals</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600">18</Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Symbol</span>
                  <Badge className="bg-blue-900/50 text-blue-300 border-blue-700/50">Dogix</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 border-gold/20 backdrop-blur-sm rounded-xl md:rounded-[2rem] md:rounded-r-none transform hover:translate-x-2 transition-transform">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 bg-gold/20 rounded-lg mr-3">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Security Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Contract Status</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Renounced
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Liquidity</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <Lock className="w-3 h-3 mr-1" />
                    Locked Forever
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Audit Status</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Ownership</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Renounced
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column with Image */}
          <div className="relative flex items-center justify-center order-first md:order-none mb-8 md:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-xl blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-blue-500/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
            
            <div className="relative group hover:scale-105 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-blue-500 to-gold rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative p-4 md:p-8 rounded-xl max-w-[280px] md:max-w-md bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="absolute top-4 right-4 z-10">
                  <Sparkles className="h-6 w-6 text-orange-500 animate-pulse" />
                </div>
                <img
                  src="/dogix technical.png"
                  alt="DOGIX Cybernetic Technology"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
                <div className="text-center mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Cybernetic Innovation</h3>
                  <p className="text-sm md:text-base text-slate-300">Where technology meets community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="space-y-6 md:space-y-8">
            <Card className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 border-gold/20 backdrop-blur-sm rounded-xl md:rounded-[2rem] md:rounded-l-none transform hover:-translate-x-2 transition-transform">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 bg-gold/20 rounded-lg mr-3">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Burn Mechanism</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Buy Tax</span>
                  <Badge className="bg-orange-900/50 text-orange-300 border-orange-700/50">
                    3% Burn
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Sell Tax</span>
                  <Badge className="bg-orange-900/50 text-orange-300 border-orange-700/50">
                    3% Burn
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Transfer Tax</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    0%
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Burn Type</span>
                  <Badge className="bg-gold/20 text-white border-gold/30 drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
                    <Zap className="w-3 h-3 mr-1" />
                    Instant
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 border-gold/20 backdrop-blur-sm rounded-xl md:rounded-[2rem] md:rounded-l-none transform hover:-translate-x-2 transition-transform">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 bg-gold/20 rounded-lg mr-3">
                    <Cpu className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>Smart Contract</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Compiler</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600">Solidity 0.8.19</Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Optimization</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Enabled
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Proxy Contract</span>
                  <Badge className="bg-slate-700/50 text-slate-300 border-slate-600">No</Badge>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300 font-medium">Verification</span>
                  <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700/50">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
