'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RocketIcon, Copy, ExternalLink, CheckCircle, Zap, AlertCircle, Wallet } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import useDeploy from "@/hooks/useDeploy";
import { fetchTokenBalance } from "@/lib/utils";

const DOGIX_TOKEN_ADDRESS = "0x99d01f21FfD34916F21c7474F1B376168833a8F5";
const MIN_BALANCE = 1000000;

export default function CreateCard() {
    const { address, isConnected, chain } = useAccount()
    const { connect, connectors } = useConnect()
    const { disconnect } = useDisconnect()
    const { deploy, isPending, deployedAddress, transactionHash } = useDeploy()
    const [tokenName, setTokenName] = useState("")
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenSupply, setTokenSupply] = useState(1000)
    const [tokenDecimals, setTokenDecimals] = useState(18)
    const [userBalance, setUserBalance] = useState(null)
    const [isLoadingBalance, setIsLoadingBalance] = useState(false)

    // Check if user is on BSC
    const isBSC = chain?.id === 56 || chain?.id === 97
    const isWrongNetwork = isConnected && !isBSC

    // Fetch token balance when wallet connects
    useEffect(() => {
        if (isConnected && isBSC && address) {
            fetchBalance()
        } else {
            setUserBalance(null)
        }
    }, [isConnected, chain, address])

    const fetchBalance = async () => {
        setIsLoadingBalance(true)
        try {
            const balance = await fetchTokenBalance(address, DOGIX_TOKEN_ADDRESS)
            setUserBalance(balance)
        } catch (error) {
            console.error("Error fetching balance:", error)
            toast.error("Failed to fetch token balance")
            setUserBalance(0)
        } finally {
            setIsLoadingBalance(false)
        }
    }

    const hasEnoughBalance = userBalance !== null && userBalance >= MIN_BALANCE

    const handleConnect = () => {
        const injectedConnector = connectors.find(c => c.id === 'injected')
        if (injectedConnector) {
            connect({ connector: injectedConnector })
        }
    }

    const getExplorerUrl = () => {
        const explorers = {
            56: 'https://bscscan.com',
            97: 'https://testnet.bscscan.com',
        }
        return explorers[chain?.id] || 'https://bscscan.com'
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        toast.success("Copied to clipboard!")
    }

    const handleDeploy = async () => {
        if (!isConnected) {
            toast.warning("Connect Wallet");
            return
        }
        if (!hasEnoughBalance) {
            toast.warning("Insufficient Dogix balance");
            return
        }
        if (!tokenName) {
            toast.warning("Enter Token Name");
            return
        }
        if (!tokenSymbol) {
            toast.warning("Enter Token Symbol");
            return
        }
        if (!tokenSupply) {
            toast.warning("Enter Token Supply");
            return
        }
        if (tokenSupply < 1) {
            toast.warning("Token Supply must be greater than 1");
            return
        }
        if (!tokenDecimals) {
            toast.warning("Enter Token Decimals");
            return
        }
        if (tokenDecimals > 18) {
            toast.warning("Token Decimals must be less than 18");
            return
        }
        if (tokenDecimals < 1) {
            toast.warning("Token Decimals must be greater than 1");
            return
        }
        try {
            const supplyToMint = tokenSupply * 10 ** tokenDecimals
            await deploy(tokenName, tokenSymbol, supplyToMint, tokenDecimals);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Card className="w-full max-w-2xl p-8 space-y-6 bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-gold/20 text-slate-100 backdrop-blur-sm">

            {deployedAddress ? (
                // Success Screen
                <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-50"></div>
                            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full">
                                <CheckCircle size={48} className="text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg" style={{textShadow: "0 0 20px rgba(34, 197, 94, 0.8)"}}>Token Deployed!</h2>
                        <p className="text-slate-300 text-center">Your token has been successfully deployed to the blockchain</p>
                    </div>
                    
                    <div className="space-y-4 bg-gradient-to-br from-emerald-950/40 to-green-950/40 p-6 rounded-xl border border-emerald-500/30">
                        <div className="bg-slate-800/60 p-4 rounded-lg border border-emerald-500/20">
                            <p className="text-xs text-slate-400 mb-2">Contract Address</p>
                            <div className="flex items-center gap-3">
                                <code className="text-sm font-mono break-all text-white drop-shadow-lg flex-1">{deployedAddress}</code>
                                <button
                                    onClick={() => copyToClipboard(deployedAddress)}
                                    className="flex-shrink-0 p-2 hover:bg-slate-700 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors"
                                    title="Copy address"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-800/60 p-4 rounded-lg border border-emerald-500/20">
                            <p className="text-xs text-slate-400 mb-2">Transaction Hash</p>
                            <div className="flex items-center gap-3">
                                <code className="text-sm font-mono break-all text-white drop-shadow-lg flex-1">{transactionHash?.slice(0, 20)}...</code>
                                <button
                                    onClick={() => copyToClipboard(transactionHash)}
                                    className="flex-shrink-0 p-2 hover:bg-slate-700 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors"
                                    title="Copy hash"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Button
                                onClick={() => window.open(`${getExplorerUrl()}/address/${deployedAddress}`, '_blank')}
                                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold"
                            >
                                <ExternalLink size={18} />
                                View on Explorer
                            </Button>
                            <Button
                                onClick={() => {
                                    setTokenName("")
                                    setTokenSymbol("")
                                    setTokenSupply(1000)
                                    setTokenDecimals(18)
                                }}
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold"
                            >
                                <RocketIcon size={18} />
                                Create Another
                            </Button>
                        </div>
                    </div>
                </div>
            ) : isWrongNetwork ? (
                // Wrong Network Message
                <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-50"></div>
                            <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-full">
                                <AlertCircle size={48} className="text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg" style={{textShadow: "0 0 20px rgba(239, 68, 68, 0.8)"}}>Wrong Network</h2>
                        <p className="text-slate-300 text-center text-lg">Connect with BSC supported chain to create token</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-950/40 to-orange-950/40 p-6 rounded-xl border border-red-500/30 space-y-4">
                        <p className="text-slate-300 text-center">This application only supports:</p>
                        <div className="space-y-2">
                            <div className="bg-slate-800/60 p-4 rounded-lg border border-red-500/20 text-center">
                                <p className="font-semibold text-white">BNB Smart Chain (Mainnet)</p>
                                <p className="text-xs text-slate-400">Chain ID: 56</p>
                            </div>
                            <div className="bg-slate-800/60 p-4 rounded-lg border border-red-500/20 text-center">
                                <p className="font-semibold text-white">BNB Smart Chain (Testnet)</p>
                                <p className="text-xs text-slate-400">Chain ID: 97</p>
                            </div>
                        </div>
                    </div>

                    <Button 
                        onClick={() => disconnect()} 
                        className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-6"
                    >
                        Disconnect & Switch Network
                    </Button>
                </div>
            ) : !isConnected ? (
                // Not Connected Message
                <>
                    <div>
                        <CardTitle className="text-2xl font-bold text-white drop-shadow-lg mb-2" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
                            BSC Token Creator
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-base">
                            Enter your token details and deploy to BSC Chain instantly
                        </CardDescription>
                    </div>

                    <Button 
                        onClick={handleConnect} 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 text-lg"
                    >
                        <Zap size={20} />
                        Connect MetaMask
                    </Button>
                </>
            ) : !hasEnoughBalance ? (
                // Insufficient Balance Message
                <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-lg opacity-50"></div>
                            <div className="relative bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-full">
                                <Wallet size={48} className="text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg" style={{textShadow: "0 0 20px rgba(234, 179, 8, 0.8)"}}>Insufficient Balance</h2>
                        <p className="text-slate-300 text-center">You need at least 100,000 Dogix to create a token</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-950/40 to-orange-950/40 p-6 rounded-xl border border-yellow-500/30 space-y-4">
                        <div className="space-y-2">
                            <p className="text-slate-400 text-sm">Your Current Balance:</p>
                            <div className="bg-slate-800/60 p-4 rounded-lg border border-yellow-500/20">
                                <p className="text-2xl font-bold text-white drop-shadow-lg">
                                    {isLoadingBalance ? "Loading..." : (userBalance || 0).toLocaleString()}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">Dogix Tokens</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-slate-400 text-sm">Required Balance:</p>
                            <div className="bg-slate-800/60 p-4 rounded-lg border border-yellow-500/20">
                                <p className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
                                    1,000,000
                                </p>
                                <p className="text-xs text-slate-400 mt-1">Minimum Dogix Tokens</p>
                            </div>
                        </div>
                    </div>

                    <Button 
                        onClick={() => window.open('https://pancakeswap.finance/swap?outputCurrency=0x99d01f21FfD34916F21c7474F1B376168833a8F5', '_blank')}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 text-lg"
                    >
                        <ExternalLink size={20} />
                        Buy Dogix on PancakeSwap
                    </Button>

                    <Button 
                        variant="outline" 
                        onClick={() => {
                            fetchBalance()
                        }} 
                        className="w-full border-gold/20 text-slate-200 hover:bg-gold/10 py-6"
                        disabled={isLoadingBalance}
                    >
                        {isLoadingBalance ? "Checking Balance..." : "Refresh Balance"}
                    </Button>

                    <Button 
                        variant="outline" 
                        onClick={() => disconnect()} 
                        className="w-full border-gold/20 text-slate-200 hover:bg-gold/10 py-6"
                    >
                        Disconnect Wallet
                    </Button>
                </div>
            ) : (
                // Form Screen - User has enough balance
                <>
                    <div>
                        <CardTitle className="text-2xl font-bold text-white drop-shadow-lg mb-2" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
                            BSC Token Creator
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-base">
                            Enter your token details and deploy to BSC Chain instantly
                        </CardDescription>
                    </div>

                    {/* Balance Display */}
                    <div className="bg-gradient-to-br from-emerald-950/40 to-green-950/40 p-4 rounded-xl border border-emerald-500/30">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-300">Your Dogix Balance:</span>
                            <span className="text-xl font-bold text-emerald-400">{(userBalance || 0).toLocaleString()}</span>
                        </div>
                    </div>

                    <CardContent className='w-full p-0 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className="space-y-3">
                            <label className="font-semibold text-slate-200 block">
                                Token Name
                            </label>
                            <Input 
                                value={tokenName} 
                                onChange={(e) => setTokenName(e.target.value)} 
                                placeholder="e.g., AI Wizard" 
                                className="bg-slate-800/60 border-gold/20 text-slate-100 placeholder-slate-500 focus:border-gold/50 focus:ring-gold/20" 
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="font-semibold text-slate-200 block">
                                Token Symbol
                            </label>
                            <Input 
                                value={tokenSymbol} 
                                onChange={(e) => setTokenSymbol(e.target.value)} 
                                placeholder="e.g., AIWIZ" 
                                className="bg-slate-800/60 border-gold/20 text-slate-100 placeholder-slate-500 focus:border-gold/50 focus:ring-gold/20" 
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="font-semibold text-slate-200 block">
                                Decimals
                            </label>
                            <Input 
                                min={1} 
                                max={18} 
                                value={tokenDecimals} 
                                onChange={(e) => setTokenDecimals(Number(e.target.value))} 
                                type="number" 
                                placeholder="18" 
                                className="bg-slate-800/60 border-gold/20 text-slate-100 placeholder-slate-500 focus:border-gold/50 focus:ring-gold/20" 
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="font-semibold text-slate-200 block">
                                Total Supply
                            </label>
                            <Input 
                                min={1} 
                                value={tokenSupply} 
                                onChange={(e) => setTokenSupply(Number(e.target.value))} 
                                type="number" 
                                placeholder="1000000" 
                                className="bg-slate-800/60 border-gold/20 text-slate-100 placeholder-slate-500 focus:border-gold/50 focus:ring-gold/20" 
                            />
                        </div>
                    </CardContent>

                    <div className="space-y-3">
                        <Button 
                            disabled={isPending} 
                            onClick={() => handleDeploy()} 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <RocketIcon size={20} />
                            {isPending ? "Deploying..." : "Deploy Token"}
                        </Button>
                        <Button 
                            variant="outline" 
                            onClick={() => disconnect()} 
                            className="w-full border-gold/20 text-slate-200 hover:bg-gold/10 py-6"
                        >
                            Disconnect Wallet
                        </Button>
                    </div>
                </>
            )}

        </Card>
    );
}