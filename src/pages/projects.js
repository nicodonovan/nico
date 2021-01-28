import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroProjects from "../components/sections/HeroProjects"

function Projects() {
  return (
    <Layout>
      <SEO title="Projects Page" />
      <HeroProjects />
    </Layout>
  )
}

export default Projects
