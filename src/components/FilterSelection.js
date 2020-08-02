import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./FilterSelection.scss";

function FilterSelection(props) {
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={12}>
        <h5 className="FilterSelection__areas">
          What areas are you interested in?
        </h5>
      </Col>

      {props.areas.map((area, index) => (
        <Col
          xs={12}
          md={4}
          className="py-3 d-flex align-items-stretch text-center"
          key={index}
        >
          <Button
            variant="outline-purple text-dark"
            size="md"
            block={true}
            className="py-2"
          >
            <span className="FilterSelection__bold">{area.name}</span>
          </Button>
        </Col>
      ))}

      <Col xs={12} className="mt-5">
        <h5 className="FilterSelection__areas">What do you want to work on?</h5>
      </Col>

      {props.work.map((work, index) => (
        <Col
          xs={12}
          md={4}
          className="py-3 d-flex align-items-stretch text-center"
          key={index}
        >
          <Button
            variant="outline-purple text-dark"
            size="md"
            block={true}
            className="py-2"
          >
            <span className="FilterSelection__bold">{work.name}</span>
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export default FilterSelection;
