import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components

import Header from "../components/base/header";
import Footer from "../components/base/footer";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin-bottom: 100px;
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
    <Container>
      <Helmet>
        <title>Hire Me | Connor Ocampo's Website</title>
        <meta name="Hire Me | Connor Ocampo's Website" content="Hire Me | Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Heading>Hire Me</Heading>
      <Subheading>Speaking</Subheading>
      <Text>Expenses (airfare and hotel) are extra. If we mutually agree that this is a good fit, you’ll receive a firm quotation on the fee and the expenses. I’ll make my own travel arrangements. The fee and expenses will be due (to be received) two weeks before the actual date.</Text>
      <Footer />
    </Container>
  </ThemeProvider>
)
