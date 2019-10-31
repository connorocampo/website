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
import Book from "../components/home/Book";
// import Writings from "../components/home/Writings";
import Footer from "../components/base/Footer";

import favicon from '../../static/favicon.ico';

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="Cat Ocampo's Website" content="Cat Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <meta name="description" content="The home page for Cat Ocampo's website." />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Bio />
      <Book />
      {/* <Writings /> */}
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