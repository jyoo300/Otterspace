import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import Button from "react-bootstrap/Button";
import { useAuth } from "./../util/auth.js";
import "./HomeSelector.scss";

function HomeSelector(props) {
  const auth = useAuth();

  return (
    <Row className="justify-items-center">
      <Col xs={12} className="mb-3">
        <ButtonToolbar>
          <Dropdown className="mr-4">
            <Dropdown.Toggle variant="white">School</Dropdown.Toggle>
            <Dropdown.Menu>
              <LinkContainer to="#">
                <Dropdown.Item>Action</Dropdown.Item>
              </LinkContainer>

              <LinkContainer to="#">
                <Dropdown.Item>Another action</Dropdown.Item>
              </LinkContainer>

              <Dropdown.Divider></Dropdown.Divider>

              <LinkContainer to="#">
                <Dropdown.Item>Yet another action</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mr-4">
            <Dropdown.Toggle variant="white">Industry</Dropdown.Toggle>
            <Dropdown.Menu>
              <LinkContainer to="#">
                <Dropdown.Item>Action</Dropdown.Item>
              </LinkContainer>

              <LinkContainer to="#">
                <Dropdown.Item>Another action</Dropdown.Item>
              </LinkContainer>

              <Dropdown.Divider></Dropdown.Divider>

              <LinkContainer to="#">
                <Dropdown.Item>Yet another action</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="white">Order</Dropdown.Toggle>
            <Dropdown.Menu>
              <LinkContainer to="#">
                <Dropdown.Item>Action</Dropdown.Item>
              </LinkContainer>

              <LinkContainer to="#">
                <Dropdown.Item>Another action</Dropdown.Item>
              </LinkContainer>

              <Dropdown.Divider></Dropdown.Divider>

              <LinkContainer to="#">
                <Dropdown.Item>Yet another action</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </Col>

      {props.items.map((item, index) => (
        <Col xs={12} className="mb-3" key={index}>
          <Card>
            <Card.Body className="p-4">
              <Badge variant="light-gray" className="mb-3 px-4 py-2">
                <span className="HomeSelector__badge-text">{item.filter}</span>
              </Badge>
              <small className="HomeSelector__time-posted">3 hours ago</small>
              <Media className="align-items-center mb-2">
                <Avatar src={item.image} size="56px"></Avatar>
                <Media.Body className="ml-2">
                  <h6 className="HomeSelector__no-classname mb-0">
                    {item.name}
                  </h6>
                  <small className="HomeSelector__no-classname">
                    {item.university} | Class of {item.class}
                  </small>
                </Media.Body>
              </Media>
              <div className="HomeSelector__border"></div>
              <Card.Title className="pt-2">
                <h4 className="HomeSelector__card-title">{item.title}</h4>
              </Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button variant="light-blue" size="md" className="px-5">
                <span className="HomeSelector__button-text">Message</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default HomeSelector;
