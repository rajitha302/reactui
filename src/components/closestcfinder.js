import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import "../assets/style.scss"

const Closestcfinder = () => {
    return (
        <div className="closestcfind">
            <Container className="d-flex justify-content-center">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type your Country"
                            aria-label="Location"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" className="custom-btn">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Container>
        </div>
    )
}

export default Closestcfinder
