import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";
import { Link } from "./../util/router.js";

function SchoolSelection(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={4}
          lg={3}
          className="py-3 d-flex align-items-stretch text-center"
          key={index}
        >
          <Card className="d-flex flex-grow-1 flex-column text-center align-items-center border-2">
            <Card.Body className="p-2">
              <Avatar src={item.avatar} alt={item.name} size="128px"></Avatar>
              <div className="mt-4">
                <h6 className="font-weight-bold mb-0">
                  <Link to="/templates">{item.name}</Link>
                </h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SchoolSelection;
