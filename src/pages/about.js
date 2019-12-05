import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

// import VeganBeef from "../assets/images/VeganBeef.jpg"
// import Painting from "../assets/images/Painting.jpg"
import DesignOne from "../assets/images/DesignOne.svg"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

const Heading = styled.h1`
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`

const CallToAction = styled.p`
  font-family: "Open Sans Heavy";
  margin-top: 0;
  margin-bottom: 100px;
`

// export const Hobbies = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `

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
        I'm a self-taught front-end/UI nerd who loves learning and staying
        up-to-date with modern tech that helps companies work smarter.
        Professionally, I have a history of work in front-end development,
        search engine optimization (SEO), and web design. When I’m not working,
        I enjoy cooking (one pot/pan meals are the best!), painting, playing
        guitar and singing.
      </p>
      <br />
      {/* <Hobbies>
        <div>
          <Image1 src={VeganBeef} alt="Sweet and spicy ginger seitan" />
          <br />
          <i>Sweet and spicy ginger seitan</i>
        </div>
        <div>
          <Image2 src={Painting} alt="An abstract painting" />
          <br />
          <i>An abstract painting</i>
        </div>
      </Hobbies> */}

      <br />
      <h2>
        <span role="img" aria-label="emoji">
          💻
        </span>{" "}
        Tech I've Worked With
      </h2>
      <br />
      <h3>Front-end</h3>
      <p>
        GitHub, Atom, VS Code (my fav), GIT, Homebrew, CSS, SCSS, Bootstrap,
        Flexbox, Tailwind, React, styled-components, Gatsby, GraphQL, Netlify,
        Surge.sh. The design aspect is in my wheelhouse in terms of front-end
        development.
      </p>
      <p>
        See my{" "}
        <a
          href="https://connorocampo.github.io/website/projects/"
          rel="noopener nofererrer"
        >
          Projects page
        </a>{" "}
        to view live code.
      </p>
      <h3>Video/Graphics</h3>
      <p>
        DaVinci Resolve, Figma, Sketch, Abstract, Photoshop, and good ol' sketch
        paper.
      </p>
      <p>
        <b>
          <u>Sample Design</u>
        </b>
      </p>
      <p>
        Click to image to view the design on a larger scale (opens in a new
        tab).
      </p>
      {/* <a
        href="https://raw.githubusercontent.com/connorocampo/website/master/src/assets/images/DesignOne.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        Design One - Super Awesome
      </a> */}
      <a
        href="https://connorocampo.github.io/website/static/DesignOne-6389a0434024f4f32f91068355d54700.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={DesignOne} alt="Design One" className="design-one" />
      </a>
      <p>
        <h3>Marketing</h3>
        Google Analytics, SEMrush, Hootsuite, Yoast, MailChimp, Buffer. Most of
        my marketing work consists of copywriting and optimizing articles,
        reporting/improving analytics, and organic social media management.
      </p>
      <br />
      <h2>
        <span role="img" aria-label="emoji">
          🗒️
        </span>{" "}
        Note to Hiring Managers
      </h2>
      <br />
      <CallToAction>
        Currently, I'm looking for job opportunities utilizing skills I already
        have and/or learning new things. If you think I'd be a good match to
        your company mission and culture,{" "}
        <a
          href="https://connorocampo.github.io/website/contact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          let's chat
        </a>
        !
        <br />
      </CallToAction>
      <Footer />
    </Layout>
  </ThemeProvider>
)
