import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

/*
 * Styles
 */

export const MaxWidth = styled.div`
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  width: 1200px;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
`;

export const Header = styled.div`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
`;

export const Subtitle = styled.span`
  font-family: ${props => props.theme.font.opensans};
  font-size: ${props => props.theme.size.headerSmall};
  margin-left: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.font.opensans};
  font-weight: ${props => props.theme.weight.heavy};
  margin-top: 20px;
`;

/*
 * Component
 */

class Writings extends React.Component {
  render() {
    return (
      <MaxWidth>
        <Container>
          <HeaderContainer>
            <Header>Writings</Header>
            <Subtitle>by category</Subtitle>
          </HeaderContainer>
          <Cards>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://placedog.net/125/125" alt="Front-End Development" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
          </Cards>
        </Container>
      </MaxWidth>
    );
  }
}

export default Writings;