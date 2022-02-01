import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Legal from "../@lekoarts/gatsby-theme-cara/components/legal"
import Ownership from "../@lekoarts/gatsby-theme-cara/components/ownership"
import Club from "../@lekoarts/gatsby-theme-cara/components/club"

const Terms = () => (
  <Layout>
    <Parallax pages={3.5}>
      <Legal offset={0} factor={1} />
      <Ownership offset={1} factor={2} />
      <Club offset={2.5} factor={1} />
    </Parallax>
  </Layout>
)

export default Terms
