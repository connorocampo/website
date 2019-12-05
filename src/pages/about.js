import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

import VeganBeef from "../assets/images/VeganBeef.jpg"
import Painting from "../assets/images/Painting.jpg"

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
  margin: 0;
`

export const Hobbies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Image1 = styled.img`
  margin-top: 40px;
  max-width: 310px;
`

export const Image2 = styled.img`
  margin-top: 40px;
  max-width: 310px;
`

export const LastParagraph = styled.p`
  margin-bottom: 100px;
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
        I’m a native South Floridian who graduated college at UCF in 2016 with a
        Bachelor of Science Degree. Since then I’ve went on to gain employment
        in web technologies at a financial publishing company and then later at
        a web development agency. Professionally, I have a history of work in
        front-end development, search engine optimization (SEO), and a bit of
        web design.
      </p>
      <p>
        When I’m not working, I enjoy cooking (one pot/pan meals are the best!),
        painting, playing guitar and singing.
      </p>
      <Hobbies>
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
      </Hobbies>
      <br />
      <br />
      {/* <p>
        I also run a blog about my ongoing experience with <a href="https://www.quittingsocialmedia.com/" target="_blank" rel="noopener noreferrer">quitting social media for one year</a>. As a millennial who has been on social media for nearly half my life, I thought it'd be a good idea to quit social media for a while to see what life was like without it. So far, so good!
      </p> */}
      <h2>Note to Hiring Managers</h2>
      <CallToAction>
        Currently, I'm looking for job opportunities utilizing skills I already
        have and/or learning new things. If you think I'd be a good match to
        your company mission and culture,{" "}
        <a
          href="https://connorocampo.github.io/connorocampo/contact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          let's chat
        </a>
        !
      </CallToAction>
      <br />
      <h2>Tech I've Worked With</h2>
      <p>
        <b>
          <u>Front-end:</u>
        </b>{" "}
        Github, Atom, VS Code (my fav), GIT, Homebrew, CSS, SCSS, Bootstrap,
        Flexbox, Tailwind, React, styled-components, Gatsby, GraphQL, Netlify,
        Surge.sh. The design aspect is in my wheelhouse in terms of front-end
        development.
      </p>
      <p>
        <b>
          <u>Video/Design:</u>
        </b>{" "}
        Figma, Sketch, Abstract, Photoshop, good ol' sketch paper, DaVinci
        Resolve.
      </p>
      <LastParagraph>
        <b>
          <u>Marketing:</u>
        </b>{" "}
        Google Analytics, SEMrush, Hootsuite, Yoast, MailChimp, Buffer. Most of
        my marketing work consists of monitoring/reporting analytics,
        copywriting and optimizing articles, and organic social media marketing.
      </LastParagraph>
      <Footer />
    </Layout>
  </ThemeProvider>
)
