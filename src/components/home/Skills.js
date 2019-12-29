import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

// Images
import Design from "../../assets/images/icons/design.svg"
import Dev from "../../assets/images/icons/dev.svg"
import Marketing from "../../assets/images/icons/marketing.svg"

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Columns = styled.div`
  align-items: center;
  background: #ffffff;
  border: 1px solid #dae1e7;
  border-radius: 25px;
  display: flex;
  margin-top: -300px;
  margin-bottom: 300px;
  max-width: 1200px;
  padding: 75px 0 300px 0;
  text-align: center;
`

export const ColumnText = styled.p`
  max-width: 350px;
  padding: 0 25px;
`

export const List = styled.p`
  padding: 0 25px;

  max-width: 350px;
`

/*
 * Component
 */

class Skills extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Columns>
            <div className="column-1">
              <img src={Design} alt="" />
              <h3>Video/Design</h3>
              <ColumnText>
                I enjoy learning, designing, and experimenting with simple,
                modern, and intuitive design for desktop and mobile devices.
              </ColumnText>
              <ColumnText>
                I also enjoy learning more about video production software to
                create impactful films.
              </ColumnText>
              <h3>Video/Design Tools</h3>
              <ColumnText>
                DaVinci Resolve Figma Sketch Abstract Photoshop
              </ColumnText>
            </div>
            <div className="column-2">
              <img src={Dev} alt="" />
              <h3>Front-end Development</h3>
              <ColumnText>
                I am proficient in HTML, CSS, Flexbox, CSS Grids, media queries,
                custom CSS & SVG animations.
              </ColumnText>
              <ColumnText>
                I am familiar with WordPress, JavaScript, jQuery, React, Gatsby,
                and GraphQL.
              </ColumnText>
              <h3>Dev Tools</h3>
              <List>GIT GitHub VS Code Bootstrap CodePen Netlify Heroku</List>
            </div>
            <div className="column-3">
              <img src={Marketing} alt="" />
              <h3>Marketing/SEO</h3>
              <ColumnText>
                Most of my marketing/seo work consists of optimizing articles,
                and reporting/improving analytics.
              </ColumnText>
              <ColumnText>
                I also have experience launching and growing organic social
                media campaigns.
              </ColumnText>
              <h3>Marketing Tools</h3>
              <List>
                Google Analytics Search Console Yoast SEMrush Hootsuite Buffer
                MailChimp
              </List>
            </div>
          </Columns>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Skills
