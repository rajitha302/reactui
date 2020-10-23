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
                            {/* <h2>{props.lat1} |{props.lng1}</h2>
                            <hr />
                            <h2>{props.lat2} |{props.lng2}</h2> */}

                            <h2>{props.distance}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    )
}

export default Result
