import React, {useEffect, useState} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from "assets/img/logo-transparent-black-text.png";

import moment from "moment";
import {Capacitor} from "@capacitor/core";

const AppNavBar = () => {
  const [currentTime, setCurrentTime] = useState<string>();
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss A"));
    }, 1000);
  }, []);
  const colorVariant = Capacitor.isNative ? "dark" : "light";
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={colorVariant}
      variant={colorVariant}
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
          <Nav.Link href="/">Home</Nav.Link>
          {/*
          <NavDropdown title="Home" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
          <NavDropdown.Item href="/about">About</NavDropdown.Item>
          </NavDropdown>
          */}
          <NavDropdown title="Results" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Events/all">All Events</NavDropdown.Item>
            {/*<NavDropdown.Item href="/results/all">All Events</NavDropdown.Item>*/}
          </NavDropdown>
          <NavDropdown title="Gallery" id="basic-nav-dropdown">
            <NavDropdown.Item href="/gallery/pictures">
              Picture
            </NavDropdown.Item>
            <NavDropdown.Item href="/gallery/videos">Videos</NavDropdown.Item>
          </NavDropdown>

          {!Capacitor.isNative ? (
            <NavDropdown title="Terms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/terms/terms-and-conditions">
                Terms & Conditions
              </NavDropdown.Item>
              <NavDropdown.Item href="/terms/prize ">
                Prize Money
              </NavDropdown.Item>

              <NavDropdown.Item href="/terms/forms">Forms</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <></>
          )}

          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="/contact/agents">Agents</NavDropdown.Item>

            {!Capacitor.isNative ? (
              <NavDropdown.Item href="/contact/enquiries">
                Enquiries
              </NavDropdown.Item>
            ) : (
              <></>
            )}
          </NavDropdown>
          {!Capacitor.isNative ? (
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login/agent">
                Agent Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/login/fancier">
                Fancier Login
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <></>
          )}
          {/*<Nav.Link href="/live" style={{ backgroundColor: "red" }}>*/}
          {/*  Live*/}
          {/*</Nav.Link>*/}

          {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
        <Nav.Item style={{}} className={"nav-link"}>
          {currentTime}
        </Nav.Item>
        <Navbar.Brand
          href="/live"
          style={{ padding: "5px 20px", background: "red", color: "white" }}
        >
          Live
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { AppNavBar };
