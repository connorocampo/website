import React from "react";
import styled from 'styled-components';

import { ThemeProvider } from "styled-components";
import themeSettings from '../components/base/settings';

import "../assets/styles/header.css";

// Components

import Header from "../components/base/header";
import BookSection from "../components/shop/BookSection";
import MysteryBook from "../components/shop/MysteryBook";
import RecommendedProducts from "../components/shop/RecommendedProducts";
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

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Header />
      <Heading>Shop</Heading>
      <BookSection />
      <MysteryBook />
      <RecommendedProducts />
      <Footer />
    </Container>
  </ThemeProvider>
)


