import React from "react"
import styled from "styled-components"

// import { Link } from "gatsby"

import "../../assets/styles/footer.css"

// import RainbowFlag from "../../assets/images/RainbowFlag.png"
import GatsbyIcon from "../../assets/images/GatsbyIcon.png"
import ReactImage from "../../assets/images/ReactImage.png"

/*
 * Styles
 */

export const MaxWidth = styled.div`
  background: #f5f7f8;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 100px 2rem 0rem 2rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SocialMediaHeader = styled.h2`
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
`

export const SocialMediaLinks = styled.span`
  font-family: "Roboto Mono", "Inter";
`

export const Image = styled.img`
  margin-top: 40px;
  height: 50px;
  width: 50px;
`

// export const Newsletter = styled.span`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const NewsletterHeader = styled.div`
//   font-size: ${props => props.theme.size.headerMedium};
//   margin-bottom: 50px;
//   text-align: right;
// `;

// export const NewsletterText = styled.div`
//   text-align: right;
//   line-height: 1.5;
//   margin-bottom: 25px;
//   margin-left: auto;
//   text-align: right;
//   width: 260px;
// `;

// export const Form = styled.form`
//   font-size: ${props => props.theme.size.bodySmall};
//   text-align: right;
// `;

export const Copyright = styled.p`
  font-family: "Open Sans";
  font-size: ${props => props.theme.size.bodySmall};
  margin-top: 100px;
  margin-bottom: 0;
  padding-bottom: 15px;
`

/*
 * Component
 */

class Footer extends React.Component {
  render() {
    return (
      <MaxWidth>
        <Container>
          <FooterContent>
            <div>
              <SocialMediaHeader>Other Platforms</SocialMediaHeader>
              <SocialMediaLinks className="social-media-links">
                <a
                  href="https://www.linkedin.com/in/connorocampo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/connorocampo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://codepen.io/connorocampo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodePen
                </a>
              </SocialMediaLinks>
            </div>
            <div class="icon-container">
              <div>
                <Image src={GatsbyIcon} alt="Pride Flag" />
                <Image src={ReactImage} alt="Pride Flag" />
              </div>

              {/* <Newsletter>
                <NewsletterHeader className="align-left newletter-header">My Newsletter</NewsletterHeader>
                <NewsletterText className="align-left">Get email updates straight to your inbox.</NewsletterText>
                <Form action="https://connorocampo.us20.list-manage.com/subscribe/post?u=3e14727ae8295d990a776994a&amp;id=ddd8552a5d" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate className="align-left">
                  <input type="submit" value="Subscribe!" name="subscribe" className="subscribe-link" />
                </Form>
              </Newsletter> */}
            </div>
          </FooterContent>
          <Copyright>
            © 2019 Connor Ocampo
            {/* <Link to="/privacy-policy" className="regular-link" >Privacy Policy</Link> */}
          </Copyright>
        </Container>
      </MaxWidth>
    )
  }
}

export default Footer
