import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

import DesignOne from "../assets/images/DesignOne.svg"
import DesignModernizingMedicine from "../assets/images/DesignModernizingMedicine.svg"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

const Heading = styled.h1`
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`

export const Image1 = styled.img`
  margin-top: 40px;
  max-width: 310px;
`

export const Image2 = styled.img`
  margin-top: 40px;
  max-width: 310px;
`

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>About | Connor Ocampo's Website</title>
        <meta
          name="About Connor Ocampo's Website"
          content="About Connor Ocampo's Website"
        />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">About</Heading>
      <p>
        I'm a self-taught Front End Developer who enjoys focusing on the design
        aspect of development. Professionally, I have a history of work in front
        end development, search engine optimization (SEO), and web design. When
        I’m not working, I enjoy cooking (one pot/pan meals are the best!),
        painting, playing guitar and singing.
      </p>
      <br />
      <br />
      <h2>
        <span role="img" aria-label="emoji">
          💻
        </span>{" "}
        Tech I've Worked With
      </h2>
      <br />
      <h3>Front End Development</h3>
      <p>
        <b>
          <u>I am proficient in</u>
        </b>{" "}
        GitHub, Atom, VS Code (my fav), HTML, CSS, SCSS, Font Awesome, Flexbox,
        CSS Grids, Bootstrap, media queries, custom CSS animations, custom SVG
        animations, styled-components.
      </p>
      <p>
        <b>
          <u>I am familiar with</u>
        </b>{" "}
        GIT, Node.js, NPM, WordPress/PHP, Homebrew, Tailwind, JavaScript,
        jQuery, React, react-router, Gatsby, GraphQL, Netlify, Heroku, Surge.sh.
      </p>
      <p>
        See my{" "}
        <a
          href="https://connorocampo.github.io/website/projects/"
          rel="noopener noreferrer"
        >
          Projects page
        </a>{" "}
        to view live code.
      </p>
      <p>
        Check out my{" "}
        <a
          href="https://codepen.io/connorocampo"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen profile
        </a>{" "}
        to see mini code projects.
      </p>
      <br />
      <h3>Video/Graphics</h3>
      <p>
        DaVinci Resolve, Figma, Sketch, Abstract, Photoshop, and good ol' sketch
        paper.
      </p>
      <p>
        <b>
          <u>Sample Designs</u>
        </b>
      </p>
      <p>
        Click any image to view their design on a larger scale (opens in a new
        tab).
      </p>
      <a
        href="https://connorocampo.github.io/website/static/DesignOne-3104bd0340aebe581a7401e7a45418db.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={DesignOne}
          alt="Design One"
          className="design design-one"
          style={{ marginRight: "50px" }}
        />
      </a>
      <a
        href="https://connorocampo.github.io/website/static/DesignModernizingMedicine-0529420cd91e73468b0d0600925981e4.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={DesignModernizingMedicine}
          alt="Design One"
          className="design"
        />
      </a>
      <p style={{ marginBottom: "100px" }}>
        <br />
        <h3>Marketing</h3>
        Google Analytics, SEMrush, Hootsuite, Yoast, MailChimp, Buffer. Most of
        my marketing work consists of copywriting and optimizing articles,
        reporting/improving analytics, and organic social media management.
      </p>
      <Footer />
    </Layout>
  </ThemeProvider>
)
