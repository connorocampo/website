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
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.headerBig};
  font-weight: ${props => props.theme.weight.heavy};
  margin: 100px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.bodyMedium};
  line-height: 2;
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Container>
      <Header />
      <Heading>About Connor Ocampo</Heading>
      <img src="https://placekitten.com/1200/500"
        style={{ marginBottom: "100px" }}
        alt="" />
      <Text>I believe that everyone has a unique lens of experiences, and furthermore, I believe there are people out there that could greatly benefit from those experiences being made visible. This goes double if the sharer is part of a historically depressed, minority class of people.

Through the web, our voices can be shared and reached globally. Imagine how many lives one could positively impact. Through the web, our voices can be shared and reached globally. Imagine how many lives one could positively impact.

Because of this realization, I’m choosing to be visible about whomy life. Because of this realization, I’m choosing to be visible about who I am, my opinions, and how I am living my life. With hopes to inspire, energize and maybe even entertain,.

Hopes to inspire, energize and maybe even entertain. Because of this realization, I’m choosing to be visible about who I am, my opinions, and how I am living my life.  Hopes to inspire, energize and maybe even entertain. Because of this realization, I’m choosing to be visible about who I am, my opinions, and how I am living my life.  r and pleasure to have yo r and pleasure to have yo.

I’m choosing to be visible about who I am, my opinions, and how I am living my life. With hopes to inspire, energize and maybe even entertain,. ’m chooso I am, my opinions, and how I am living my life. With hopes to inspire, energize and maybe even entertain,.
With hopes to inspire, energize and maybe even entertain, it is my absolute honor and pleasure to have your attention. With hopes to inspire, energizend maybe even entertain, it is my absolute honor and pleasure to have your attention.</Text>
      <Footer />
    </Container>
  </ThemeProvider>
)
