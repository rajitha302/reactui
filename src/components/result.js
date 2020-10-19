import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Card } from "react-bootstrap";

const Result = (props) => {
    return (
        <div className="result mt-5">
            <Container className="text-center d-flex justify-content-center">
                <Col className="col-md-4">
                    <Card>
                        <Card.Body>
                            <h2>{props.name}</h2>
                        </Card.Body>
                    </Card>
                </Col>

            </Container>

        </div>
    )
}

export default Result
