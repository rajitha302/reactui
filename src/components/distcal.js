import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Distcal = (props) => {
    return (
        <div className="distcal">
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>From</Form.Label>
                            <Form.Control placeholder="From ex: Sri Lanka" onChange={props.Fonechanged} />
                        </Col>
                        <Col>
                            <Form.Label>To</Form.Label>
                            <Form.Control placeholder="To" onChange={props.Ftwochanged} />
                        </Col>
                    </Row>
                    <Col className="text-center mt-3"><Button variant="primary" size="md" className="px-4 distcal__btn" onClick={props.search}>Find Distance</Button></Col>
                </Form>
            </Container>
        </div>
    )
}

export default Distcal
