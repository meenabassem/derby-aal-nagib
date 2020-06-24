import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "assets/img/logo-transparent.png";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt={""}
        />
      </Navbar.Brand>
      <Navbar.Brand href="#"> DERBY AAL NAGIB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="The Race" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Results" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Results</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ace Bird</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Grand Averages
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Club Competition
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Analysis Tool
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Picture</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Videos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Terms" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Terms & Conditions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Prize Money</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">....</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Agents</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Enquiries</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Fancier Login
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Agent Login</NavDropdown.Item>
          </NavDropdown>
          {/*<Nav.Link href="#features">Features</Nav.Link>*/}
          {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBar };
