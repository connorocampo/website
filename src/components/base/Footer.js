import React from "react"
import styled from "styled-components"

import "../../assets/styles/footer.css"

// Images
import email from "../../assets/images/icons/email.svg"

/*
 * Styles
 */

export const Container = styled.div`
  background: #f7f8fa;
`

export const CTA = styled.div`
  align-items: center;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 60px 0;
`

export const Copyright = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  margin: 0 auto;
  max-width: 1200px;
`

/*
 * Component
 */

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <CTA className="is-black-bg is-white cta-container">
          <p className="is-medium-header footer-padding-left">Contact Connor</p>
          <p
            className="is-body-text"
            style={{ textAlign: "center", width: "282px" }}
          >
            Contact via carrier pigeon is preferred, though emails will suffice.
          </p>
          <span className="footer-padding-right">
            <div class="border-gradient-outline ">
              <a
                href="mailto:connorocampo@gmail.com"
                className="is-body-text  footer-email-btn"
                class="border-gradient-fill email-link"
              >
                <img
                  src={email}
                  alt="email icon"
                  style={{ marginRight: "10px", marginBottom: "-2px" }}
                />
                Send an email
              </a>
            </div>
          </span>
        </CTA>
        <Copyright>
          <p>Made with {"<3"} by me.</p>
          <p>© 2019.</p>
        </Copyright>
      </Container>
    )
  }
}

export default Footer
