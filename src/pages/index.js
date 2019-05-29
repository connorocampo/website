import React from "react";
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby";

import themeSettings from '../components/base/settings';

// Stylesheets

import "../assets/styles/main.css";
import "../assets/styles/header.css";
import "../assets/styles/footer.css";

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Bio from "../components/home/Bio";
import Writings from "../components/home/Writings";
import Footer from "../components/base/Footer";

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="Connor Ocampo's Website" content="Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <meta name="description" description="Connor Ocampo's Website." />
      </Helmet>
      <Header />
      <Bio />
      <Writings />
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