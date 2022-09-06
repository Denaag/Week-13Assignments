import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

const Navb = () => { // arrow function
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Container>
                    <Navbar.Brand href="#home">HireTech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Profile</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb;