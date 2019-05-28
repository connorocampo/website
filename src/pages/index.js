import React from "react";
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby";

import themeSettings from '../components/base/settings';

// Stylesheets

import "../assets/styles/main.css";
import "../assets/styles/header.css";
import "../assets/styles/footer.css";

// Components

import Header from "../components/base/Header";
import Bio from "../components/home/Bio";
import Writings from "../components/home/Writings";
import Footer from "../components/base/Footer";


// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   margin-top: 40px;
// `;

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="Connor Ocampo's Website" content="Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Bio />
      <Writings />
      <Footer />
    </div>
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