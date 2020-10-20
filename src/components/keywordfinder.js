import React from 'react'
import { Container, InputGroup, FormControl, Button, Col } from 'react-bootstrap'
import "../assets/style.scss"

const Keywordfinder = () => {
    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Col className="col-md-6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type any keyword"
                            aria-label="Keyword"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" className="custom-btn">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Container>
        </div>
    )
}

export default Keywordfinder
