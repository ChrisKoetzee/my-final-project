import { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import Template from "../components/Template";
import { Link } from "react-router-dom";

import "./Home.css";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then(() => setMessage(message))
			.catch((err) => err);
	}, [message]);

	return (
		<main role="main">
			<Template>
				<Container className="d-flex justify-content-center, p-3" fluid="md">
					<Row className="align-items-center">
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Card.Title as="h1">
									Welcome to Final Project Primary School
								</Card.Title>
								<Card.Body>
									<h2>Our vision</h2>
									<p>
										{/* To create an educational environment and to develop the
										skills of our learners in order for them to play a
										meaningful role in society. Our educators are to be kept
										abreast of new developments in education on order that our
										learners gain excellence in education. */}
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
									</p>
									<h2>Our mission</h2>
									<p>
										{/* To strive to maintain a high level of education by educating
										our children to become responsible in order that they my
										play a meaningful role in society as well as to provide the
										staff with the opportunity for professional growth enabling
										them to deliver the best possible education to our learners. */}
										Sapien dolor eu tristique pharetra blandit ridiculus est fermentum. Turpis dui nisi inceptos mauris ad mus sapien risus congue. Varius vehicula sed est nam torquent erat lacinia ex. Vestibulum finibus vehicula magnis fringilla; vulputate consectetur lobortis. Sagittis scelerisque proin aliquam hendrerit metus vel etiam dictum. 
									</p>
								</Card.Body>
								<Link to="student-registration">
									<Button
										className="mb-3"
										variant="dark"
										type="submit"
										block="true"
									>
										{" "}
										Register a new student
									</Button>
								</Link>{" "}
							</Card>
						</Col>
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Image
									src='https://media.istockphoto.com/id/1756562035/photo/university-campus.jpg?s=2048x2048&w=is&k=20&c=IO7cE5O-O89YVLdjspK9cDHfYf9SmdSlokhpn94NEUs='
									alt="front of school"
									fluid
									height="100%"
									className="flex-column"
								/>
							</Card>
						</Col>
					</Row>
				</Container>
			</Template>
		</main>
	);
}

export default Home;
