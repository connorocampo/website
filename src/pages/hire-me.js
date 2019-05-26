import React from "react";
import styled from 'styled-components';

import { ThemeProvider } from "styled-components";
import themeSettings from '../components/base/settings';

import "../assets/styles/header.css"

// Components

import Header from "../components/base/header";
import Footer from "../components/base/footer";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Heading = styled.div`
  font-size: ${props => props.theme.size.headerBig};
  font-weight: ${props => props.theme.weight.heavy};
  margin-bottom: 100px;
  text-transform: uppercase;
`;

const Subheading = styled.div`
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
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
      <Header />
      <Heading>Hire Me</Heading>
      <Subheading>Speaking</Subheading>
      <Text>Expenses (airfare and hotel) are extra. If we mutually agree that this is a good fit, you’ll receive a firm quotation on the fee and the expenses. I’ll make my own travel arrangements. The fee and expenses will be due (to be received) two weeks before the actual date.</Text>
      <Footer />
    </Container>
  </ThemeProvider>
)
