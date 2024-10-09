import { Button, Modal, Form } from "react-bootstrap";

const LoginModal = ({ show, onHide }) => {
    return (
        <Modal
            show={show} // Use the show prop to control visibility
            onHide={onHide} // Use the onHide prop to close the modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter login details below
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3 w-100">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your surname"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                        />
                    </Form.Group>
                    <Button 
                        variant="dark"
                        className="ms-auto"
                        style={{marginTop: '1rem', width: '100%'}}>
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
