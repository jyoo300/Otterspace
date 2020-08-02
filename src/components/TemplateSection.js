import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TemplateSelector2 from "./TemplateSelector2";

function TemplateSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <TemplateSelector2
          buttonText="Choose"
          items={[
            {
              id: "starter",
              name: "Beginner",
              perks: ["Kanban", "Media", "Moodboard", "Progress Tracker"],
              description:
                "Professional portfolio examples, progress trackers, inspiration boards",
            },
            {
              id: "pro",
              name: "Intermediate",
              perks: ["Kanban", "Calendar", "Media", "Links/Resources"],
              description:
                "Professional portfolio examples, portfolio reviews, progress trackers",
            },
            {
              id: "business",
              name: "Advanced",
              perks: ["Kanban", "Links/Resources", "Media", "Progress Tracker"],
              description:
                "Portfolio reviews, professional portfolio examples, interview practice, and check-ups",
            },
          ]}
        ></TemplateSelector2>
      </Container>
    </Section>
  );
}

export default TemplateSection;
