'use client'
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Network } from "lucide-react";
import { useState } from "react";

export default function Header() {

    const { address, isConnected, chain } = useAccount()
    const { connect, connectors } = useConnect()
    const { disconnect } = useDisconnect()
    
    const handleConnect = () => {
        const injectedConnector = connectors.find(c => c.id === 'injected')
        if (injectedConnector) {
            connect({ connector: injectedConnector })
        }
    }

    // Get chain display name
    const getChainName = () => {
        if (!chain) return 'Unknown Chain'
        if (chain.id === 56) return 'BNB Smart Chain'
        if (chain.id === 97) return 'BNB Testnet'
        return chain.name || 'Unknown Chain'
    }

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/new logo.png"
                            alt="Dogix Logo"
                            className="h-12 w-auto"
                        />
                        <span className="text-xl font-bold gold-gradient ml-2">Dogix</span>
                    </Link>
                    
                    {isConnected && (
                        <div className="flex items-center gap-3">
                            {/* Chain Info */}
                            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-800/60 rounded-lg border border-orange-500/30">
                                <Network className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-orange-400 font-semibold">{getChainName()}</span>
                            </div>

                            {/* Wallet Address */}
                            <div className="hidden sm:flex items-center px-3 py-2 bg-slate-800/60 rounded-lg border border-gold/20">
                                <span className="text-sm text-slate-300">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
                            </div>

                            <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => disconnect()}
                                className="border-gold/20 text-slate-200 hover:bg-gold/10"
                            >
                                Disconnect
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}