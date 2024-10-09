import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

const UpdateDetails = () => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<Container xs={12} sm={6} >
			<Button
				className="mb-3"
				variant="dark"
				type="submit"
				block="true"
				style={{
					width: "100%",
					height: "50px",
				}}
				onClick={() => setModalShow(true)}
			>
				Update students grade
			</Button>
			<UpdateModal show={modalShow} onHide={() => setModalShow(false)} />
		</Container>
	);
};

export default UpdateDetails;
