import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
// import MonthlyInfo from "../pages/MonthlyInfo";

export default function App() {
	return (
		<MDBFooter
			className="text-center text-lg-start "
			style={{ backgroundColor: "#0f172a", color:'white'}}
		>
			<section className="d-flex justify-content-center justify-content-lg-space-evenly p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a
						href="https://www.facebook.com/douglasroadprimaryschool/"
						className="me-4 text-reset"
					>
						<MDBIcon fab icon="facebook-f" />
					</a>
					<a
						href="https://twitter.com/douglasroadps"
						className="me-4 text-reset"
					>
						<MDBIcon fab icon="twitter" />
					</a>
				</div>
			</section>

			<section className="">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<MDBIcon icon="gem" className="me-3" />
								Douglas Road Primary School
							</h6>
							<p>School Motto goes here!</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Registrations</h6>
							<p>
								<a href="admin/teacher-registration" className="text-reset">
									Teacher Registration
								</a>
							</p>
							<p>
								<a href="/student-registration" className="text-reset">
									Student Registration
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
							<p>
								<a href="/monthlyInfo" className="text-reset">
									Monthly Info
								</a>
							</p>
							<p>
								<a href="/donation" className="text-reset">
									Donations
								</a>
							</p>
						</MDBCol>

						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<MDBIcon icon="home" className="me-2" />
								1 Final Project Rd, Area, Cape Town
							</p>
							<p>
								<MDBIcon icon="envelope" className="me-3" />
								final@project.co.za
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> 012 345 6789
							</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div
				className="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
			>
				© 2023 Copyright:
				<a
					className="text-reset fw-bold"
					href="#"
				>
					Final Project Primary School
				</a>
			</div>
		</MDBFooter>
	);
}
