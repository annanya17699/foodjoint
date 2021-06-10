import React from 'react'
import {Navbar , Nav , Image} from 'react-bootstrap'
import logo from './logo.jpg'

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home" className='mx-5'>
      <Image src={logo} style={{height: 80 , marginLeft: 20}}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto my-5 mx-5 text-light">
      <Nav.Link style={{marginLeft:30}} href="#home">Home</Nav.Link>
      <Nav.Link style={{marginLeft:30}} href="#menu">Menu</Nav.Link>
      <Nav.Link style={{marginLeft:30}} href="#about">About</Nav.Link>
      <Nav.Link style={{marginLeft:30}} href="#reviews">Reviews</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header
