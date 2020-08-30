import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { useAuth } from "./../util/auth.js";
import "./ResourcesSelector.scss";

function ResourcesSelector(props) {
  const auth = useAuth();

  return (
    <Row className="justify-content-center pt-3">
      <Col xs={12}>
        <Button variant="white" size="md" className="py-2 px-3">
          Add a resource
        </Button>
      </Col>

      {props.items.map((item, index) => (
        <Col>
          <Card className="mt-3 pt-3 pb-3 px-3">
            <Media>
              <img
                className="ResourcesSelector__no-classname mr-3"
                src={item.image}
              ></img>
              <Media.Body>
                <h5 className="ResourcesSelector__card-title">{item.title}</h5>
                <p>{item.description}</p>
              </Media.Body>
            </Media>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ResourcesSelector;
