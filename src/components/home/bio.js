import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

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
  font-weight: ${props => props.theme.weight.heavy};
  margin-top: 0;
  margin-bottom: 15px;
  max-width: 950px;
`;

export const SubTitle = styled.div`
  font-size: ${props => props.theme.size.headerSmall};
  margin-bottom: 30px;
  max-width: 950px;
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
            A simple guy doing his best to make his way in the world.
          </Tagline>
          <SubTitle>Front-end developer, author, LGBT advocate, health/fitness practitioner, and personal finance buff.</SubTitle>
          <Link
            to="/about"
            style={{
              alignItems: "center",
              background: "#345D7E",
              borderRadius: "5px",
              color: "#333",
              color: "#fff",
              display: "flex",
              fontFamily: "Open Sans",
              justifyContent: "center",
              height: "60px",
              marginBottom: "100px",
              textDecoration: "none",
              width: "150px"
            }}>Learn More</Link>
        </div>
      </Container>
    );
  }
}

export default Bio;