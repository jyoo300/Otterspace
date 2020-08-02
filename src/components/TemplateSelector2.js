import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useAuth } from "./../util/auth.js";
import "./TemplateSelector2.scss";

function TemplateSelector2(props) {
  const auth = useAuth();

  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          md={12}
          lg={4}
          className="py-1 px-2 d-flex align-items-center"
          key={index}
        >
          <Card className="w-100">
            <Card.Body className="d-flex flex-column p-4">
              <h4 className="TemplateSelector2__no-classname font-weight-bold mb-4">
                {item.name}
              </h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TemplateSelector2;
