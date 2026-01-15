import { HeroSection } from "@/components/hero-section"
import { WhitepaperSection } from "@/components/whitepaper-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { TechnicalSection } from "@/components/technical-section"
import { ContractSection } from "@/components/contract-section"
import { CreateTokenSection } from "@/components/reate-token-section"
import { SocialSection } from "@/components/social-section"
import { FaqSection } from "@/components/faq-section"
import { SupportSection } from "@/components/support-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { HowToBuySection } from "@/components/how-to-buy-section"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: 'Dogix - Community-Driven Cryptocurrency',
  description: 'Dogix is a community-driven cryptocurrency built on BNB Chain with advanced tokenomics, instant burn mechanism, and cutting-edge smart contract technology.',
  keywords: ['Dogix', 'cryptocurrency', 'BNB Chain', 'token', 'community', 'burn mechanism', 'tokenomics'],
  authors: [{ name: 'Dogix Community' }],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CreateTokenSection />
      <WhitepaperSection />
      <TokenomicsSection />
      <TechnicalSection />
      <ContractSection />
      
      <HowToBuySection />
      <RoadmapSection />
      <FaqSection />
      <SupportSection />
      <SocialSection />
    </main>
  )
}
