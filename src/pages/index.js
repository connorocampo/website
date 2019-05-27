import React from "react";
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import themeSettings from '../components/base/settings';

// Components

import Header from "../components/base/header";
import Bio from "../components/home/Bio";
import Writings from "../components/home/Writings";
import Footer from "../components/base/footer";

// Stylesheets

import "../assets/styles/main.css";
import "../assets/styles/header.css";
import "../assets/styles/footer.css";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Helmet>
        <title>Connor Ocampo's Website</title>
        <meta name="Connor Ocampo's Website" content="Connor Ocampo's Website" />
        <meta name="theme-color" content="#345D7E" />
      </Helmet>
      <Header />
      <Bio />
      <Writings />
      <Footer />
    </Container>
  </ThemeProvider>
)
