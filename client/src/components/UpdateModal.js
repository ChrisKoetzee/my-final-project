import { Container, Modal, Dropdown, Button, Form } from "react-bootstrap";
import { useState } from "react";

const UpdateModal = (props) => {
	const [selectedGrade, setSelectedGrade] = useState("");
	const [gender, setGender] = useState("");

	const handleChange = (event) => {
		setGender(event.target.value);
	};

	return (
		<Container fluid className="d-flex flex-column align-items-center justify-content-center">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Update fields below
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
                    <Form>
                        <Dropdown className="mb-3 w-100">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="w-100">
                                {selectedGrade ? selectedGrade : "Select a Grade"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 1")}>
                                    Grade 1
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 2")}>
                                    Grade 2
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 3")}>
                                    Grade 3
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 4")}>
                                    Grade 4
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 5")}>
                                    Grade 5
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 6")}>
                                    Grade 6
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedGrade("grade 7")}>
                                    Grade 7
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Student's Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Update student's name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Student's Surname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Update student's surname"
                            />
                        </Form.Group>

                        <h3>Select your gender:</h3>
                        <Form.Group className="mb-3 w-100">
                            <Form.Check
                                type="radio"
                                label="Male"
                                value="male"
                                checked={gender === 'male'}
                                onChange={handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                value="female"
                                checked={gender === 'female'}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Guardian's Name and Surname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Update Guardian's name and surname"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Guardian's Contact Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Update Guardian's contact number"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Guardian's Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Update Guardian's email address"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button
                            className="mb-3 w-100"
                            variant="dark"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

export default UpdateModal;
