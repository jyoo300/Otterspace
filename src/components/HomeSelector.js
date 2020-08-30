import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import Button from "react-bootstrap/Button";
import { useAuth } from "./../util/auth.js";
import { SocialIcon } from 'react-social-icons';
import "./HomeSelector.scss";

function HomeSelector(props) {
  const auth = useAuth();

  return (
    <Row className="justify-items-center">
      {/* <Col xs={12} className="mb-3">
      <Form>
        <Form.Row>
            <Col xs={4}>
              <Form.Group controlId="formSchool">
                <Form.Control as="select" defaultValue="All schools" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="formIndustry">
                <Form.Control as="select" defaultValue="All industries" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="formOrder">
                <Form.Control as="select" onChange={props.changeOrderFilter} defaultValue="Newest to oldest" > 
                  <option>Newest to oldest</option>
                  <option>Oldest to newest</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Col> */}

      {props.items.map((item, index) => (
        <Col xs={12} className="mb-3" key={index}>
          <Card>
            <Card.Body className="p-4">
              <Badge variant="light-gray" className="mb-3 px-4 py-2">
                <span className="HomeSelector__badge-text">{item.tag}</span>
              </Badge>
              <small className="HomeSelector__time-posted">Posted {item.dateFormatted}</small>
              <Media className="align-items-center mb-2">
                <Avatar src={item.image} size="56px"></Avatar>
                <Media.Body className="ml-2">
                  <h6 className="HomeSelector__name mb-0">
                    {item.name}
                  </h6>
                  <small className="HomeSelector__class">
                    {item.university} | Class of {item.class}
                  </small>
                </Media.Body>
                <Row className="d-none d-sm-block">
                  <Col>
                    {item.linkedin !== '' && (
                      <>
                      <SocialIcon url={item.linkedin} />
                      </>
                    )}
                    {item.website !== '' && (
                      <>
                      <SocialIcon url={item.website} />
                      </>
                    )}
                  </Col>

                </Row>
              </Media>
              <div className="HomeSelector__border"></div>
              <Card.Title className="pt-2">
                <h4 className="HomeSelector__card-title">{item.title}</h4>
              </Card.Title>
              <Card.Text>{item.body}</Card.Text>
              <Button variant="light-blue" size="md" className="px-5" onClick={() => props.showChat(item.chatId, item.userId)}>
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
