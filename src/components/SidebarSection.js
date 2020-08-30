import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar2 from "./Avatar2";
import { Link } from "./../util/router.js";
import firebase from "./../util/firebase";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

var db = firebase.firestore();

var userName = "";
var userImage = "";

class SidebarSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: firebase.auth().currentUser,
        };
    };

    async componentDidMount() {
        // firebase methods
        var userRef = db.collection("users").doc(this.state.user.uid);
        await userRef.get().then(function (doc) {
            if (doc.exists) {
                userName = doc.data().name;
                userImage = doc.data().image;
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
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
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Avatar2
                                src={userImage}
                                size="56px"
                            ></Avatar2>
                        </Col>
                        <Col xs={12} className="text-center mt-1">
                            <span className="DashboardSection__profile-name" href="/">
                                {userName}
                            </span>
                        </Col>
                        <Col xs={12} className="text-center">
                            <Link
                                className="DashboardSection__profile-link"
                                to="/settings/general"
                            >
                                Edit Profile
                  </Link>
                        </Col>
                        <Col xs={12} className="mt-3">
                            <Link
                                className="DashboardSection__sidebar-link"
                                to="/dashboard"
                            >
                                Home
                  </Link>
                        </Col>
                        <Col xs={12} className="mt-3">
                            <div className="DashboardSection__border"></div>
                        </Col>
                        <Col xs={12} className="mt-3">
                            <span className="DashboardSection__workspace-title" href="/">
                                WorkSpaces     
                                            </span>
                        </Col>
                            <Col xs={12} className="mt-3">
                            <Link
                                className="DashboardSection__project-link"
                                to="/workspace/kanban"
                            >
                                Website Redesign
                  </Link>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default SidebarSection;
