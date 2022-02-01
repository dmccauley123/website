import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"


const TermsPage = () => (
  <Layout>
    <Seo title="Geks World NFT Terms and Conditions" />
    <Parallax pages={3}>
      <div>
        <Divider speed={1} offset={0} factor={1}>
          <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
          <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
          <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
          <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
          <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
          <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
          <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content speed={1} offset={.2} factor={.5}>
          <Inner>
            <h1>LEGAL</h1>
            <p>
            Geks World NFT is a collection of digital artworks running on the
            Ethereum network via non fungible tokens(NFTs). gekyume.io is only
            a visual interface to allow users to acquire the digital artworks.
            </p>
            <p>
            Users are responsible for the safety and management of their own
            Ethereum wallet and validating all transactions and contracts related
            and generated by gekyume.io before approval. Also be aware that, since
            our GeksWorld NFT smart contract runs on the Ethereum network, it
            is not possible to undo, reverse or restore any transactions.
            </p>
            <p>
            Gekyume.io and its connected services are provided “as is” and “as
            available” without warranty of any kind. By using gekyume.io you
            are accepting sole responsibility for any and all transactions
            involving Geks World NFT digital artworks.
            </p>
            <p>
            Although we truly believe in this project, this project should be considered
            strictly an NFT art project that could eventually provide utilities for its
            holders. However, we do not guarantee any profitability for the buyers
            and it is understood that this is not the goal or the reason of the project.
            This project should not be considered as an investment.
            </p>
            <p>
            As part of this project, we offer, in good faith, several giveaways.
            Depending on the popularity, scope and sales of the Geks World NFT NFT project,
            we reserve the right to reduce or cancel these giveaways. Also, it is
            understood that some giveaways will only be made if the collection sells out.
            </p>
            <p>
            For all our giveaways with a physical prize, we reserve the right to pay
            the equivalent of the prize in ETH instead of giving the physical prize. Giveaways
            will be in person in Tampa, FL with flight within US and one night accomodation provided.
            Minors will require a parent or guardian present to accept giveaway. The timestamp of the
            block when the last NFT is minted will determine the winner by randomly setting the initial
            sequence of tokens with two unique traits determining the winner.
            In the events that Jen, an employee or agent of the company or other related party is randomly
            selected for either giveaway, a random holder will be chosen via Chainlink
            Randon Number Generator.
            </p>
            </Inner>
          </Content>
          <Content speed={1} offset={1.5} factor={1}>
            <Inner>
            <h1>OWNERSHIP</h1>
            <ol type="a">
              <li>
                The user that is buying and minting our Geks World NFT artwork is
                the owner of the Non Fungible Token (NFT) crated by validating the
                transaction. Each Geks World NFT is an NFT on the Ethereum blockchain.
                When you purchase an NFT, you own all the rights to the underlying Geks
                World NFT. Ownership of the NFT is mediated entirely and only by the
                Smart Contract and the Ethereum Network which means that, at no point,
                may we seize, freeze, or otherwise modify the ownership of any Geks World NFT.
              </li>
              <li>
                Personal Use. Subject to your continued compliance with these Terms,
                gekyume.io grants you a worldwide, royalty-free license to use, copy,
                and display the purchased Geks World NFT(s), along with any extensions
                that you choose to create or use, solely for the following purposes:
                <ol type="i">
                  <li>
                    for your own personal, non-commercial use;
                  </li>
                  <li>
                    as part of a marketplace that permits the purchase and sale
                    of your Geks World NFT/NFT, provided that the marketplace cryptographically
                    verifies each Geks World NFT owner’s rights to display the Geks World NFT
                    and ensures that only the actual owner can display the Geks World NFT; or
                  </li>
                  <li>
                    as part of a third party website or application that permits the
                    inclusion, involvement, or participation of your Geks World NFT,
                    provided that the website/application cryptographically verifies each
                    Geks World NFT owner’s rights to display the Geks World NFT and ensures
                    that only the actual owner can display the Geks World NFT, and provided
                    that the Geks World NFT is no longer visible once the owner of the Geks
                    World NFT leaves the website/application.
                  </li>
                </ol>
              </li>
              <li>
                Commercial Use. Subject to your continued compliance with these Terms,
                gekyume.io grants you an unlimited, worldwide license to use, copy,
                and display the purchased Geks World NFT for the purpose of creating
                derivative works based upon the Geks World NFT (“Commercial Use”).
                Examples of such Commercial Use would be the use of the Geks World NFT
                to produce and sell merchandise products (T-Shirts etc.) displaying
                copies of the Geks World NFT. For the sake of clarity, nothing in
                this Section will be deemed to restrict you from
                <ol type="i">
                  <li>
                    owning or operating a marketplace that permits the use and sale
                    of Geks World NFT generally, provided that the marketplace cryptographically
                    verifies each Geks World NFT owner’s rights to display the Geks World NFT
                    and ensures that only the actual owner can display the Geks World NFT;
                  </li>
                  <li>
                  owning or operating a third party website or application that permits the inclusion,
                  involvement, or participation of Geks World NFT generally, provided that the
                  third party website or application cryptographically verifies each Geks World NFT
                  owner’s rights to display the Geks World NFT and ensures that only the actual
                  owner can display the Geks World NFT, and provided that the Geks World NFT is no
                  longer visible once the owner of the Purchased Geks World NFT leaves the
                  website/application; or
                  </li>
                  <li>
                    earning revenue from any of the foregoing.
                  </li>
                </ol>
              </li>
            </ol>
              </Inner>
            </Content>
            <Content speed={1} offset={2} factor={1}>
              <Inner>
            <h1>CLUB & CHARITY FUNDS</h1>
            <p>
              GeksWorld Funds will be managed by a new company formed in Florida
              after NFT sellout. Funds will be used to pay for promotion, venue, appearance fees,
              travel and expenses of artists and staff. Royalties will be allocated to the club management
              company to pay for operations and future events and developing future functionality.
            </p>
            <p>
              A to be announced charity will be created which will disperse funds
              related to the presale mint. Endowment funds may be invested in crypto,
              stablecoins, and any other legal investments and dispersed as needed
              to the charity for charity events and donations to other charities
              that cannot accept ethereum as donations. All proceeds will be used
              for charitable donations, while the new company will sponsor operational
              costs and expenses related to the charity.
            </p>
          </Inner>
          <Footer />
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default TermsPage
