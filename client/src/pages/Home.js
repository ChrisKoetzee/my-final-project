import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container, Button, Image, Card} from "react-bootstrap";
import Template from "/components/Template";

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
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<Template>
				<Link to="/about/this/site">About</Link>
				<Container className="d-flex justify-content-center, p-3" fluid="md">
					<Row className="align-items-center">
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3" >
								<Card.Title as="h1">Welcome to Douglas Primary School</Card.Title>
								<Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
								<Button className="mb-3" variant="dark" type="submit" block="true">
									Register a new student
								</Button>
							</Card>
						</Col>
						<Col xs={12} sm={6}>
							<Card className="flex-column, p-3">
								<Image src="http://surl.li/gztyt" alt="front of school" fluid height="100%" className="flex-column"/>
							</Card>
						</Col>
					</Row>
				</Container>
			</Template>
		</main>
	);
}

export default Home;
