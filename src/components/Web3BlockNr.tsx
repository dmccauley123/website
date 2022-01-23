import React from 'react'
import { Helmet } from "react-helmet"

export default function Web3() {
    const [blockNr, setBlockNr] = React.useState()
    const isBrowser = typeof window !== "undefined"

    async function getBlockNumber() {
        console.log('Init web3')
        const web3 = new window.Web3('https://cloudflare-eth.com')
        const currentBlockNumber = await web3.eth.getBlockNumber()
        setBlockNr(currentBlockNumber)        
    }

    return (
        <div>
            {/* Can use either react-helmet or include the script from gatsby-browser */}
            <Helmet>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" />
            </Helmet>
            {isBrowser && 
                <div>
                    <p>Running in browser..</p>
                    <button onClick={getBlockNumber}>Get Block #</button>
                </div>
            }
            
            {blockNr && <span>{blockNr}</span>}
        </div>
    )
}