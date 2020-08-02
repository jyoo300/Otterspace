import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import FilterSelection from "./FilterSelection";

function FilterSection(props) {
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
        <FilterSelection
          areas={[
            {
              name: "Design",
            },
            {
              name: "Software Engineering",
            },
            {
              name: "Business",
            },
            {
              name: "Health/Pre-med",
            },
            {
              name: "Politics & Law",
            },
            {
              name: "Other",
            },
          ]}
          work={[
            {
              name: "Work on a project",
            },
            {
              name: "Find a study group",
            },
            {
              name: "Build my portfolio",
            },
            {
              name: "Interview prep",
            },
            {
              name: "Improve a skill",
            },
            {
              name: "Other",
            },
          ]}
        ></FilterSelection>
      </Container>
    </Section>
  );
}

export default FilterSection;
