import CreateCard from "@/components/CreateCard";
import Header from "@/components/Header";
import { Sparkles } from "lucide-react";

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-gold/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <Header />
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 pb-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Token Creator
            </span>
          </div>
          <h1 style={{
            background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 15px rgba(255, 140, 0, 0.8))"
          }} className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Create Your Own BSC Token</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>Deploy your custom BSC token in seconds with our community-driven token creator</p>
        </div>
        <CreateCard />
      </main>
    </div>
  );
}
