import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

/*
 * Styles
 */

export const MaxWidth = styled.div`
  background: #eeeeee;
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
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
`;

export const Subtitle = styled.span`
  font-size: ${props => props.theme.size.headerSmall};
  margin-left: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  color: ${props => props.theme.color.blackLight};
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
              <img src="https://image.flaticon.com/icons/svg/201/201557.svg" alt="" className="card-icon" />
              <CardTitle>Personal Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://image.flaticon.com/icons/svg/236/236840.svg" alt="" className="card-icon" />
              <CardTitle>Personal Finance</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://image.flaticon.com/icons/svg/204/204296.svg" alt="" className="card-icon" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://image.flaticon.com/icons/svg/387/387569.svg" alt="" className="card-icon" />
              <CardTitle>Health and Fitness</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://image.flaticon.com/icons/svg/1256/1256661.svg" alt="" className="card-icon" />
              <CardTitle>LGBT</CardTitle>
            </Link>
            <Link to="/" className="card">
              <img src="https://image.flaticon.com/icons/svg/1205/1205495.svg" alt="" className="card-icon" />
              <CardTitle>Notes</CardTitle>
            </Link>
          </Cards>
        </Container>
      </MaxWidth>
    );
  }
}

export default Writings;