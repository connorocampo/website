import React from "react";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

import "../assets/styles/header.css"

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
  margin: 100px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: ${props => props.theme.size.bodyMedium};
  line-height: 2;
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Header />
      <Heading>About Connor Ocampo</Heading>
      <img src="https://placekitten.com/1000/400"
        style={{ marginBottom: "100px" }}
        alt="" />
      <Text>I believe that everyone has a unique lens of experiences, and furthermore, I believe there are people out there that could greatly benefit from those experiences being made visible. This goes double if the sharer is part of a historically depressed, minority class of people.</Text>
      <Footer />
    </Container>
  </ThemeProvider>
)
