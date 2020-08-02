import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuth } from "./../util/auth.js";

function ResourcesSelector(props) {
  const auth = useAuth();

  return (
    <Row className="justify-content-center pt-3">
      <Col xs={12}>
        <p>Add a resource</p>
      </Col>

      {props.items.map((item, index) => (
        <Col md={12} className="py-1 px-2 align-items-center" key={index}></Col>
      ))}
    </Row>
  );
}

export default ResourcesSelector;
