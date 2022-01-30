import React from 'react'
import {Helmet} from "react-helmet"
import contractABI from "../abi/GeksWorldNFTMinter.json"
import BigNumber from 'bignumber.js'

export default function MintButton() {

    let web3;

    let contract;

    const isBrowser = typeof window !== "undefined"

    async function mintNFT() {

        if (typeof window.ethereum === 'undefined') {
            window.alert("Please install metamask")
            return
        }

        if (window.ethereum.networkVersion !== '4') {
            window.alert('Please switch to ethereum mainnet in metamask.')
            return
        }

        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts')
            web3 = new window.Web3(window.ethereum)
        } else {
            window.alert("Please make sure Metamask is installed and logged in.")
            return
        }

        console.log('connected address :' + web3.currentProvider.selectedAddress)

        contract = new web3.eth.Contract(contractABI, '0x47DAf308E06Eb94C7efA6FECD2889DddA6d2Bb5D');

        fetch('https://sipf8s5aae.execute-api.us-east-2.amazonaws.com/merkleProof/' + web3.currentProvider.selectedAddress)
            .then(merkleProof => {
                console.log(merkleProof)
                contract.methods.nftPrice().call({from: web3.currentProvider.selectedAddress}, function (error, nftPrice) {
                    contract.methods.whitelistMint(merkleProof).send({from: web3.currentProvider.selectedAddress, value: new BigNumber(nftPrice)}, function(error, result){
                        console.log("all done");
                    });
                })
            })
    }

    return (
        <div>
            <Helmet>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"/>
            </Helmet>
            {
                isBrowser &&
                    <div>
                        <button
                            style={{
                                'border': '2px solid white',
                                'border-radius': '8%',
                                'padding': '2px 10px',
                                'cursor': 'pointer',
                                'font-size': 'inherit',
                                'font-weight': 'bold'
                            }}
                            onClick={mintNFT} type="button" title="Mint GeksWorld NFT">Mint
                        </button>
                    </div>
            }
        </div>
    )
}