import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar className={{backgroundColor: 'green'}} collapseOnSelect expand="lg" bg="success" variant="dark">
       <div style={{marginLeft:'10px'}}> <Navbar.Brand>My Favorite Books</Navbar.Brand> </div>
        <div style={{marginRight:'12px'}}><NavItem><Link to="/" className="nav-link" >Home</Link></NavItem></div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
