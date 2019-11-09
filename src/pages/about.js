import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';
import favicon from '../../static/favicon.ico';

import VeganBeef from "../assets/images/VeganBeef.jpg";


// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  line-height: 2;
  margin-bottom: 100px;
`;

const CallToAction = styled.p`
  font-family: 'Open Sans Heavy';
  margin: 0;
`;

export const Image = styled.img`
  margin-top: 30px;
  max-width: 310px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>About | Cat Ocampo's Website</title>
        <meta name="About Connor Ocampo's Website" content="About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">About Cat Ocampo</Heading>
      <Text>I’m a native South Floridian who graduated college at UCF in 2016 with a Bachelor of Science Degree. Since then I’ve went on to gain employment in web technologies at a financial publishing company and then later at a web development agency. Professionally, I have a history of work in front-end development, search engine optimization (SEO) and a bit of web design.
      <br />
        <br />
        When I’m not working, I enjoy cooking (one pot/pan meals are the best!), painting, playing guitar and singing.
        <Image src={VeganBeef} alt="Sweet and spicy ginger vegan beef" className="vegan-beef" />
        <br />
        <i>Sweet and spicy ginger vegan beef</i>
        <br />
        <br />
        I also run a blog about my ongoing experience with <a href="https://www.quittingsocialmedia.com/" target="_blank" rel="noopener noreferrer">quitting social media for one year</a>. As a millennial who has been on social media for nearly half my life, I thought it'd be a good idea to quit social media for a while to see what life is like. So far, so good!
        <br />
        <br />
        <CallToAction>
          Currently, I'm looking for job opportunities utilizing skills I already have and/or learning new things. If you think I'd be a good match to your company mission and culture, <a href="https://catherineocampo.github.io/catherineocampo/contact/" target="_blank" rel="noopener noreferrer">let's chat</a>!</CallToAction>
        <br />
        <h2>Tech I've Worked With</h2>
        <b><u>Front-end:</u></b> Github, Atom, VS Code (my fav), GIT, CSS, SCSS, Tailwind, React, styled-components, Gatsby, Netlify, Surge.sh. The design aspect is in my wheelhouse in terms of front-end development.
        <br />
        <br />
        <b><u>Design:</u></b> Sketch, Abstract, Photoshop, and good ol' sketch paper. As far as design goes, I've done a bit of work on wireframing personal and professional projects.
        <br />
        <br />
        <b><u>Marketing:</u></b> Google Analytics, SEMrush, Hootsuite, Yoast, MailChimp, Buffer. Most of my marketing work consists of monitoring/reporting analytics, copywriting headlines and optimizing articles, and organic social media marketing.
      </Text>
      <Footer />
    </Layout>
  </ThemeProvider>
)
