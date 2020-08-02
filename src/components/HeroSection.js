import React, { useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./HeroSection.scss";

function HeroSection(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
            <Modal show={isOpen} onHide={hideModal} enforceFocus={false}>
              <Modal.Title className="text-center mt-4 mb-2">
                <span className="HeroSection__create-profile">
                  Create your profile
                </span>
              </Modal.Title>
              <Form>
                <Form.Row>
                  <Col xs={10} className="ml-4">
                    <Form.Group controlId="user_image">
                      <Form.Label>Image Upload</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Enter email"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={10} className="ml-4">
                    <Form.Group controlId="user_name">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Otis Ottille..."
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={10} className="ml-4">
                    <Form.Group controlId="user_school">
                      <Form.Label>School Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Otter Space University"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={10} className="ml-4">
                    <Form.Group controlId="user_website">
                      <Form.Label>https://otterspace.com</Form.Label>
                      <Form.Control
                        type="url"
                        placeholder="Otter Space University"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={10} className="ml-4">
                    <Form.Group controlId="user_website">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Type a password..."
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="text-center mt-2 mb-4">
                    <Button variant="purple" size="md" type="submit">
                      <span className="HeroSection__form-submit">
                        Get Started
                      </span>
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Modal>
            <Form>
              <Form.Row>
                <Col xs="auto">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email here"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="purple"
                    size="md px-5 ml-4"
                    onClick={showModal}
                  >
                    <span className="HeroSection__signup">Sign Up</span>
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
