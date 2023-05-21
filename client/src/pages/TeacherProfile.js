import Template from "../components/Template";
import { Button, Dropdown, Container, Col, Row, Image, Card } from "react-bootstrap";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const TeacherProfile = () => {
    const [flip, setFlip] = useState(false);
    return (
        <Template>
             <h1 className="text-center">Teacher profile</h1>
            <Container className="d-flex justify-content-center">
                <Row className="align-items-center">
                    <Col xs={12} sm={6}>
                        <Card 
                            className="flex-column, p-3, mb-3"
                            style={{
                                margin:"10px",
                                padding:"10px",
                            }}
                        >
                            <Card.Title as="h2">Select a Student</Card.Title>
                            <Dropdown className="mb-3">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Select a grade
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Grade 1</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 2</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 3</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 4</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 5</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 6</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 7</Dropdown.Item>
                                        <Dropdown.Item href="#">Grade 8</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Toggle>
                            </Dropdown>
                            <Dropdown className="mb-3">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Select a student
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Aiden</Dropdown.Item>
                                        <Dropdown.Item href="#">Abraham</Dropdown.Item>
                                        <Dropdown.Item href="#">Amy</Dropdown.Item>
                                        <Dropdown.Item href="#">Bassier</Dropdown.Item>
                                        <Dropdown.Item href="#">Christian</Dropdown.Item>
                                        <Dropdown.Item href="#">Charles</Dropdown.Item>
                                        <Dropdown.Item href="#">Deigo</Dropdown.Item>
                                        <Dropdown.Item href="#">Thabiso</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Toggle>
                            </Dropdown>
                            <Button className="mb-3" variant="dark" type="submit" block="true">Submit</Button>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Card 
                            className="flex-column, p-3, mb-3"
                            style={{
                                margin:"10px",
                                padding:"10px",
                            }}
                         >
                            <Card.Title as="h2">Student Details</Card.Title>
                            <ReactCardFlip 
                                isFlipped={flip}
                                flipDirection="horizontal"
                                containerStyle={{
                                    width:"100%",
                                    height:"100%",
                                    perspective:"1000px"
                                }}
                                cardStyles={{
                                    width: "100%",
                                    height: "100%",
                                    background: "#d7fbda",
                                    fontSize: "40px",
                                    color: flip ? "yellow" : "blue",
                                    margin: "20px",
                                    borderRadius: "4px",
                                    textAlign: "center",
                                    padding: "20px",
                                    backfaceVisibility: "hidden",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    cursor: "pointer",
                                }}
                                onClick={() => setFlip(!flip)}>
                                <div onClick={() => setFlip(!flip)}>
                                    <Image
                                        src=""
                                        alt="Image of student"
                                        fluid
                                        height="100%"
                                        className="flex-column"
                                    />
                                    <p>Click on the image to view students details</p>
                                </div>
                                <div onClick={() => setFlip(!flip)}>
                                    <Card 
                                        className="flex-column, p-3, mb-3"
                                        style={{
                                            margin:"10px",
                                            padding:"10px",
                                        }}>
                                        <Col>
                                            <Row>
                                                <h2>Personal information</h2>
                                                <ul className="no-bullets">
                                                    <li>Full names</li>
                                                    <li>Surname</li>
                                                    <li>Date Of Birth</li>
                                                    <li>Gender</li>
                                                    <li>Email</li>
                                                    <li>Phone number</li>
                                                </ul>
                                            </Row>
                                        </Col>
                                    </Card>
                                    <Card
                                        className="flex-column, p-3, mb-3"
                                        style={{
                                            margin:"10px",
                                            padding:"10px",
                                        }}>
                                        <Col>
                                            <Row>
                                                <h2>Grade information</h2>
                                                <ul className="none">
                                                    <li>English</li>
                                                    <li>Afrikaans</li>
                                                    <li>Life Orientation</li>
                                                    <li>Mathematics</li>
                                                    <li>Science</li>
                                                    <li>Geography</li>
                                                    <li>Physical Education</li>
                                                </ul>
                                            </Row>
                                        </Col>
                                    </Card>
                                </div>
                            </ReactCardFlip>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Template>
    )};

export default TeacherProfile;