import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import "../assets/style.scss"

const Timezonefinder = () => {
    return (
        <div className="timezone">
            <Container className="d-flex justify-content-center">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type Country name"
                            aria-label="Country name"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" className="timezone__btn">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Container>
        </div>
    )
}

export default Timezonefinder
