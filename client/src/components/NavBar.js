import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap"; // Added Button import
import LoginModal from "./LoginModal";

function NavBar() {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const [modalShow, setModalShow] = useState(false); // State for modal visibility

    const stickyHeaderFunc = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add("sticky_header");
        } else {
            headerRef.current.classList.remove("sticky_header");
        }
    };

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

    const handleLoginModalShow = () => setModalShow(true); // Show modal
    const handleLoginModalClose = () => setModalShow(false); // Hide modal

    useEffect(() => {
        const handleScroll = () => {
            stickyHeaderFunc();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className="w-full h-80px d-flex align-items-center">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Menu Start */}
                    <div ref={menuRef} className="menu w-100">
                        <Navbar expand="lg" className="p-0 background grey">
                            <Container className="d-flex justify-content-between align-items-center">
                                <Navbar.Brand 
                                    href="/" 
                                    variant="dark"
                                    style={{
                                        borderColor: 'black', 
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderRadius: '5px',
                                        padding: '5px',
                                        marginRight: '15rem',
                                        marginTop: '1rem',
                                    }}>
                                    Logo / Home
                                </Navbar.Brand>
                                <Navbar.Toggle
                                    aria-controls="basic-navbar-nav"
                                    className="border-0"
                                />
                                <Navbar.Collapse
                                    id="basic-navbar-nav"
                                    className="justify-content-center"
                                >
                                    <Nav className="me-auto">
                                        <Nav.Link
                                            className="text-black font-weight-600"
                                            href="/info"
                                        >
                                            School Info
                                        </Nav.Link>
                                        <Nav.Link
                                            className="text-black font-weight-600"
                                            href="/monthlyInfo"
                                        >
                                            Monthly Info
                                        </Nav.Link>
                                        <Nav.Link
                                            className="text-black font-weight-600"
                                            href="/donation"
                                        >
                                            Donation
                                        </Nav.Link>
                                        <NavDropdown
                                            title="Register"
                                            id="navbarScrollingDropdown"
                                            className="text-black font-weight-600"
                                        >
                                            <Nav.Link
                                                onClick={() =>
                                                    (window.location.href = "/admin/teacher-registration")
                                                }
                                            >
                                                Register a teacher
                                            </Nav.Link>
                                            <Nav.Link
                                                onClick={() =>
                                                    (window.location.href = "/student-registration")
                                                }
                                            >
                                                Register a student
                                            </Nav.Link>
                                        </NavDropdown>
                                        <Nav.Link 
                                            className="text-black font-weight-600" 
                                            href="/student/profile">
                                            Student Profile
                                        </Nav.Link>
                                        <Nav.Link
                                            className="text-black font-weight-600"
                                            href="/teacher/profile"
                                        >
                                            Teacher profile
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                {/* Button to open the Login Modal */}
                                <Button 
                                    variant="outline-dark" 
                                    onClick={handleLoginModalShow}
                                    className="ms-auto">
                                        Login
                                </Button>
                                {/* Pass the show and close functions to LoginModal */}
                                <LoginModal
                                    show={modalShow}
                                    onHide={handleLoginModalClose}
                                />
                            </Container>
                        </Navbar>
                    </div>
                    {/* Menu Right */}
                    <div className="d-flex align-items-center gap-4">
                        <Container
                            onClick={toggleMenu}
                            onKeyDown={toggleMenu}
                            className="text-2xl text-smallTextColor d-md-none cursor-pointer"
                        >
                            <i className="ri-menu-line"></i>
                        </Container>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
