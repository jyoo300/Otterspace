import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import SectionHeader2 from "./SectionHeader2";
import HomeSelector from "./HomeSelector";
import Toast from "react-bootstrap/Toast";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import "./DashboardSection.scss";
import firebase from "./../util/firebase";
import SidebarSection from "./SidebarSection";
import ChatSection from "./ChatSection";


// Firebase variables
var db = firebase.firestore();
var postsRef = db.collection("posts").orderBy('datePosted');

// Post Data
var userName = "";
var userImage = "";
var userClass = "";
var userSchool = "";
var userLinkedin = "";
var userWebsite = "";

var postTitle = "";
var postDescription = "";
var postIndustry = "";
var chatId = "";
var userId = "";
var dateFormatted = "";

var tempImage = "";
var tempName = "";
var tempYear = "";
var tempSchool = "";

var currentChatId = "";
var currentMessage = "";

class DashboardSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            createPost: false,
            showChat: false,
            posts: [],
            user: firebase.auth().currentUser,
            orderFilter: "Newest to oldest",
            chatImage: "",
            chatName: "",
            chatYear: "",
            chatSchool: "",
            messages: [],
            postUserId: "",
        };
    };

    async componentDidMount() {
        // firebase methods
        this.formatDate();
        await postsRef.get().then((querySnapshot) => {
            let posts = [];
            querySnapshot.forEach((doc) => {
              posts.push(doc.data());
            //   console.log(doc.data().datePosted.toDate().getFullYear());
            //   console.log(doc.data().datePosted.toDate().getMonth());
            //   console.log(doc.data().datePosted.toDate().getDate());
            });
            if(this.state.orderFilter === "Newest to oldest") {
                posts = posts.reverse();
            }
            this.setState({posts: posts});
        });
        var userRef = db.collection("users").doc(this.state.user.uid);
        userId = this.state.user.uid;
        await userRef.get().then(function(doc) {
            if (doc.exists) {
                userClass = doc.data().year;
                userSchool = doc.data().school;
                userName = doc.data().name;
                userImage = doc.data().image;
                userLinkedin = doc.data().linkedin;
                userWebsite = doc.data().website;
            } else {
                console.log("No such document!");
            }
          }).catch(function(error) {
            console.log("Error getting document:", error);
          });
    }

    showCreate = () => {
        this.setState({
            createPost: true,
        });
    };

    hideCreate = () => {
        this.setState({
            createPost: false,
        });
    };

    hideCard = () => {
        this.setState({
            isHidden: true,
        });
    };

    showChat = (chatId, userId) => {
        this.getChat(chatId, userId);
        console.log(userId);
        this.setState({
            showChat: true,
            postUserId: userId
        });
    };

    hideChat = () => {
        this.setState({
            showChat: false,
        });
    };

    formatDate = () => {
        let datePosted = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        dateFormatted = months[datePosted.getMonth()] + " " + datePosted.getDate() + ", " + datePosted.getFullYear() + ", " + this.formatAMPM(datePosted);
    }

    formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ampm;
        return strTime;
      }
      
    async handleSubmit(event) {
        event.preventDefault();
        if (postTitle === "" || postDescription === "" || postIndustry === "") {
            alert('Missing fields!');
        }
        else {
            await db.collection("chats").add({
            
            }).then(function (docRef) {
                chatId = docRef.id;
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
            await db.collection("posts").add({
                body: postDescription,
                class: userClass,
                image: userImage,
                name: userName,
                tag: postIndustry,
                title: postTitle,
                university: userSchool,
                datePosted: new Date(),
                chatId: chatId,
                userId: userId,
                dateFormatted: dateFormatted,
                linkedin: userLinkedin,
                website: userWebsite,
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    window.location.reload(false);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    };

     sendMessage = () => {
        db.collection("messages").add({
            chatId: currentChatId,
            timeStamp: new Date(),
            message: currentMessage,
            userId: userId,
            image: userImage
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

        this.getMessages();
    };

    changeTitleHandler = (event) => {
        postTitle = event.target.value;
    }

    changeDescriptionHandler = (event) => {
        postDescription = event.target.value;
    }

    changeIndustryHandler = (event) => {
        postIndustry = event.target.value;
    }

    // changeOrderFilter = (event) => {
    //     this.setState({
    //         orderFilter: event.target.value
    //     });
    // }

    onMessageChange = (event) => {
        currentMessage = event.target.value;
    }

    async getChat(chatId, userId) {
        var userRef = db.collection("users").doc(userId);
        currentChatId = chatId;
        await userRef.get().then(function(doc) {
            if (doc.exists) {
                tempImage = doc.data().image;
                tempName = doc.data().name;
                tempYear = doc.data().year;
                tempSchool = doc.data().school;
            } else {
                console.log("No such document!");
            }
          }).catch(function(error) {
            console.log("Error getting document:", error);
          });

          this.setState({
            chatImage: tempImage,
            chatName: tempName,
            chatYear: tempYear,
            chatSchool: tempSchool,
        });
        this.getMessages();
    }

    async getMessages() {
        this.setState({messages: []});
        var messagesRef = db.collection("messages").where("chatId", "==", currentChatId).orderBy("timeStamp");
        let messages = [];
        await messagesRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                messages.push(doc.data());
            });

        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        this.setState({messages: messages});
    }
    
    render() {
        return (
            <Section
                bg={this.props.bg}
                textColor={this.props.textColor}
                size={this.props.size}
                bgImage={this.props.bgImage}
                bgImageOpacity={this.props.bgImageOpacity}
            >
                <Container fluid={true} sticky="top">
                    <Row>
                        <Col xs={3} md={2} className="d-none d-sm-block">
                            <SidebarSection></SidebarSection>
                        </Col>
                        <Col xs={6} md={7}>
                            <Card className="w-100 bg-purple mb-3" hidden={this.state.isHidden}>
                                <Card.Body className="text-center">
                                    <Card.Title>
                                        <h4 className="DashboardSection__create-workspace-title">
                                            Work with other students on projects
                  </h4>
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="DashboardSection__create-workspace-text">
                                            Find projects to work on with other students - filtered by
                                            industry and interests
                  </p>
                                    </Card.Text>
                                    <LinkContainer to="/workspace/kanban">
                                        <Button variant="light" size="md" className="px-4">
                                            <span className="DashboardSection__done-button">Next</span>
                                        </Button>
                                    </LinkContainer>
                                    <Col xs={12} className="mt-2">
                                        <LinkContainer to="#">
                                            <Card.Link onClick={this.hideCard}>
                                                <span className="DashboardSection__skip-for-now">
                                                    Skip for now
                      </span>
                                            </Card.Link>
                                        </LinkContainer>
                                    </Col>
                                </Card.Body>
                            </Card>
                            <SectionHeader2
                                title={this.props.title}
                                subtitle={this.props.subtitle}
                                size={1}
                                spaced={true}
                                className="text-left"
                                onClick={this.showCreate}
                            ></SectionHeader2>
                            <Modal show={this.state.createPost} onHide={this.hideCreate}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Row>
                                        <Col xs={10} className="ml-4 mt-3">
                                            <Form.Group controlId="post_title">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="I am looking for..."
                                                    onChange={this.changeTitleHandler}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={10} className="ml-4">
                                            <Form.Group controlId="post_description">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Type a description..."
                                                    as="textarea"
                                                    rows={4}
                                                    onChange={this.changeDescriptionHandler}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={10} className="ml-4">
                                            <Form.Group controlId="post_industry">
                                                <Form.Control
                                                    as="select"
                                                    defaultValue="Select an industry"
                                                    onChange={this.changeIndustryHandler}
                                                >
                                                    <option>Select an industry</option>
                                                    <option>Web Dev</option>
                                                    <option>Design</option>
                                                    <option>Product Management</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className="mb-3">
                                        <Col xs={12} className="text-right">
                                            <Button
                                                variant="purple"
                                                size="md"
                                                className="px-4 mr-4"
                                                type="submit"
                                            >
                                                <span className="DashboardSection__post">Post</span>
                                            </Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Modal>
                            <HomeSelector
                                items={this.state.posts}
                                changeOrderFilter={this.changeOrderFilter}
                                showChat={this.showChat}
                            ></HomeSelector>
                            <div
                                className="mt-5 mx-auto text-center"
                                style={{
                                    maxWidth: "460px",
                                }}
                            >
                            </div>
                        </Col>
                        <Col className="d-none d-sm-block">
                            <Toast
                                show={this.state.showChat}
                                onClose={this.hideChat}
                                className="position-fixed"
                            >
                                <Toast.Header>
                                    <Media className="align-items-center mb-2">
                                        <Avatar
                                            src={this.state.chatImage}
                                            size="48px"
                                        />
                                        <Media.Body className="ml-2">
                                            <h6 className="DashboardSection__no-classname mb-0">
                                                {this.state.chatName}
                    </h6>
                                            <small className="DashboardSection__no-classname">
                                                {this.state.chatSchool} | Class of {this.state.chatYear}
                    </small>
                                        </Media.Body>
                                    </Media>
                                </Toast.Header>
                                <Toast.Body>
                                    <Row>
                                        <ChatSection items={this.state.messages} postUserId={this.state.postUserId}>

                                        </ChatSection>
                                        <Col xs={12} className="mt-4">
                                            <Form>
                                                <Form.Row>
                                                    <Col xs="8">
                                                        <Form.Group controlId="send_text">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Type a message"
                                                                onChange={this.onMessageChange}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="purple" onClick={this.sendMessage} size="md">
                                                            Send
                                                        </Button>
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default DashboardSection;
