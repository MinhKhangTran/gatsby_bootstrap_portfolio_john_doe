import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar bg="light" id="mainNav" expand="lg">
      <Container>
        <Link className="navbar-brand text-primary" to="/">
          John Doe
        </Link>
        <Navbar.Toggle
          className="text-uppercase rounded d-flex align-items-center border border-primary d-block d-lg-none"
          aria-controls="basic-navbar-nav"
        >
          <span className="text-cyan-700">Menu</span>
          <FaBars className="text-cyan-700 ms-2" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experienes">Experiences</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
