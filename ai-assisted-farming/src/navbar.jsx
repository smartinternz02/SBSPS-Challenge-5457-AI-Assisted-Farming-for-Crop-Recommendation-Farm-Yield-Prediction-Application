import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbar_custom extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/" className="navbar-brand">
              AI-Assisted Farming
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/crop_recommendation" className="nav-link">
                  Crop - recommendation
                </Link>
                <Link to="/status" className="nav-link">
                  Server Status
                </Link>
                {/* <Nav.Link href="/crop_recommendation">Pricing</Nav.Link> */}
              </Nav>
              <Nav>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navbar_custom;
