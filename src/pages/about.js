import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

import DesignOne from "../assets/images/DesignOne.svg"
import DesignModernizingMedicine from "../assets/images/DesignModernizingMedicine.svg"
import DesignCharles from "../assets/images/DesignCharles.svg"

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
        Video and graphics software I've used include DaVinci Resolve, Figma,
        Sketch, Abstract, Illustrator, and Photoshop.
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
          className="design design-one"
          style={{ marginRight: "50px" }}
        />
      </a>
      <a
        href="https://connorocampo.github.io/website/static/DesignCharles-67dad2b0612f2fdb6564a8cf7a68a036.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={DesignCharles} alt="Design One" className="design" />
      </a>
      <p style={{ marginBottom: "100px" }}>
        <br />
        <h3>Marketing</h3>
        Tools that I've used for marketing and search engine optimization (SEO)
        include Google Analytics, SEMrush, Hootsuite, Yoast, MailChimp, and
        Buffer. Most of my marketing work consists of copywriting and optimizing
        articles, reporting/improving analytics, and organic social media
        management.
      </p>
      <h2>
        <span role="img" aria-label="emoji">
          🎓
        </span>{" "}
        Certifications
      </h2>
      <p>
        Below is a list of certifications I've successfully completed. You can
        click each one to view the certificate document.
      </p>
      <ul className="certificates">
        <li>
          <a
            href="https://www.semrush.com/academy/public/certificate/2665255/SEMrush-Academy-Certificate-2843ac32dff6e715b1e83ede0225663ca420d957e423a61000205ddaf83a4262.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEO Fundamentals Exam, SEMrush Academy
          </a>
          . May, 2019.
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/connorocampo/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Responsive Web Design, freeCodeCamp
          </a>
          . September, 2018.
        </li>
        <li>
          <a
            href="https://www.credential.net/160561af-e89a-478c-9454-048e159960e6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hootsuite Platform Certification, Hootsuite
          </a>
          . April, 2018.
        </li>
        <li>
          <a
            href="https://www.sololearn.com/Certificate/1024-5352360/pdf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Tutorial Course, SoloLearn
          </a>
          . January, 2018.
        </li>
        <li>
          <a
            href="https://www.sololearn.com/Certificate/1023-5352360/pdf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Fundamentals Course, SoloLearn
          </a>
          . July, 2017.
        </li>
        <li style={{ marginBottom: "90px" }}>
          <a
            href="https://www.sololearn.com/Certificate/1014-5352360/pdf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Fundamentals Course, SoloLearn
          </a>
          . August, 2017.
        </li>
      </ul>
      <br />
      <Footer />
    </Layout>
  </ThemeProvider>
)
