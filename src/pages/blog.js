import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroBlog from "../components/sections/HeroBlog"

function Blog() {
  return (
    <Layout>
      <SEO title="Blog Page" />
      <HeroBlog />
    </Layout>
  )
}

export default Blog
