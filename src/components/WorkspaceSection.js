import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import WorkspaceNav from "./WorkspaceNav";
import KanbanSelector from "./KanbanSelector";
import MoodboardSelector from "./MoodboardSelector";
import ResourcesSelector from "./ResourcesSelector";
import SidebarSection from "./SidebarSection";
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
            <SidebarSection></SidebarSection>
          </Col>
          <Col xs={7} md={8}>
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
                    name: "Create a Moodboard",
                    label: "To-do",
                    body: "Create a moodboard for our project - images, screenshots, etc. - note"
                  },
                  {
                    image: "https://i.ibb.co/GxGSnnx/Ellipse-207.png",
                    id: "progress",
                    name: "Create a Moodboard",
                    label: "In Progress",
                    body: "Create a moodboard for our project - images, screenshots, etc. - note"
                  },
                  {
                    image: "https://i.ibb.co/kX0Nwwf/Ellipse-209.png",
                    id: "complete",
                    name: "Create a Moodboard",
                    label: "Complete",
                    body: "Create a moodboard for our project - images, screenshots, etc. - note"
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
                    image: "https://i.ibb.co/mTVkRp5/Rectangle-361-1.png",
                    title: "How to improve your visual design skills",
                    description: "Description of the resource",
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
