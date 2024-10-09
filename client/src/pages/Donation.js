import { useState } from "react";
import Template from "../components/Template";
import DonationsModal from "../components/DonationsModal";

const Donation = () => {
	const [modalShow, setModalShow] = useState(false); 

	return (
		<Template>
			<div className="d-flex flex-column align-items-center p-4">
				<img 
					src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGF0JTIwc2Nob29sfGVufDB8fDB8fHww"
					alt="Kids at school"
					className="mb-4" 
					style={{
						border: "5px solid black", 
						borderRadius: "20px",
					}}
				/>
				<h1 className="mb-3">Join Us in Championing Change!</h1>
				<p className="mb-4">
					Every donation matters! Help us inspire and uplift the next generation.
				</p>
				
				<button 
					type="button" 
					className="btn btn-dark" 
					onClick={() => setModalShow(true)} 
				>
					Click me to donate
				</button>

				<DonationsModal
					show={modalShow} 
					onHide={() => setModalShow(false)}
				/>
			</div>
		</Template>
	);
};

export default Donation;
