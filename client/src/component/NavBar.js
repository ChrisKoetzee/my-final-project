import React, { useEffect, useRef } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

function NavBar() {
	const headerRef = useRef(null);
	const menuRef = useRef(null);

	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add("sticky_header");
			} else {
				headerRef.current.classList.remove("sticky_header");
			}
		});
	};

	const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

	useEffect(() => {
		stickyHeaderFunc();

		return () => window.removeEventListener("scroll", stickyHeaderFunc);
	}, []);

	return (
		<header ref={headerRef} className="w-full h-80px d-flex align-items-center">
			<div className="container">
				<div className="d-flex justify-content-between">
					{/* Logo */}
					<div className="d-flex align-items-center gap-3">
						<div className="leading-13px">
							<h2 className="text-xl font-weight-bold">Douglas School</h2>
						</div>
					</div>
					{/* Logo end */}

					{/* Menu Start */}
					<div ref={menuRef} className="menu">
						<Navbar expand="md" className="p-0">
							<Navbar.Toggle
								aria-controls="basic-navbar-nav"
								className="border-0"
							/>
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="ml-auto">
									<Nav.Link className="text-black font-weight-600" href="#">
										School Info
									</Nav.Link>
									<Nav.Link className="text-black font-weight-600" href="#">
										Student Info
									</Nav.Link>
									<Nav.Link className="text-black font-weight-600" href="#">
										NewsLetter
									</Nav.Link>
									<Nav.Link className="text-black font-weight-600" href="#">
										Donation
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</div>
					{/* Menu End */}

					{/* Menu Right */}
					<div className="d-flex align-items-center gap-4">
						<Button
							className="d-flex align-items-center gap-2 font-weight-600 border py-2 px-4 rounded-8px max-h-40px hover:bg-smallTextColor hover:text-white"
							style={{
								transition: "background-color 0.3s ease-in, color 0.3s ease-in",
								color: "black",
								borderColor: "black",
								backgroundColor: "white",
							}}
						>
							Login As Student
						</Button>
						<button
							onClick={toggleMenu}
							className="text-2xl text-smallTextColor d-md-none cursor-pointer"
						>
							<i className="ri-menu-line"></i>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
