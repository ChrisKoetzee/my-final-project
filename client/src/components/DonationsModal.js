import { Modal } from "react-bootstrap";
import Comments from "./Comments";

const DonationsModal = (props) => {
	
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Thank you for your contribution
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input className="mb-3" placeholder="insert amount"></input>
				<Comments className="mb-3" />
			</Modal.Body>
			{/* <Modal.Footer>
				<Button onClick={props.onHide}>Submit</Button>
			</Modal.Footer> */}
		</Modal>
	);
};

export default DonationsModal;
