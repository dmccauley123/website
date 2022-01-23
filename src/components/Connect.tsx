import React from 'react'
import Web3Modal from "web3modal";
import { providers } from "ethers";

interface Web3Context {
    chainId: number
    address: string
}

export default function Connect() {
    const [web3Context, setWeb3Context] = React.useState<Web3Context | undefined>();

    let providerOptions = {};

    const web3Modal = new Web3Modal({
        network: "mainnet",
        providerOptions
    });

    const connectWeb3 = async () => {
        web3Modal.clearCachedProvider()
        const web3 = await web3Modal.connect();    
        const provider = new providers.Web3Provider(web3);

        const network = await provider.getNetwork();
        const address = await provider.getSigner().getAddress();

        setWeb3Context({
            chainId: network.chainId,
            address
        })
    }

    const disconnect = async () => {
        web3Modal.clearCachedProvider()
        setWeb3Context(undefined)
    }

    return (
        <div>
            {!web3Context && <button onClick={connectWeb3}>Connect</button>}
            {web3Context && <button onClick={disconnect}>Logout</button>}
            {web3Context && 
                <div>
                    <p>Network ID: {web3Context.chainId}</p>
                    <p>Address: {web3Context.address}</p>
                </div>
            }
        </div>
    )
}