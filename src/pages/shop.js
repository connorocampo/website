import React from "react";
import styled from 'styled-components';

import { ThemeProvider } from "styled-components";
import themeSettings from '../components/base/settings';

import "../assets/styles/header.css";

// Components

import Header from "../components/base/header";
import BookSection from "../components/BookSection";
import MysteryBook from "../components/MysteryBook";
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

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Header />
      <Heading>Shop</Heading>
      <BookSection />
      <MysteryBook />
      <Footer />
    </Container>
  </ThemeProvider>
)


