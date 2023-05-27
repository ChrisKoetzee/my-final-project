import React, { useState } from "react";
import Template from "../components/Template";
import { 
    Button, 
    Dropdown, 
    Container, 
    Col, 
    Row, 
    Table, 
    Card, 
    Form, 
    FloatingLabel,
    OverlayTrigger,
    Popover
 } from "react-bootstrap";

const TeacherProfile = () => {
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");
    return (
        <Template>
            <h1 className="text-center">Teacher profile</h1>
            <Container>
                {/* <OverlayTrigger
                    trigger="click"
                    key="right"
                    overlay={
                        <Popover id="UPDATE">
                            <Popover.Header as="h3">Update Below</Popover.Header>
                            <Popover.Body>
                                <Input placeholder="update grade"></Input>
                                <Button>Submit</Button>
                            </Popover.Body>
                        </Popover>
                    }
                > */}
                    <Button 
                        className="mb-3" 
                        variant="dark" 
                        type="submit" 
                        block="true"
                        style={{
                            width: "100%",
                            height: "50px",
                        }}>
                            Update students grade
                    </Button>
                {/* </OverlayTrigger> */}
			</Container>
            <Container className="d-flex justify-content-center" fluid="xl">
                <Row className="align-items-center">
                    <Col xs={12} sm={4} md={4}>
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
                                    {selectedGrade ? selectedGrade : "Select a grade"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 1")}>Grade 1</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 2")}>Grade 2</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 3")}>Grade 3</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 4")}>Grade 4</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 5")}>Grade 5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 6")}>Grade 6</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedGrade("Grade 7")}>Grade 7</Dropdown.Item>
                                </Dropdown.Menu>                              
                            </Dropdown>
                            <Dropdown className="mb-3">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                {selectedStudent ? selectedStudent : "Select a student"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Aiden")}>Aiden</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Charles")}>Charles</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Christian")}>Christian</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Christopher")}>Christopher</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Deigo")}>Deigo</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Loluwethu")}>Loluwethu</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Shafiek")}>Shafiek</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedStudent("Thabiso")}>Thabiso</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button className="mb-3" variant="dark" type="submit" block="true">Submit</Button>
                        </Card>
                        <FloatingLabel controlId="floatingTextarea" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{
                                    height: '70%'
                                }}
                            />
                            <Button className="mb-3" 
                                variant="dark" 
                                type="submit" 
                                block="true"
                                style={{
                                    width: "100%",
                                    height: "30%",
                                }}>Submit Comment</Button>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <Table striped bordered hover variant="primary">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Subject</th>
                                    <th>Expected pass mark</th>
                                    <th>1st term</th>
                                    <th>2nd term</th>
                                    <th>3rd term</th>
                                    <th>4th term</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>English</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Afrikaans</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mathematics</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>N.S. Technology</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Geography</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Life orientation</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Physical education</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Physical education</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Arts and culture</td>
                                    <td>50%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Template>
    )};

export default TeacherProfile;