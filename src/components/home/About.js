import React from "react"
import styled from "styled-components"

/*
 * Styles
 */

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 300px;
`

export const AboutText = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  line-height: 1.5;
  max-width: 1000px;
  text-align: center;
`

/*
 * Component
 */

class About extends React.Component {
  render() {
    return (
      <Section className="is-black-bg" style={{ marginBottom: "100px" }}>
        <h2
          className="is-white is-big-fs"
          style={{ paddingTop: "100px", paddingBottom: "50px" }}
        >
          A Little About Me
        </h2>
        <AboutText className="is-white">
          I'm a self-taught Front-end Developer who enjoys focusing on the
          design aspect of development. Professionally, I have a history of work
          in front-end development, search engine optimization (SEO), and web
          design.
        </AboutText>
      </Section>
    )
  }
}

export default About
