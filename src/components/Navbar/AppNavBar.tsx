import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from "assets/img/logo-transparent.png";

const AppNavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      style={{ boxShadow: "0 0px 5px #888888" }}
    >
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt={""}
        />
      </Navbar.Brand>
      <Navbar.Brand href="/"> DERBY AAL NAGIB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Results" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Events/all">All Events</NavDropdown.Item>
            {/*<NavDropdown.Item href="/results/all">All Events</NavDropdown.Item>*/}
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
            <NavDropdown.Item href="/gallery/pictures">
              Picture
            </NavDropdown.Item>
            <NavDropdown.Item href="/gallery/videos">Videos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Terms" id="basic-nav-dropdown">
            <NavDropdown.Item href="/terms/terms-and-conditions">
              Terms & Conditions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Prize Money</NavDropdown.Item>
            <NavDropdown.Item href="_">....</NavDropdown.Item>
            <NavDropdown.Item href="/terms/forms">Forms</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="/contact/agents">Agents</NavDropdown.Item>
            <NavDropdown.Item href="/contact/enquiries">
              Enquiries
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login/agent">Agent Login</NavDropdown.Item>
            <NavDropdown.Item href="/login/fancier">
              Fancier Login
            </NavDropdown.Item>
          </NavDropdown>
          {/*<Nav.Link href="/live" style={{ backgroundColor: "red" }}>*/}
          {/*  Live*/}
          {/*</Nav.Link>*/}
          <Navbar.Brand
            href="/live"
            style={{ backgroundColor: "red", padding: "5px 20px" }}
          >
            Live
          </Navbar.Brand>

          {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { AppNavBar };
