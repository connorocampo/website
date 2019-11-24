import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

/*
 * Styles
 */

export const MaxWidth = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23eaeef2' fill-opacity='0.67' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  padding: 0 2rem;
  width: 1100px;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
`;

export const Header = styled.h1`
  font-size: ${props => props.theme.size.headerMedium};
`;

export const Subtitle = styled.span`
  font-size: ${props => props.theme.size.headerSmall};
  margin-left: 10px;
`;

export const Cards = styled.div`
  display: flex;
  font-weight: bold;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  font-family: 'Inter Black', 'Open Sans';
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
            <Link to="/category/personal-development" className="card">
              <img src="https://image.flaticon.com/icons/svg/201/201557.svg" alt="" className="card-icon" />
              <CardTitle>Personal Development</CardTitle>
            </Link>
            <Link to="/category/personal-finance" className="card">
              <img src="https://image.flaticon.com/icons/svg/236/236840.svg" alt="" className="card-icon" />
              <CardTitle>Personal Finance</CardTitle>
            </Link>
            <Link to="/category/front-end-development" className="card">
              <img src="https://image.flaticon.com/icons/svg/204/204296.svg" alt="" className="card-icon" />
              <CardTitle>Front-End Development</CardTitle>
            </Link>
            <Link to="/category/health-and-fitness" className="card">
              <img src="https://image.flaticon.com/icons/svg/387/387569.svg" alt="" className="card-icon" />
              <CardTitle>Health and Fitness</CardTitle>
            </Link>
            <Link to="/category/lgbt" className="card">
              <img src="https://image.flaticon.com/icons/svg/1256/1256661.svg" alt="" className="card-icon" />
              <CardTitle>LGBT</CardTitle>
            </Link>
            <Link to="/category/notes" className="card">
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
