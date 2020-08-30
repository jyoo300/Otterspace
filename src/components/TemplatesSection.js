import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TemplateSelector from "./TemplateSelector";

function TemplatesSection(props) {
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
        <TemplateSelector
          items={[
            {
              avatar: "https://i.ibb.co/xhV9V3h/Ellipse-241.png",
              name: "Gary Wu",
              role: "Product Manager",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://i.ibb.co/X8Lf1yP/Ellipse-242.png",
              name: "Melissa Relgado",
              role: "Product Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://i.ibb.co/LzkPkvL/Ellipse-243.png",
              name: "John Yoo",
              role: "Developer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://i.ibb.co/9gSkCQh/Ellipse-262.png",
              name: "Emily Chung",
              role: "The Best Mentor",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
          ]}
        ></TemplateSelector>
      </Container>
    </Section>
  );
}

export default TemplatesSection;
