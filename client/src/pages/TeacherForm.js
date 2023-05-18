import React, { useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import Template from "../components/Template";

const TeacherForm = () => {
	const [formData, setFormData] = useState({
		fullNames: "",
		surname: "",
		email: "",
		phoneNumber: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			const response = await fetch("/api/teacher", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if(response.ok) {
				const data = await response.json;
				console.log(data);
				// return data;
			} else {
				throw new Error("Failed to submit");
			}
		} catch(error) {
			console.error(error);
			// return error + ": " + e.target.name + "is already in use";
		}
	}

	return (
		<Template>
			<Container className="d-flex justify-content-center" fluid="md">
				<Form onSubmit = {()=>handleSubmit}>
					<h1>Register A Teacher</h1>
					<p>Please enter the details below to register a teacher</p>

					<Row>
						<Col xs={12} sm={6}>
							<Form.Group className="mb-3" controlId="fullNames">
								<Form.Label>Full first names</Form.Label>
								<Form.Control
									type="text"
									name="fullNames"
									placeholder="Enter full first names"
									value={formData.fullNames}
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
						<Col xs={12} sm={6}>
							<Form.Group className="mb-3" controlId="surname">
								<Form.Label>Surname</Form.Label>
								<Form.Control 
									type="text"
									name="surname"
									placeholder="Enter Surname"
									value={formData.surname}
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
					</Row>

					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control 
							type="text" 
							name="email"
							placeholder="Enter email address"
							value={formData.email}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="phoneNumber">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							type="number"
							name="phoneNumber"
							placeholder="Enter your mobile number"
							value={formData.phoneNumber}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control 
							type="password"
							name="password" 
							placeholder="Password"
							value={formData.password}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="checkPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Do you agree to our terms and conditions"
						/>
					</Form.Group>

					<Form.Group>
						<Button className="mb-3" variant="dark" type="submit" block="true">
							Register
						</Button>
					</Form.Group>
				</Form>
			</Container>
		</Template>
	);
};

export default TeacherForm;
