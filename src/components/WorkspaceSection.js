import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar2 from "./Avatar2";
import { Link } from "./../util/router.js";
import SectionHeader from "./SectionHeader";
import WorkspaceNav from "./WorkspaceNav";
import KanbanSelector from "./KanbanSelector";
import MoodboardSelector from "./MoodboardSelector";
import ResourcesSelector from "./ResourcesSelector";
import "./WorkspaceSection.scss";

function WorkspaceSection(props) {
  const validSections = {
    kanban: true,
    moodboard: true,
    resources: true,
  };

  const section = validSections[props.section] ? props.section : "kanban";
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid={true}>
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
                  <span className="WorkspaceSection__profile-name" href="/">
                    Natalie Raymond
                  </span>
                </Col>
                <Col xs={12} className="text-center">
                  <Link
                    className="WorkspaceSection__profile-link"
                    to="/settings/general"
                  >
                    Edit Profile
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="WorkspaceSection__sidebar-link"
                    to="/dashboard"
                  >
                    Home
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <div className="WorkspaceSection__border"></div>
                </Col>
                <Col xs={12} className="mt-3">
                  <span className="WorkspaceSection__workspace-title" href="/">
                    WorkSpaces
                  </span>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="WorkspaceSection__project-link"
                    to="/kanban/moodboard"
                  >
                    Design Project 1
                  </Link>
                </Col>
                <Col xs={12} className="mt-3">
                  <Link
                    className="WorkspaceSection__project-link"
                    to="/kanban/moodboard"
                  >
                    Design Project 2
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={9} md={10}>
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={2}
              spaced={true}
              className="text-left"
            ></SectionHeader>
            <WorkspaceNav
              activeKey={section}
              className="justify-content-center"
            ></WorkspaceNav>

            {section === "kanban" && (
              <KanbanSelector
                items={[
                  {
                    image: "https://i.ibb.co/ZfHX3d5/Ellipse-204.png",
                    id: "todo",
                    name: "untitled",
                    label: "To-do",
                    perks: ["Kanban", "Media", "Moodboard", "Progress Tracker"],
                  },
                  {
                    image: "https://i.ibb.co/GxGSnnx/Ellipse-207.png",
                    id: "progress",
                    name: "untitled",
                    label: "In Progress",
                    perks: ["Kanban", "Calendar", "Media", "Links/Resources"],
                  },
                  {
                    image: "https://i.ibb.co/kX0Nwwf/Ellipse-209.png",
                    id: "complete",
                    name: "untitled",
                    label: "Complete",
                    perks: [
                      "Kanban",
                      "Links/Resources",
                      "Media",
                      "Progress Tracker",
                    ],
                  },
                ]}
              ></KanbanSelector>
            )}

            {section === "moodboard" && (
              <MoodboardSelector
                items={[
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                ]}
              ></MoodboardSelector>
            )}

            {section === "resources" && (
              <ResourcesSelector
                items={[
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                  {
                    image: "https://i.ibb.co/G2tGRYQ/Rectangle-359.png",
                  },
                ]}
              ></ResourcesSelector>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default WorkspaceSection;
