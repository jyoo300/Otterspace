import React from "react";
import HeroSection from "./../components/HeroSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <HeroSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Keep yourself accountable and discover students like you."
      subtitle="Create and collaborate on your goals and projects. Otterspace makes goal management twice as fun."
      buttonText="Get Started"
      buttonColor="primary"
      image="https://i.ibb.co/jH3D2qk/Group-64-1.png"
      signupOnClick={() => {
        // router.push('/auth/signup');
        router.push("/auth/signup");
      }}
      loginOnClick={() => {
        router.push("/auth/signin");
      }}
    ></HeroSection>
  );
}

export default IndexPage;
