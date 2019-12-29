import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
// import styled from "styled-components"

import themeSettings from "../components/base/settings"

// Stylesheets

import "../assets/styles/main.css"
import "../assets/styles/header.css"
import "../assets/styles/footer.css"

// Components

import favicon from "../../static/favicon.ico"
import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Bio from "../components/home/Bio"
import About from "../components/home/About"
import Skills from "../components/home/Skills"
import RecentWork from "../components/home/RecentWork"
// import Testimonials from "../components/home/Testimonials"
import Footer from "../components/base/Footer"

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="Connor Ocampo's | Front-end Developer"
          content="Connor Ocampo's | Front-end Developer"
        />
        <meta name="theme-color" content="#0090D9" />
        <meta
          name="description"
          content="The home page for Connor Ocampo's website."
        />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Bio />
      <About />
      <Skills />
      <RecentWork />
      {/* <Testimonials /> */}
      <Footer />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
