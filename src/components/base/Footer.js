import React from 'react';
import styled from 'styled-components';

import "../../assets/styles/footer.css";

/*
 * Styles
 */

export const Container = styled.div`
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaHeader = styled.div`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
  margin-bottom: 50px;
`;

export const SocialMediaLinks = styled.span`
  font-family: ${props => props.theme.font.spacemono};  
`;

export const Newsletter = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsletterHeader = styled.div`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
  margin-bottom: 50px;
  text-align: right;
`;

export const NewsletterText = styled.div`
  font-family: ${props => props.theme.font.opensans};
  text-align: right;
  line-height: 1.5;
  margin-bottom: 25px;
  margin-left: auto;
  text-align: right;  
  width: 260px;
`;

export const Form = styled.form`
  font-size: ${props => props.theme.size.bodySmall};
  text-align: right;
`;

export const EmailLabel = styled.form`
  margin-bottom: 5px;
  text-align: left;
`;

export const EmailInput = styled.input`
  font-size: ${props => props.theme.size.bodySmall};
  height: 30px;
  width: 400px;
`;

export const Submit = styled.input`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.bodySmall};
  height: 40px;
  width: 100px;
`;

export const Copyright = styled.p`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.bodySmall};
  margin-top: 100px;
  margin-bottom: 10px;
`;

/*
 * Component
 */

class Footer extends React.Component {
  render() {
    return (
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
              <Form>
                <label>
                  <EmailLabel>Email</EmailLabel>
                  <EmailInput type="text" name="name" />
                </label>
                <Submit type="submit" value="Sign Up" />
              </Form>
            </Newsletter>
          </div>
        </FooterContent>
        <Copyright>© 2019 Connor Ocampo | Privacy Policy</Copyright>
      </Container>
    );
  }
}

export default Footer;