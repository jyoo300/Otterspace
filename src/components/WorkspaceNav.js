import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./WorkspaceNav.scss";

function WorkspaceNav(props) {
  return (
    <div className="WorkspaceNav">
      <Nav>
        <Nav.Item>
          <LinkContainer to="/workspace/kanban">
            <Nav.Link eventKey="kanban">
              <h5 className="WorkspaceNav__no-classname">Kanban</h5>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/workspace/moodboard">
            <Nav.Link eventKey="moodboard">
              <h5 className="WorkspaceNav__no-classname">Moodboard</h5>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/workspace/resources">
            <Nav.Link eventKey="Resources/Links">
              <h5 className="WorkspaceNav__no-classname">Resources/Links</h5>
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default WorkspaceNav;
