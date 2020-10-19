import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Distance Calculator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link> <Link to="/mainpage" ClassName="active">Distance </Link></Nav.Link>
                            <Nav.Link><Link to="/timezone">Time Zone</Link></Nav.Link>
                            <Nav.Link className="pl-5"> <Link to="/">Logout</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Navigation
