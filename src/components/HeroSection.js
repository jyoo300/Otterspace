import React, { useState } from "react";
import FormAlert from "./FormAlert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar3 from "./Avatar3";
import SectionHeader from "./SectionHeader";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import "./HeroSection.scss";
import { useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import firebase from "./../util/firebase";

function HeroSection(props) {
  const auth = useAuth();
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  let [profileImage, setProfileImage] = useState("https://i.ibb.co/Px4mpvn/profile-icon.png");
  let [userEmail, setEmail] = useState(""); 

  // firebase variables
  // var user = firebase.auth().currentUser;
  var db = firebase.firestore();
  // var imageRef = firebase.storage().ref();

  let userPassword = "";

  let userInfo = {
    name: "",
    year: "",
    school: "",
    website: "",
    linkedin: "",
    image: "https://i.ibb.co/Px4mpvn/profile-icon.png",
  };

  const handleAuth = (user) => {
    updateUser(user);
    router.push("/dashboard");
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const onFormAlert = (data) => {
    setFormAlert(data);
  };

  const updatePicture = () => {
    // imageRef.put(userInfo.image).then(function(snapshot) {

    // });
    setProfileImage(userInfo.image);
  };

  const emailSubmit = (event) => {
    event.preventDefault();
    if(userEmail !== "") {
      showModal();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userInfo.name === "" || userInfo.year === "" || userInfo.school === "") {
      alert("Missing required fields");
    }
    else {
      auth.signup(userEmail, userPassword).then((user) => {
        // Call auth complete handler
        handleAuth(user);
      }).catch((error) => {
        // Show error alert message
        onFormAlert({
          type: "error",
          message: error.message,
        });
      });
    }
  };

  const updateUser = async (user) => {
    if (user) {
      console.log("User is signed in");
      var userRef = db.collection("users").doc(user.uid);
      await userRef.update({
          name: userInfo.name,
          image: userInfo.image,
          year: userInfo.year,
          website: userInfo.website,
          linkedin: userInfo.linkedin,
          school: userInfo.school,
      }).then(function(docRef) {
        console.log("Document updated with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    } else {
      console.log("User is not signed in.")
    }
  }

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const changeNameHandler = (event) => {
    userInfo.name = event.target.value;
  }

  const changePasswordHandler = (event) => {
    userPassword = event.target.value;
  }

  const changeYearHandler = (event) => {
    userInfo.year = event.target.value;
  }

  const changeImageHandler = (event) => {
    userInfo.image = event.target.value;
    updatePicture();
  }

  const changeSchoolHandler = (event) => {
    userInfo.school = event.target.value;
  }

  const changeWebsiteHandler = (event) => {
    userInfo.website = event.target.value;
  }

  const changeLinkedinHandler = (event) => {
    userInfo.linkedin = event.target.value;
  }

  const homeOnClick = () => {
    router.push('/dashboard');
  }

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
            <Modal show={isOpen} onHide={hideModal}>
              <Modal.Title className="text-center mt-4 mb-2">
                <span className="HeroSection__create-profile">
                  Create your profile
                </span>
              </Modal.Title>
              {formAlert && (
                <FormAlert
                  type={formAlert.type}
                  message={formAlert.message}
              ></FormAlert>
              )}
              {/* <Col xs={12} className="p-4 text-center">
                <Avatar3
                  src={profileImage}
                  alt=""
                  size="200px"
                  className="text-center"
                ></Avatar3>
              </Col> */}
              <Form onSubmit={handleSubmit}>
                {/* <Col xs={10}>
                  <Form.Group controlId="user_image">
                    <Form.Label>Image Upload</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={changeImageHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col> */}
                <Col xs={10}>
                  <Form.Group controlId="user_name">
                    <Form.Label>Full Name (required)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Otis Ottille..."
                      onChange={changeNameHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Form.Row className="ml-3">
                  <Form.Group controlId="user_school">
                    <Form.Label>School Name (required)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Otter Space University"
                      onChange={changeSchoolHandler}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="user_year" className="ml-3">
                    <Form.Label>Graduation Year (required)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="2020..."
                      onChange={changeYearHandler}
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Col xs={10}>
                  <Form.Group controlId="user_password">
                    <Form.Label>Create a Password (required)</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Type a password..."
                      onChange={changePasswordHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={10}>
                  <Form.Group controlId="user_linkedin">
                    <Form.Label>LinkedIn (optional)</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://linkedin.com"
                      onChange={changeLinkedinHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={10}>
                  <Form.Group controlId="user_website">
                    <Form.Label>Website (optional)</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://otterspace.com"
                      onChange={changeWebsiteHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="text-center mt-2 mb-4">
                  <Button variant="purple" size="md" type="submit">
                    <span className="HeroSection__form-submit">
                      Get Started
                    </span>
                  </Button>
                </Col>
              </Form>
            </Modal>
            
            {!auth.user && (
              <>
              <Form className="mb-5" onSubmit={emailSubmit}>
              <Row>
                <Col xs="auto">
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Enter email here"
                      onChange={changeEmailHandler}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="purple"
                    size="md px-5 ml-2"
                    type="submit"
                    onClick={showModal}
                  >
                    <span className="HeroSection__signup">Sign Up</span>
                  </Button>
                </Col>
              </Row>
            </Form>
              </>
            )}
            {auth.user && (
              <>
              <Row>
                <Col className="mb-5" xs={12}>
                  <Button
                    variant="purple"
                    size="md px-5"
                    onClick={homeOnClick}
                  >
                    <span className="HeroSection__signup">Go to Home</span>
                  </Button>
                </Col>
              </Row>
              </>
            )}
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
