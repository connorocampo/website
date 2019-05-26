import React from 'react';
import styled from 'styled-components';

import { Link } from "gatsby";

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Brand = styled.span`
  font-size: ${props => props.theme.size.headerMedium};
  font-family: ${props => props.theme.font.opensans};
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const NavItems = styled.span`
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.size.p};
  font-family: ${props => props.theme.font.spacemono};
`;

/*
 * Component
 */

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Brand>
          <Link to="/" className="brand">Connor Ocampo</Link>
        </Brand>
        <NavItems className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/shop/">Shop</Link>
          <Link to="/hire-me/">Hire Me</Link>
        </NavItems>
      </Container>
    );
  }
}

export default Header;