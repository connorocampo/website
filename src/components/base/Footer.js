import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

import "../../assets/styles/footer.css";

/*
 * Styles
 */

export const MaxWidth = styled.div`
  background: #F5F7F8;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const Container = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1000px; 
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaHeader = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
`;

export const SocialMediaLinks = styled.span`
`;

export const Newsletter = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsletterHeader = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin-bottom: 50px;
  text-align: right;
`;

export const NewsletterText = styled.div`
  text-align: right;
  line-height: 1.5;
  margin-bottom: 25px;
  margin-left: auto;
  text-align: right;  
  width: 260px;
`;

// export const Form = styled.form`
//   font-size: ${props => props.theme.size.bodySmall};
//   text-align: right;
// `;

export const Copyright = styled.p`
  font-size: ${props => props.theme.size.bodySmall};
  margin-top: 100px;
  margin-bottom: 0;
  padding-bottom: 10px;
`;

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
              <SocialMediaHeader>Lets Connect</SocialMediaHeader>
              <SocialMediaLinks className="social-media-links">
                <a href="https://www.instagram.com/connor_ocampo/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.youtube.com/channel/UCzgDTD9EKa3BhWRkdoOYEdg?view_as=subscriber" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://www.linkedin.com/in/connorocampo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/connorocampo" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/connorocampo" target="_blank" rel="noopener noreferrer">Twitter</a>
              </SocialMediaLinks>
            </div>
            <div>
              <Newsletter>
                <NewsletterHeader>Stay Updated</NewsletterHeader>
                <NewsletterText>Get the latest articles delivered directly to your inbox</NewsletterText>
                {/* <Form action="https://connorocampo.us20.list-manage.com/subscribe/post?u=3e14727ae8295d990a776994a&amp;id=ddd8552a5d" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                  <input type="submit" value="Subscribe!" name="subscribe" className="subscribe-link" />
                </Form> */}
              </Newsletter>
            </div>
          </FooterContent>
          <Copyright>© 2019 Connor Ocampo | <Link to="/privacy-policy" className="regular-link" >Privacy Policy</Link></Copyright>
        </Container>
      </MaxWidth>
    );
  }
}

export default Footer;