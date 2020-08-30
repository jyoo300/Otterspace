import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import Form from "react-bootstrap/Form";
import { useAuth } from "./../util/auth.js";
import "./KanbanSelector.scss";

function KanbanSelector(props) {
  const [isHidden, cardIsHidden] = React.useState(false);
  const showCard = () => {
    cardIsHidden(false);
  };

  const hideCard = () => {
    cardIsHidden(true);
  };
  
  const auth = useAuth();

  return (
    <Row className="justify-content-center pt-3">
      <Col xs={12} className="pb-5">
        <Card className="w-100 bg-purple" hidden={isHidden}>
          <Card.Body className="text-center">
            <Card.Title>
              <h4 className="KanbanSelector__create-workspace-title">
                Create a workspace for your team
              </h4>
            </Card.Title>
            <Card.Text>
              <p className="KanbanSelector__create-workspace-text">
                Customize your workspace any way you need it!
              </p>
            </Card.Text>
            <Button variant="light" size="md" className="px-4" onClick={hideCard}>
              <span className="KanbanSelector__done-button">Done</span>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {props.items.map((item, index) => (
        <Col
          md={12}
          lg={4}
          className="py-1 px-2 align-items-center"
          key={index}
        >
          <p className="KanbanSelector__kanban-label">{item.label}</p>
          <Card className="w-100">
            <Card.Body className="d-flex flex-column p-4">
              <Media className="align-items-center mb-3">
                <Avatar size="13px" src={item.image}></Avatar>
                <Media.Body className="ml-2">
                  <h5 className="font-weight-bold mb-0">{item.name}</h5>
                </Media.Body>
              </Media>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="text"
                    placeholder={item.body}
                    as="textarea"
                    rows={4}
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default KanbanSelector;
