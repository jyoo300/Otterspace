import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useAuth } from "./../util/auth.js";
import "./NavbarCustom.scss";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar
      bg={props.bg}
      variant={props.variant}
      expand={props.expand}
      sticky="top"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            ></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {auth.user && (
              <>
                <Nav.Item>
                  <div className="NavbarCustom__home-auth">
                    <LinkContainer to="/dashboard">
                      <Nav.Link className="active">Home</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__about-auth">
                    <LinkContainer to="/about">
                      <Nav.Link className="active">About</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__contact-auth">
                    <LinkContainer to="/contact">
                      <Nav.Link className="active">Contact</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__logout-auth">
                    <LinkContainer to="/auth/signout">
                      <Nav.Link
                        className="active"
                        onClick={(e) => {
                          e.preventDefault();
                          auth.signout();
                        }}
                      >
                        Log Out
                      </Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
              </>
            )}

            {!auth.user && (
              <>
                <Nav.Item>
                  <div className="NavbarCustom__home-noauth">
                    <LinkContainer to="/">
                      <Nav.Link className="active">Home</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__about-noauth">
                    <LinkContainer to="/about">
                      <Nav.Link className="active">About</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__contact-noauth">
                    <LinkContainer to="/contact">
                      <Nav.Link className="active">Contact</Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
                <Nav.Item>
                  <div className="NavbarCustom__login-noauth">
                    <LinkContainer to="/auth/signin">
                      <Nav.Link className="active" active={false}>
                        Login
                      </Nav.Link>
                    </LinkContainer>
                  </div>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
