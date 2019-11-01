import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';
import favicon from '../../static/favicon.ico';

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
        <title>About | Cat Ocampo's Website</title>
        <meta name="About Connor Ocampo's Website" content="About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">About Cat Ocampo</Heading>
      <Text>I’m a native South Floridian who graduated college at UCF in 2016 with a Bachelor of Science Degreee. Since then I’ve went on to gain employment in web technologies at a financial publishing company and then later at a web development agency. When I’m not working, I enjoy cooking, painting, playing guitar and singing.
        <br />
        <br />
        Currently, I'm looking for job opportunities utilizing skills I already have and/or learning new things.
        </Text>
      <Footer />
    </Layout>
  </ThemeProvider>
)
