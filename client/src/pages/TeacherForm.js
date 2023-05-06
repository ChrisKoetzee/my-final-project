import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Template from "/Components/Template";

const TeacherForm = () => {
    return (
        <div className="d-flex justify-content-center">
            {/* <Template /> */}
            <Form>
                <h1>Register A Teacher</h1>
                <p>Please enter the details below to register a teacher</p>
                    
                <div className="row">
                        <div className="col-sm-6">
                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label>Full first names</Form.Label>
                            <Form.Control type="text" placeholder="Enter full first names" />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        </div>
                        <div className="col-sm-6">
                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Surname" />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        </div>
                    </div>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email address" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter your mobile nummber" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Do you aggree to our terms and conditions" />
                </Form.Group>
                
                <Button className="mb-3" variant="dark" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default TeacherForm;