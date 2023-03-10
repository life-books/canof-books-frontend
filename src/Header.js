import React from 'react';
import { Container, Navbar, NavItem } from 'react-bootstrap';
import Login from './Login';
import Logout from './Logout';
import { Link } from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react'

class Header extends React.Component {
  render() {
    return (
      <Navbar className={{backgroundColor: 'green'}} collapseOnSelect expand="lg" bg="success" variant="dark">
       <div style={{marginLeft:'10px'}}> <Navbar.Brand>My Favorite Books</Navbar.Brand> </div>
       
       <Container>
        <div style={{marginRight:'12px'}}><NavItem><Link id='link'to="/" className="nav-link" >Home</Link></NavItem></div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Link id='link2' to="/about" className="nav-link">About</Link></NavItem>

        <NavItem><Link id='link3' to="/profile" className="nav-link">Profile</Link></NavItem>
        {this.props.auth0.isAuthenticated ?<Logout/> : <Login/>}

        </Container>

      </Navbar>
    )
  }
}

export default withAuth0(Header);
