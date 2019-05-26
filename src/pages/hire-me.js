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

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Header />
      <Footer />
    </Container>
  </ThemeProvider>
)
