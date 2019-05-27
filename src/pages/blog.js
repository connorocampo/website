import React from "react";
import { Helmet } from 'react-helmet';
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

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  text-transform: uppercase;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryFilterText = styled.p`
  margin-right: 15px;
`;

const CategoryFilterDropdown = styled.select`
  width: 260px;
`;

const Subheader = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin: 100px 0 50px 0;
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Helmet>
        <title>Blog | Connor Ocampo's Website</title>
        <meta name="Blog | Connor Ocampo's Website" content="Blog | About Connor Ocampo's Website" />
        <meta name="theme-color" content="#345D7E" />
      </Helmet>
      <Header />
      <HeadingContainer>
        <Heading>Blog</Heading>
        <CategoryContainer>
          <CategoryFilterText>Read By Category</CategoryFilterText>
          <CategoryFilterDropdown>
            <option value="Personal Development">Personal Development</option>
            <option value="Personal Finance">Personal Finance</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="LGBT">LGBT</option>
            <option value="Notes">Notes</option>
          </CategoryFilterDropdown>
        </CategoryContainer>
      </HeadingContainer>
      <Subheader>Recent Posts</Subheader>
      <Footer />
    </Container>
  </ThemeProvider>
)
