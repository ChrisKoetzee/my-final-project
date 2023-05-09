import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        // redirect to dashboard or home page
        console.log("Logged in");
        navigate("/");
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  return (
    <Container className="mt-5">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h3 className="text-center mb-4">Login Form</h3>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-4">
            Login
          </Button>
        </Form>
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
<Button
  variant="light"
  className="m-1"
  style={{ color: "#3b5998" }}
>
  <i className="fab fa-facebook-f"></i>
</Button>

<Button
  variant="light"
  className="m-1"
  style={{ color: "#00acee" }}
>
  <i className="fab fa-twitter"></i>
</Button>

<Button
  variant="light"
  className="m-1"
  style={{ color: "#dd4b39" }}
>
  <i className="fab fa-google"></i>
</Button>
</div>
</Col>
</Row>
</Container>
    )

export default LoginForm;
