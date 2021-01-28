import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroAbout from "../components/sections/HeroAbout"

function About() {
  return (
    <Layout>
      <SEO title="About Page" />
      <HeroAbout />
    </Layout>
  )
}

export default About
