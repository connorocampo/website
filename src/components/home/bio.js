import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

import { Link } from "gatsby"

import Avatar from "../../assets/images/ConnorProfile.png"

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
`

export const Image = styled.img`
  border-radius: 50%;
  height: 135px;
  margin-right: 50px;
  margin-left: 2px;
  width: 135px;
`

export const Tagline = styled.div`
  font-size: 60px;
  font-family: "Inter Black";
  margin-top: -10px;
  margin-bottom: 50px;
  margin-left: -2px;
  // max-width: 720px;
  max-width: 810px;
`

// export const SubTitle = styled.div`
//   font-size: ${props => props.theme.size.bodyMedium};
//   line-height: 1.5;
//   margin-bottom: 30px;
//   max-width: 620px;
// `

export const TechCredit = styled.div`
  font-size: ${props => props.theme.size.bodySmall};
  line-height: 1.5;
  margin-bottom: 30px;
  max-width: 620px;
`

/*
 * Component
 */

class Bio extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container className="bio-content">
          <Image src={Avatar} alt="Connor Ocampo" className="bio-thumbnail" />
          <div>
            <Tagline className="tagline">
              Front End Developer based in Boca Raton, Florida, USA
            </Tagline>
            {/* <SubTitle className="subtitle">
              Also, hobby painter and vegan chef{" "}
              <span role="img" aria-label="emoji">
                🤘🏼
              </span>
            </SubTitle> */}
            <Link to="/about" className="bio-button">
              Learn More →
            </Link>
            <TechCredit className="tech-credit">
              *This website was built using{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>{" "}
              and{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              <span role="img" aria-label="emoji">
                ⚡
              </span>
            </TechCredit>
          </div>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Bio
