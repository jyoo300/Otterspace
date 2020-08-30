import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TemplatesSection from "./../components/TemplatesSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        bg="purple"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="The QuaranTEAns"
      ></HeroSection2>
      <TemplatesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TemplatesSection>
    </>
  );
}

export default AboutPage;
