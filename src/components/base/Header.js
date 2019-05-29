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
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const NavItems = styled.span`
  font-size: ${props => props.theme.size.bodySmall};
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
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about/" className="nav-item">About</Link>
          <Link to="/blog/" className="nav-item">Blog</Link>
          <Link to="/shop/" className="nav-item">Shop</Link>
          <Link to="/hire-me/" className=" nav-item">Hire Me</Link>
        </NavItems>
      </Container>
    );
  }
}

export default Header;