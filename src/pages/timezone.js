import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import "../assets/style.scss"
import Navigation from '../components/navigation'
import Result from '../components/result'
import Banner from '../components/banner'

const Timezone = () => {
    return (
        <div className="timezone">
            <Navigation />
            <Banner heading="Timezone Finder" subheading="Simple TImezone Finder App to find timezones in different countries" />
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
            <Result name="IST (India Standard Time)
UTC/GMT +5:30 hours" />

        </div>
    )
}

export default Timezone
