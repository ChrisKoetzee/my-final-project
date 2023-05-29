import { useState } from "react";
import {
	Dropdown,
	Button,
	Container,
	OverlayTrigger,
	Popover,
} from "react-bootstrap";

const UpdateGrade = () => {
	const [selectedSubject, setSelectedSubject] = useState("");
	const [selectedTerm, setSelectedTerm] = useState("");

	return (
		<Container>
			<OverlayTrigger
				trigger="click"
				key="right"
				placement="top"
				overlay={
					<Popover id="UPDATE">
						<Popover.Header as="h3">Update Below</Popover.Header>
						<Popover.Body>
							<Dropdown className="mb-3">
								<Dropdown.Toggle variant="dark" id="dropdown-basic">
									{selectedSubject ? selectedSubject : "Select a subject"}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => setSelectedSubject("English")}>
										English
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("Afrikaans")}
									>
										Afrikaans
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("Mathematics")}
									>
										Mathematics
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("N.S. Technologies")}
									>
										N.S. Technologies
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("Life orientation")}
									>
										Life orientation
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("Geography")}
									>
										Geography
									</Dropdown.Item>
									<Dropdown.Item onClick={() => setSelectedSubject("History")}>
										History
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => setSelectedSubject("Arts and culture")}
									>
										Arts and culture
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown className="mb-3">
								<Dropdown.Toggle variant="dark" id="dropdown-basic">
									{selectedTerm ? selectedTerm : "Select a term"}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => setSelectedTerm("1st Term")}>
										1st Term
									</Dropdown.Item>
									<Dropdown.Item onClick={() => setSelectedTerm("2nd Term")}>
										2nd Term
									</Dropdown.Item>
									<Dropdown.Item onClick={() => setSelectedTerm("3rd Term")}>
										3rd Term
									</Dropdown.Item>
									<Dropdown.Item onClick={() => setSelectedTerm("4th Term")}>
										4th Term
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<input className="mb-3" placeholder="update grade"></input>
							<Button>Submit</Button>
						</Popover.Body>
					</Popover>
				}
			>
				<Button
					className="mb-3"
					variant="dark"
					type="submit"
					block="true"
					style={{
						width: "100%",
						height: "50px",
					}}
				>
					Update students grade
				</Button>
			</OverlayTrigger>
		</Container>
	);
};

export default UpdateGrade;
