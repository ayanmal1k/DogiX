'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { bsc, bscTestnet } from 'wagmi/chains';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';

export const config = createConfig({
    chains: [bsc, bscTestnet],
    connectors: [
        injected(),
    ],
    transports: {
        [bsc.id]: http(),
        [bscTestnet.id]: http(),
    },
    ssr: true,
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
    },
});

// Network validation component
function NetworkValidator({ children }) {
    const { chain } = useAccount();

    useEffect(() => {
        if (chain && chain.id !== bsc.id && chain.id !== bscTestnet.id) {
            toast.error('❌ Unsupported Network', {
                description: 'This application only supports BNB Chain (BSC). Please switch to BNB Chain.',
                duration: 5000,
            });
        }
    }, [chain]);

    return children;
}

export function RainbowProvider({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <NetworkValidator>
                    {children}
                </NetworkValidator>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
