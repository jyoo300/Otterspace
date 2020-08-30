import React from "react";
import WorkspaceSection from "./../components/WorkspaceSection";
import { useRouter } from "./../util/router.js";
import { requireAuth } from "./../util/auth.js";

function WorkspacePage(props) {
  const router = useRouter();

  return (
    <WorkspaceSection
      bg="light"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Website Redesign"
      subtitle=""
      section={router.query.section}
      key={router.query.section}
    ></WorkspaceSection>
  );
}

export default requireAuth(WorkspacePage);
