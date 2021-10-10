import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";

const ProjectModal = ({
  title,
  pic,
  desc,
}: {
  title: string;
  pic: any;
  desc: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <Col lg={6}>
      <a
        href="#"
        onClick={() => {
          setShow(true);
        }}
        className="project-item mx-auto"
      >
        <GatsbyImage image={getImage(pic)} alt={title} />
        <div className="project-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="project-item-caption-content text-center text-white">
            <FaPlus size={60} />
          </div>
        </div>
      </a>
      <Modal
        centered
        show={show}
        size="xl"
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton className="border-0" />
        <Modal.Body className="text-center pb-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <h2 className="project-modal-title text-secondary text-uppercase mb-3">
                  {title}
                </h2>

                <GatsbyImage
                  className="mb-5"
                  imgClassName="rounded"
                  image={getImage(pic.childImageSharp)}
                  alt={title}
                />
                <p className="mb-4">{desc}</p>
                <Button
                  onClick={() => {
                    setShow(false);
                  }}
                  className="text-white"
                >
                  <FaTimes className="me-1 mb-1" />
                  Close Window
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default ProjectModal;
