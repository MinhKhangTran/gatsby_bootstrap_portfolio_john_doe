import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import avatar from "../images/hero/Avatar.svg";

const Navigation = () => {
  return (
    <Navbar bg="primary" id="mainNav" expand="lg">
      <Container className="">
        <Link className="navbar-brand" to="/">
          <span className="d-lg-none fw-bold">John Doe</span>
          <img className="d-none d-lg-flex mb-5" src={avatar} alt="avatar" />
        </Link>
        <Navbar.Toggle
          className="text-uppercase rounded d-flex align-items-center border border-primary d-block d-lg-none"
          aria-controls="basic-navbar-nav"
        >
          <span className="text-cyan-900">Menu</span>
          <FaBars className="text-cyan-900 ms-2" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
