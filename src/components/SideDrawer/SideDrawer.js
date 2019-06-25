import React from 'react';
import { Link } from "gatsby";

import '../../assets/styles/SideDrawer.css';

const sideDrawer = props => (
  <nav className="side-drawer" >
    <Link to="/" className="nav-item mobile-nav-item">Home</Link>
    <Link to="/about/" className="nav-item mobile-nav-item">About</Link>
    <Link to="/blog/" className="nav-item mobile-nav-item">Blog</Link>
    <Link to="/shop/" className="nav-item mobile-nav-item">Shop</Link>
  </nav>
);

export default sideDrawer;