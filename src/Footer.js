import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className='text' collapseOnSelect expand="lg" bg="dark" variant="dark">
       <div style={{marginLeft:'auto', marginRight:'auto'}}> <Navbar.Brand >Code Fellows</Navbar.Brand> </div>
      </Navbar>
    )
  }
}

export default Footer;
