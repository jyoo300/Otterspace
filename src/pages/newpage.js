import React from "react";
import TestimonialsSection2 from "./../components/TestimonialsSection2";
import TestimonialsSection from "./../components/TestimonialsSection";
import SchoolsSection from "./../components/SchoolsSection";
import TemplateSection from "./../components/TemplateSection";

function NewPagePage(props) {
  return (
    <>
      <TestimonialsSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      ></TestimonialsSection2>
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      ></TestimonialsSection>
      <SchoolsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Choose Your School"
        subtitle=""
      ></SchoolsSection>
      <TemplateSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      ></TemplateSection>
    </>
  );
}

export default NewPagePage;
