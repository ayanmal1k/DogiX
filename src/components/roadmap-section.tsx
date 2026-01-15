"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, Sparkles, Rocket, Users, Award, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Burn",
      status: "completed",
      icon: <Rocket className="h-6 w-6" />,
      items: ["Launch on BNB Chain", "Contract renounced", "Burn mechanism activated"],
    },
    {
      phase: "Phase 2",
      title: "Community Growth",
      status: "completed",
      icon: <Users className="h-6 w-6" />,
      items: [
        "Building Twitter & Telegram communities",
        "Awareness campaigns by community",
        "Continuous burn with every trade",
      ],
    },
    {
      phase: "Phase 3",
      title: "Recognition & Listings",
      status: "in-progress",
      icon: <Award className="h-6 w-6" />,
      items: [
        "Apply for CoinGecko & CoinMarketCap",
        "Add DOGIX logo to DEXTools & TrustWallet",
        "Launch official website",
      ],
    },
    {
      phase: "Phase 4",
      title: "Community Innovation",
      status: "upcoming",
      icon: <Sparkles className="h-6 w-6" />,
      items: ["Community creates games", "Build websites & partnerships", "Projects to support DOGIX burn"],
    },
    {
      phase: "Phase 5",
      title: "Long-Term Sustainability",
      status: "upcoming",
      icon: <Shield className="h-6 w-6" />,
      items: ["Ongoing supply reduction", "Scarcity driving price growth", "Community-fueled ecosystem"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-orange-400" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-white" />
      default:
        return <Circle className="h-6 w-6 text-slate-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-orange-900/50 text-orange-300 border-orange-700/50 shadow-orange-900/20 shadow-lg">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-orange-500/30 text-white border-orange-500/50 shadow-lg drop-shadow-lg animate-pulse" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>In Progress</Badge>
      default:
        return <Badge className="bg-slate-700/50 text-slate-300 border-slate-600 shadow-slate-900/20 shadow-lg">Upcoming</Badge>
    }
  }

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Rocket className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Our Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Roadmap & Vision
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> for Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            DOGIX is community-driven, meaning its future depends on the holders themselves. Watch as we execute our vision phase by phase.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center line with blue gradient - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 rounded-full glow hidden md:block shadow-lg shadow-blue-500/50"></div>

          <div className="space-y-8 md:space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} mb-6 md:mb-0`}>
                  <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-gold/20 backdrop-blur-sm hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <div className="text-orange-500">{phase.icon}</div>
                          <CardTitle className="text-base md:text-lg">
                            <span className="text-orange-400">{phase.phase}: {phase.title}</span>
                          </CardTitle>
                        </div>
                        {getStatusBadge(phase.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                            key={itemIndex}
                            className="flex items-start group"
                          >
                            <div className="mr-3 mt-1 transition-transform duration-300 group-hover:scale-110">
                              {phase.status === "completed" ? (
                                <CheckCircle className="h-4 w-4 text-orange-400" />
                              ) : (
                                <Circle className="h-4 w-4 text-slate-500" />
                              )}
                            </div>
                            <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors duration-300">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Center icon with enhanced styling */}
                <div className="relative z-10 mb-6 md:mb-0">
                  <div className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 rounded-full shadow-lg ${phase.status === "in-progress" ? "bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 shadow-orange-500/30" : "bg-gradient-to-br from-slate-900 to-blue-950 border-gold shadow-gold/20"}`}>
                    <div className={`absolute inset-0 rounded-full animate-pulse ${phase.status === "in-progress" ? "bg-orange-400/20" : "bg-gold/20"}`}></div>
                    <div className={`absolute inset-0 rounded-full animate-ping ${phase.status === "in-progress" ? "bg-orange-400/10" : "bg-gradient-to-r from-gold/20 to-transparent"}`}></div>
                    <div className="relative">{getStatusIcon(phase.status)}</div>
                  </div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
