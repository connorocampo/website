import React from 'react';
import styled from 'styled-components';

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
      <Container>
        <Image src={Avatar} />
        <div>
          <Tagline>
            A simple guy doing his best to make his way in the world
          </Tagline>
          <SubTitle>Front-end developer, author, LGBT advocate, health/fitness practitioner, and personal finance buff</SubTitle>
          <Link
            to="/about"
            className="bio-button">Learn More</Link>
        </div>
      </Container>
    );
  }
}

export default Bio;