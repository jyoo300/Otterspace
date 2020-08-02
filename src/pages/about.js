import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TemplatesSection from "./../components/TemplatesSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
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
