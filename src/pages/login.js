import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Col, Row, Form } from "react-bootstrap";
import Btn from "../components/btn";
import "../assets/style.scss"

const Login = () => {
    return (
        <div className="login">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="col-md-6 login__card">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formText" className="d-flex justify-content-end pr-0">
                                <Form.Text> <Link to="resetpwd">Forgot Password?</Link></Form.Text>
                            </Form.Group>
                            <Link to="/mainpage">
                                <Btn name="Login" />
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
