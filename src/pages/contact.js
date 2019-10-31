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

import ByeCat from "../assets/images/ByeCat.gif";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  line-height: 2;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  margin-bottom: 100px;
  max-width: 700px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Contact | Cat Ocampo's Website</title>
        <meta name="About Connor Ocampo's Website" content="About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading>Contact Cat Ocampo</Heading>
      <Text>Oh, hey stranger. Looks like you want to get in touch with me about something. That's cool.
      <br />
        <br />
        You can send me an email directly at <a href="mailto:cmosofla@gmail.com" target="_blank" rel="noopener noreferrer">cmosofla@gmail.com</a>. I'll be sure to get back to you as soon as I can.
      <br />
        <br />
        ...Ok, bye now.
      </Text>
      <Image src={ByeCat} alt="Cat dissapearing in a box" className="bye-cat" />
      <Footer />
    </Layout>
  </ThemeProvider>
)
