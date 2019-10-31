import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  line-height: 2;
  margin-bottom: 100px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Contact | Cat Ocampo's Website</title>
        <meta name="About Connor Ocampo's Website" content="About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Heading>Contact Cat Ocampo</Heading>
      <Text>Email me directly at <a href="mailto:cmosofla@gmail.com" target="_blank" rel="noopener noreferrer">cmosofla@gmail.com</a>.</Text>
      <Footer />
    </Layout>
  </ThemeProvider>
)
