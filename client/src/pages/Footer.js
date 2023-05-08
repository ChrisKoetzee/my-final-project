import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<Container fluid className="bg-dark text-light py-3">
			<Row>
				<Col className="text-center">
					<p>
						Copyright © 2023
						<a href="https://example.com" className="text-light mx-1">
							Your Company Name
						</a>
						All rights reserved.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
