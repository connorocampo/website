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
  margin: 100px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  line-height: 2;
  margin-bottom: 100px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Helmet>
        <title>About | Connor Ocampo's Website</title>
        <meta name="About Connor Ocampo's Website" content="About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
      </Helmet>
      <Header />
      <Heading>About Connor</Heading>
      <img src="https://placekitten.com/1000/400"
        style={{ marginBottom: "100px" }}
        alt="" />
      <Text>I believe that everyone has a unique lens of experiences, and furthermore, I believe there are people out there that could greatly benefit from those experiences being made visible. This goes double if the sharer is part of a historically depressed, minority class of people.</Text>
      <Footer />
    </Container>
  </ThemeProvider>
)
