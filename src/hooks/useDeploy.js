import { erc20Abi, erc20ByteCode } from '@/lib/erc20';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'
import { encodeAbiParameters, parseAbiParameters } from 'viem';

export default function useDeploy() {
    const { address } = useAccount()
    const { sendTransactionAsync } = useSendTransaction()
    const [hash, setHash] = useState(null)
    const [deployedAddress, setDeployedAddress] = useState(null)
    const { isLoading: isConfirming, isSuccess, data: receipt } = useWaitForTransactionReceipt({
        hash,
    })

    const deploy = async (name, symbol, supply, decimals) => {
        if (!address) {
            toast.error('Wallet not connected');
            throw new Error('Wallet not connected');
        }

        try {
            // Find constructor in ABI
            const constructorAbi = erc20Abi.find(item => item.type === 'constructor');
            
            if (!constructorAbi) {
                throw new Error('Constructor not found in ABI');
            }

            // Encode constructor arguments
            const encodedArgs = encodeAbiParameters(
                parseAbiParameters('string name, string symbol, uint256 initialSupply, uint8 decimals_'),
                [name, symbol, BigInt(supply), decimals]
            )

            // Combine bytecode with encoded constructor arguments
            const deploymentData = erc20ByteCode + encodedArgs.slice(2)

            // Send deployment transaction
            const txHash = await sendTransactionAsync({
                to: null, // null 'to' address means contract deployment
                data: deploymentData,
                account: address,
            });

            setHash(txHash);
            return txHash;
        } catch (err) {
            console.error('Deploy error:', err);
            toast.error(err.message || 'Deployment failed');
            throw err;
        }
    }

    useEffect(() => {
        if (hash && !isConfirming && !isSuccess) {
            toast.dismiss();
            toast.loading("Deploying...", {
                description: "Confirm Transaction in your wallet"
            });
        }
        if (isConfirming) {
            toast.dismiss();
            toast.loading("Confirming...", {
                description: "Waiting for confirmation"
            });
        }
        if (isSuccess && receipt) {
            toast.dismiss();
            toast.success("Token Created Successfully");
            // Get the deployed contract address from receipt
            if (receipt.contractAddress) {
                setDeployedAddress(receipt.contractAddress);
            }
        }
    }, [hash, isConfirming, isSuccess, receipt])

    return { deploy, isPending: hash && !isSuccess, deployedAddress, transactionHash: hash };
}