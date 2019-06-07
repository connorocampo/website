import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import BookSection from "../components/shop/BookSection";
import MysteryBook from "../components/shop/MysteryBook";
import RecommendedProducts from "../components/shop/RecommendedProducts";
import Footer from "../components/base/Footer";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Shop | Connor Ocampo's Website</title>
        <meta name="Shop | Connor Ocampo's Website" content="Shop | Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <meta name="description" content="The shop page for Connor Ocampo's website." />
      </Helmet>
      <Header />
      <Heading>Shop</Heading>
      <BookSection />
      <MysteryBook />
      <RecommendedProducts />
      <Footer />
    </Layout>
  </ThemeProvider>
)


