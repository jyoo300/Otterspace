import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import "./ChatSection.scss";

function ChatSection(props) {
    return (
        <div>
            {props.items.map((item, index) => (
                <Col xs={12} key={index}>
                    {item.userId !== props.postUserId && (
                        <>
                            <Media>
                                <Card.Text className="text-right mr-4">
                                    <div className="DashboardSection__message-to">
                                        {item.message}
                                    </div>
                                </Card.Text>
                                <Avatar
                                    src={item.image}
                                    size="48px"
                                />
                            </Media>
                        </>
                    )}
                    {item.userId === props.postUserId && (
                        <>
                            <Media>
                                <Avatar
                                    src={item.image}
                                    size="48px"
                                    className="mr-2"
                                />
                                <Card.Text className="text-left">
                                    <div className="DashboardSection__message-from">
                                        {item.message}
                                    </div>
                                </Card.Text>
                            </Media>
                        </>
                    )}
                </Col>
            ))}
        </div>
    );
}

export default ChatSection;
