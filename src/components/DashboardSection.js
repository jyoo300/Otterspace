import React, { useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar2 from "./Avatar2";
import { Link, useRouter } from "./../util/router.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import SectionHeader2 from "./SectionHeader2";
import HomeSelector from "./HomeSelector";
import ListGroup from "react-bootstrap/ListGroup";
import { useAuth } from "./../util/auth.js";
import "./DashboardSection.scss";

function DashboardSection(props) {
  const auth = useAuth();
  const router = useRouter();

  const [isHidden, cardIsHidden] = React.useState(false);

  const showCard = () => {
    cardIsHidden(false);
  };

  const hideCard = () => {
    cardIsHidden(true);
  };

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid={true} sticky="top">
        <Row>
          <Col xs={3} md={2} className="d-none d-sm-block">
            <Container fluid={true}>
              <Row>
                <Col xs={12} className="text-center">
                  <Avatar2
                    src="https://i.ibb.co/sJVQKZD/Ellipse-32.png"
                    size="56px"
                  ></Avatar2>
                </Col>
                <Col xs={12} className="text-center mt-1">
                  <span className="DashboardSection__profile-name" href="/">
                    Natalie Raymond
                  </span>
                </Col>
                <Col xs={12} className="text-center">
                  <Link
                    className="DashboardSection__profile-link"
                    to="/settings/general"
                  >
                    Edit Profile
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="DashboardSection__sidebar-link"
                    to="/dashboard"
                  >
                    Home
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <div className="DashboardSection__border"></div>
                </Col>
                <Col xs={12} className="mt-3">
                  <span className="DashboardSection__workspace-title" href="/">
                    WorkSpaces
                  </span>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="DashboardSection__project-link"
                    to="/kanban/moodboard"
                  >
                    Design Project 1
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="DashboardSection__project-link"
                    to="/kanban/moodboard"
                  >
                    Design Project 2
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={7} md={8}>
            <Card className="w-100 bg-purple mb-3" hidden={isHidden}>
              <Card.Body className="text-center">
                <Card.Title>
                  <h4 className="DashboardSection__create-workspace-title">
                    Work with other students on projects
                  </h4>
                </Card.Title>
                <Card.Text>
                  <p className="DashboardSection__create-workspace-text">
                    Find projects to work on with other students - filtered by
                    industry and interests
                  </p>
                </Card.Text>
                <Button variant="light" size="md" className="px-4">
                  <span className="DashboardSection__done-button">Next</span>
                </Button>
                <Col xs={12} className="mt-2">
                  <LinkContainer to="#">
                    <Card.Link onClick={hideCard}>
                      <span className="DashboardSection__skip-for-now">
                        Skip for now
                      </span>
                    </Card.Link>
                  </LinkContainer>
                </Col>
              </Card.Body>
            </Card>
            <SectionHeader2
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
              className="text-left"
            ></SectionHeader2>
            <HomeSelector
              items={[
                {
                  image: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
                  name: "Abby Song",
                  university: "University of Southern California",
                  class: "2022",
                  filter: "Web Dev",
                  title:
                    "Looking for someone to redesign our websites together",
                  text:
                    "Hey guys! I've been revamping my new website, and I would love to finish by the end of the summer! Open to critiques as well.",
                },
                {
                  image: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
                  name: "Abby Song",
                  university: "University of Southern California",
                  class: "2022",
                  filter: "Web Dev",
                  title:
                    "Looking for someone to redesign our websites together",
                  text:
                    "Hey guys! I've been revamping my new website, and I would love to finish by the end of the summer! Open to critiques as well.",
                },
              ]}
            ></HomeSelector>
            <div
              className="mt-5 mx-auto text-center"
              style={{
                maxWidth: "460px",
              }}
            >
              <small>Some helpful debug info 🐛</small>
              <ListGroup className="mt-2">
                <ListGroup.Item>
                  Logged in as <strong>{auth.user.email}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/settings/general">Account settings</Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col className="d-none d-sm-block"></Col>
        </Row>
      </Container>
    </Section>
  );
}

export default DashboardSection;
