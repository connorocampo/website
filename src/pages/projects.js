import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

import ProjectMiddle from "../assets/images/ProjectMiddle.png"
import ProjectMailchimp from "../assets/images/ProjectMailchimp.png"
import Portfolio from "../assets/images/Portfolio.png"
import ToDoList from "../assets/images/ToDoList.png"
import Dribbble from "../assets/images/Dribbble.jpg"
import Dribbble02 from "../assets/images/Dribbble02.jpg"
import DroneWorld from "../assets/images/DroneWorld.png"

const Heading = styled.h1`
  font-family: "Inter Black", "Open Sans Heavy";
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 25px 0;
  text-transform: uppercase;
`

const Disclaimer = styled.p`
  color: #808080;
  font-size: 14px;
  margin-bottom: 100px;
`

export const Image = styled.img`
  box-shadow: 10px 10px 20px #e0e0e0;
  max-width: 500px;
`

export const ProjectTitle = styled.h2`
  font-family: "Inter Black", "Open Sans Heavy";
  margin-top: 30px;
`

export const ProjectDescription = styled.p`
  line-height: 2;
  max-width: 500px;
`

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Projects | Connor Ocampo's Website</title>
        <meta
          name="Projects from Connor Ocampo's Website"
          content="Projects from Connor Ocampo"
        />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">Projects</Heading>
      <Disclaimer className="projects-disclaimer">
        Due to signing an NDA with previous employers, I am legally obligated to
        refrain from disclosing any previous works with them.
      </Disclaimer>
      <div className="projects">
        <div className="project">
          <a
            href="https://sign-in-app.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ProjectMiddle}
              alt="Sign in/sign up App"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>Sign in/sign up App</ProjectTitle>
            <ProjectDescription>
              A Medium.com themed sign in/sign up app. The goal of this project
              was to create a Medium.com sign in/sign up modal look-alike but
              using react-router. Click the image to see it live or view the
              source code in Github{" "}
              <a
                href="https://github.com/connorocampo/sign-in-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connors-mailchimp-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ProjectMailchimp}
              alt="Newsletter Signup - Mailchimp API"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>Newsletter Signup - Mailchimp API</ProjectTitle>
            <ProjectDescription>
              This app was built on Heroku and uses the Mailchimp API. The goal
              of this project was to learn how to implement the Mailchimp API
              into personal and professional projects.
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connorocampo.github.io/website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Portfolio}
              alt="My portfolio"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>This Website!</ProjectTitle>
            <ProjectDescription>
              This site was built on Gatsby and React and was published on
              GitHub Pages. Other technology used was Git, VS Code, CSS, and
              styled-components. View the source code in Github{" "}
              <a
                href="https://github.com/connorocampo/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connorocampo.github.io/react-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ToDoList}
              alt="To Do List React App"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>To Do List React App</ProjectTitle>
            <ProjectDescription>
              After following along with{" "}
              <a
                href="https://www.youtube.com/watch?v=A71aqufiNtQ&t="
                target="_blank"
                rel="noopener noreferrer"
              >
                Brad Traversy's React JS Crash Course
              </a>{" "}
              I made a little React app and published it on GitHub Pages. The
              technology used was Git, GitHub, Atom.io, CSS, React. View the
              source code in Github{" "}
              <a
                href="https://github.com./connorocampo/react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connorocampo.github.io/vans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Dribbble}
              alt="Handcoding a Dribbble Design"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>Handcoding a Dribbble Design</ProjectTitle>
            <ProjectDescription>
              This is a handcoded Van's landing page design found on Dribbble.
              The technology used was HTML5, SASS and JavaScript. You can see
              the Dribbble Design
              <a
                href="https://dribbble.com/shots/2200416-Vans-Redesign-Concept/attachments/407258"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                here
              </a>
              . View the source code in Github{" "}
              <a
                href="https://github.com/connorocampo/vans"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connorocampo.github.io/sibling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Dribbble02}
              alt="Handcoding a Dribbble Design"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>Handcoding a Dribbble Design</ProjectTitle>
            <ProjectDescription>
              This project was inspired by the wonderful folks over at{" "}
              <a
                href="https://shoptalkshow.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Talk Show
              </a>
              . Thanks Dave, Chris, and all guest speakers for everything you've
              given to the community. View the source code in Github{" "}
              <a
                href="https://github.com/connorocampo/sibling"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a
            href="https://connorocampo.github.io/drone-world-product-page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={DroneWorld}
              alt="Handcoding a Dribbble Design"
              className="project-item"
            />
          </a>
          <div>
            <ProjectTitle>Drone World Reviews Landing Page</ProjectTitle>
            <ProjectDescription>
              This was a creative personal project with an objective to create a
              product landing page for a hypothetical drone review company using
              only HTML, CSS and Bootstrap 4. View the source code in Github{" "}
              <a
                href="https://github.com/connorocampo/drone-world-product-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </ProjectDescription>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  </ThemeProvider>
)
