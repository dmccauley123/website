import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import Gallery from "../components/gallery"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={6.8}>
      <Hero offset={0} factor={1} />
      <Gallery offset={1} factor={2} />
      <About offset={3} factor={2} />
      <Projects offset={4.3} factor={2} />
      <Contact offset={5.8} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
