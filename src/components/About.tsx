import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import avatarSm from "../images/hero/Avatar_sm.svg";

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="image_wrapper d-flex justify-content-center">
          <img className="d-lg-none my-3" src={avatarSm} alt="avatar" />
        </div>
        <h1 className="about_heading">
          John <span className="text-cyan-400">Doe</span>
        </h1>
        <p className="muted about_info">
          Musterstraße 1 - Musterstaat - <br className="d-lg-none" />
          010-1234-5678 -{" "}
          <a href="mailto:johndoe@example.com" className="text-cyan-400">
            johndoe@example.com
          </a>
        </p>
        <p className="lead mt-4">
          I'm baby copper mug you probably haven't heard of them pok pok kitsch
          tofu. Blog authentic man bun semiotics, paleo YOLO biodiesel pok pok
          pug fam church-key kale chips cloud bread sriracha cronut.
        </p>
        <div className="d-flex about_socials">
          <a href="https://www.instagram.com/">
            <FaInstagram size="2em" />
          </a>
          <a href="https://de-de.facebook.com/">
            <FaFacebook size="2em" />
          </a>
          <a href="https://github.com/">
            <FaGithub size="2em" />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter size="2em" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
