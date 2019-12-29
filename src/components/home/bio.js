import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

// Images
import Avatar from "../../assets/images/ConnorProfile.png"

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 100px);
  padding: 0 1em;
`

export const Image = styled.img`
  border-radius: 50%;
  height: 200px;
  margin-bottom: 30px;
  width: 200px;
`

export const Tagline = styled.h1`
  font-size: 64px;
  font-family: "Rubik Bold";
  margin-bottom: 20px;
`

export const Blurb = styled.p`
  font-size: 36px;
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

/*
 * Component
 */

class Bio extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Image src={Avatar} alt="Connor Ocampo" className="bio-thumbnail" />
          <Tagline class="is-black">Front-end Developer</Tagline>
          <Blurb>
            I <span className="is-animated-gradient">design</span>,{" "}
            <span className="is-animated-gradient">code</span>, and{" "}
            <span className="is-animated-gradient">optimize</span> modern
            websites.
          </Blurb>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Bio
