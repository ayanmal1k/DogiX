"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const tokenomicsData = [
  { name: "Burned Supply", value: 79, color: "#f97316" }, // Changed to orange
  { name: "Circulating Supply", value: 20, color: "#3b82f6" }, // Blue
  { name: "Team Allocation", value: 1, color: "#60a5fa" }, // Lighter blue
]

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-24 geometric-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-gold/10 to-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <PieChart className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Supply Distribution
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Tokenomics
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> & Economics</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Designed for continuous deflation with instant burn mechanism on every transaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-blue-400">Total Supply</span>
                  <span className="text-blue-400 animate-pulse">1Q</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">1,000,000,000,000,000 Dogix</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-orange-400">Burned Supply</span>
                  <span className="text-orange-400 animate-pulse">790T</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">790,000,000,000,000 Dogix (79%)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-blue-400">Circulating Supply</span>
                  <span className="text-blue-400 animate-pulse">200T</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">200,000,000,000,000 Dogix (20%)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-blue-300">Team Allocation</span>
                  <span className="text-blue-300 animate-pulse">10T</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">10,000,000,000,000 Dogix (1%)</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-md relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-blue-950/90 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 rounded-xl p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth={2}
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgb(15, 23, 42, 0.95)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        borderRadius: "8px",
                        backdropFilter: "blur(8px)",
                      }}
                      itemStyle={{ color: "#f8fafc" }}
                    />
                    <Legend 
                      formatter={(value) => <span className="text-slate-300">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-8 text-center relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <img
                    src="/Coin.png"
                    alt="Dogix Coins"
                    className="w-12 h-12 animate-float"
                  />
                  <span className="text-3xl font-bold text-orange-400">3% + 3%</span>
                </div>
                <p className="text-slate-300 text-lg">Burned on every buy & sell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
