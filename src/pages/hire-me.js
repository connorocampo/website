import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import ContactForm from '../components/hire-me/ContactForm';
import Footer from "../components/base/Footer";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const Subheading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
`;

export const Text = styled.div`
  line-height: 2;
  margin: 50px 0 100px 0; 
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Hire Me | Connor Ocampo's Website</title>
        <meta name="Hire Me | Connor Ocampo's Website" content="Hire Me | Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Heading>Hire Connor Ocampo</Heading>
      <Subheading>Speaking</Subheading>
      <Text>Expenses (airfare and hotel) are extra. If we mutually agree that this is a good fit, you’ll receive a firm quotation on the fee and the expenses. I’ll make my own travel arrangements. The fee and expenses will be due (to be received) two weeks before the actual date.</Text>
      <ContactForm />
      <Footer />
    </Layout>
  </ThemeProvider>
)
