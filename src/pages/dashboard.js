import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <DashboardSection
      bg="light"
      textColor="dark"
      size="md"
      title="Home"
      subtitle="Discover other students to work with by creating your own post."
    ></DashboardSection>
  );
}

export default requireAuth(DashboardPage);
