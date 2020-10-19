import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Distcal = () => {
    return (
        <div className="distcal">
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>From</Form.Label>
                            <Form.Control placeholder="From ex: Sri Lanka" />
                        </Col>
                        <Col>
                            <Form.Label>To</Form.Label>
                            <Form.Control placeholder="To" />
                        </Col>
                    </Row>
                    <Col className="text-center mt-3"><Button variant="primary" size="md" className="px-4 distcal__btn">Find Distance</Button></Col>
                </Form>
            </Container>
        </div>
    )
}

export default Distcal
