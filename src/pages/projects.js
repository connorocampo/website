import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';
import favicon from '../../static/favicon.ico';

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

import ToDoList from "../assets/images/ToDoList.jpg";
import Dribbble from "../assets/images/Dribbble.jpg";
import Dribbble02 from "../assets/images/Dribbble02.jpg";
import DroneWorld from "../assets/images/DroneWorld.png";


const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 25px 0;
  text-transform: uppercase;
`;

const Disclaimer = styled.p`
  color: #808080;
  font-size: 14px;
  margin-bottom: 100px;
`;

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: 10px 10px 20px #e0e0e0;
  max-width: 500px;
`;

export const ProjectTitle = styled.h2`
  font-family: 'Open Sans Heavy';
  margin-top: 30px;
`;

export const ProjectDescription = styled.p`
  line-height: 2;
  max-width: 500px;
`;

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Projects | Cat Ocampo's Website</title>
        <meta name="Projects from Connor Ocampo's Website" content="Projects from Cat Ocampo" />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">Projects</Heading>
      <Disclaimer className="projects-disclaimer">Due to signing an NDA with previous employers, I am legally obligated to refrain from disclosing any previous works with them.</Disclaimer>
      <div className="projects">
        <div className="project">
          <a href="https://catherineocampo.github.io/react-app/" target="blank" rel="noopener noreferrer"><Image src={ToDoList} alt="To Do List React App" className="project-item" /></a>
          <div>
            <ProjectTitle>To Do List React App</ProjectTitle>
            <ProjectDescription>After following along with <a href="https://www.youtube.com/watch?v=A71aqufiNtQ&t=" target="blank" rel="noopener noreferrer">Brad Traversy's React JS Crash Course</a> I made a little React app and published it on GitHub Pages. The technology used was Git, GitHub, Atom.io, CSS, React. View the source code in Github <a href="https://github.com/catherineocampo/react-app" target="blank" rel="noopener noreferrer">here</a>.</ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a href="https://catherineocampo.github.io/vans/" target="blank" rel="noopener noreferrer"><Image src={Dribbble} alt="Handcoding a Dribbble Design" className="project-item" /></a>
          <div>
            <ProjectTitle>Handcoding a Dribbble Design</ProjectTitle>
            <ProjectDescription>This is a Van's landing page design found on Dribbble. The technology used was HTML5, SASS and JavaScript. You can see the Dribbble Design<a href="https://dribbble.com/shots/2200416-Vans-Redesign-Concept/attachments/407258" target="blank" rel="noopener noreferrer"> here</a>. View the source code in Github <a href="https://github.com/catherineocampo/vans" target="blank" rel="noopener noreferrer">here</a>.</ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a href="https://catherineocampo.github.io/sibling/" target="blank" rel="noopener noreferrer"><Image src={Dribbble02} alt="Handcoding a Dribbble Design" className="project-item" /></a>
          <div>
            <ProjectTitle>Handcoding a Dribbble Design</ProjectTitle>
            <ProjectDescription>This project was inspired by the wonderful folks over at <a href="https://shoptalkshow.com/" target="blank" rel="noopener noreferrer">Shop Talk Show</a>. Thanks Dave, Chris and all guest speakers for everything that you've given to the community. View the source code in Github <a href="https://github.com/catherineocampo/sibling" target="blank" rel="noopener noreferrer">here</a>.</ProjectDescription>
          </div>
        </div>
        <div className="project">
          <a href="https://catherineocampo.github.io/drone-world-product-page/" target="blank" rel="noopener noreferrer"><Image src={DroneWorld} alt="Handcoding a Dribbble Design" className="project-item" /></a>
          <div>
            <ProjectTitle>Drone World Reviews Landing Page</ProjectTitle>
            <ProjectDescription>This was a creative personal project with an objective to create a product landing page for a hypothetical drone review company using only HTML, CSS and Bootstrap 4. View the source code in Github <a href="https://github.com/catherineocampo/drone-world-product-page" target="blank" rel="noopener noreferrer">here</a>.</ProjectDescription>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  </ThemeProvider>
)
