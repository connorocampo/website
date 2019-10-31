import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import themeSettings from '../../components/base/settings';

import { Link } from 'gatsby';

import Avatar from '../../assets/images/Avatar.jpg';

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 156px;
  margin-right: 50px;
`;

export const Tagline = styled.div`
  font-size: ${props => props.theme.size.headerBig};
  font-family: 'Open Sans Heavy';
  margin-top: 0;
  margin-bottom: 15px;
  max-width: 720px;
`;

export const SubTitle = styled.div`
  font-size: ${props => props.theme.size.bodyMedium};
  line-height: 1.5;
  margin-bottom: 30px;
  max-width: 620px;
`;

/*
 * Component
 */

class Bio extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container className="bio-content">
          <Image src={Avatar} alt="Cat Ocampo" className="bio-thumbnail" />
          <div>
            <Tagline className="tagline">
              Front-end Developer based in South Florida, USA
            </Tagline>
            <SubTitle className="subtitle">This website was built on Gatsby</SubTitle>
            <Link
              to="/about"
              className="bio-button">Learn More
            </Link>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Bio;