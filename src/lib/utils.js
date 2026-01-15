import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { createPublicClient, http } from 'viem'
import { bsc } from 'wagmi/chains'

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ERC20 ABI for balanceOf function
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
];

export async function fetchTokenBalance(userAddress, tokenAddress) {
  try {
    if (!userAddress || !tokenAddress) {
      console.log("Missing userAddress or tokenAddress");
      return 0;
    }

    // Create public client using viem
    const client = createPublicClient({
      chain: bsc,
      transport: http(),
    });
    
    console.log("Fetching balance for:", userAddress, "Token:", tokenAddress);
    
    const balanceData = await client.readContract({
      address: tokenAddress,
      abi: ERC20_ABI,
      functionName: 'balanceOf',
      args: [userAddress],
    });

    console.log("Raw balance:", balanceData.toString());

    let decimalsData = 18; // Default to 18 decimals
    try {
      decimalsData = await client.readContract({
        address: tokenAddress,
        abi: ERC20_ABI,
        functionName: 'decimals',
      });
      console.log("Token decimals:", decimalsData);
    } catch (error) {
      console.log("Could not fetch decimals, using default 18");
    }

    // Convert balance to human-readable format
    const divisor = Math.pow(10, Number(decimalsData));
    const balance = Number(balanceData) / divisor;
    
    console.log("Converted balance:", balance);
    return balance;
  } catch (error) {
    console.error('Error fetching token balance:', error);
    return 0;
  }
}
