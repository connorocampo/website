import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

import '../SideDrawer/DrawerToggleButton';
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import SideDrawer from "../../components/SideDrawer/SideDrawer";


// Styles

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Brand = styled.span`
  font-size: ${props => props.theme.size.headerMedium};
  letter-spacing: 5px;
  line-height: 1;
  text-transform: uppercase;
`;

export const NavItems = styled.span`
  font-size: ${props => props.theme.size.bodySmall};
`;

// Component

class Header extends React.Component {
  render() {
    return (
      <Container className="header-container">
        <Brand className="brand-container">
          <Link to="/" className="brand"><span className="cat">Cat</span> Ocampo</Link>
        </Brand>
        <NavItems className="nav-items navbar-nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about/" className="nav-item">About</Link>
          {/* <Link to="/blog/" className="nav-item">Blog</Link> */}
          <Link to="/contact/" className="nav-item">Contact</Link>
          {/* <Link to="/shop/" className="nav-item">Shop</Link> */}
          {/* <Link to="/hire-me/" className=" nav-item">Hire Me</Link> */}
        </NavItems>
      </Container>
    );
  }
}

export default Header;