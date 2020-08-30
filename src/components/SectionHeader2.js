import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./SectionHeader2.scss";

function SectionHeader2(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader2" + (props.className ? ` ${props.className}` : "")
      }
    >
      <Row>
        <Col>
          {props.title && (
            <h1 className="SectionHeader2__no-classname">{props.title}</h1>
          )}
        </Col>
        <Col className="text-right">
          <Button variant="white" size="md" onClick={props.onClick}>
            Create a post
          </Button>
        </Col>
      </Row>

      {props.subtitle && (
        <p className="SectionHeader2__subtitle mb-0">{props.subtitle}</p>
      )}
    </header>
  );
}

export default SectionHeader2;
