import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"

const Navigation = () => {
    return (
        <div className="navigation">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/mainpage" ClassName="active">Distance </Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/timezone">Time Zone</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/closestcountry">Closest Country</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/keyword">Keyword Finder</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Link to="/"><Button variant="outline-dark" size="sm">Logout</Button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
