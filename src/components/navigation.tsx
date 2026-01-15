"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, ExternalLink, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#whitepaper", label: "Whitepaper" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#how-to-buy", label: "How to Buy" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/new logo.png"
              alt="Dogix Logo"
              className="h-16 w-auto py-2"
            />
            <span className="text-2xl font-bold gold-gradient ml-2">Dogix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-blue-300 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <Button 
                className="glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <a href="/create">
                  <Zap className="w-4 h-4 mr-2" />
                  Create Your Token
                </a>
              </Button>
              <Button 
                className="glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <a 
                  href="https://pancakeswap.finance/swap?outputCurrency=0x99d01f21FfD34916F21c7474F1B376168833a8F5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Buy Dogix
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-blue-300 hover:text-primary transition-colors font-medium block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="/create">
                <Zap className="w-4 h-4 mr-2" />
                ✨ Create Your Token
              </a>
            </Button>
            <Button 
              className="w-full glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a 
                href="https://pancakeswap.finance/swap?outputCurrency=0x99d01f21FfD34916F21c7474F1B376168833a8F5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Buy Dogix
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
