import { Form, FloatingLabel, Button } from "react-bootstrap";

const Comments = () => (
	<FloatingLabel controlId="floatingTextarea" label="Comments">
		<Form.Control
			as="textarea"
			placeholder="Leave a comment here"
			style={{
				height: "70%",
			}}
		/>
		<Button
			className="mb-3"
			variant="dark"
			type="submit"
			block="true"
			style={{
				width: "100%",
				height: "30%",
			}}
		>
			Submit Comment
		</Button>
	</FloatingLabel>
);

export default Comments;
