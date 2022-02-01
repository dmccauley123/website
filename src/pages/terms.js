import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Legal from "../@lekoarts/gatsby-theme-cara/components/legal"

const Terms = () => (
  <Layout>
    <Parallax pages={3.5}>
      <Legal offset={1} factor={0} />

    </Parallax>
  </Layout>
)

export default Terms
