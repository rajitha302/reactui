import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import Banner from '../components/banner'
import Keywordfinder from '../components/keywordfinder'
import Navigation from '../components/navigation'

const Keyword = () => {
    return (
        <div>
            <Navigation />
            <Banner heading="Keyword Finder" subheading="Simple App to  display all of the countries that match the keyword" />
            <Keywordfinder />

            <Container className="mt-4">
                <Col><h3>Search results for <span className="text-muted">"tree"</span></h3></Col>

                <Col>
                    <Card className="mt-5">
                        <Card.Body className="">
                            <Col ><a href="https://www.google.lk/">Sri Lanka</a></Col> <hr />
                            <Col><a href="https://www.google.lk/">India</a></Col> <hr />
                        </Card.Body>
                    </Card>
                </Col>

            </Container>
        </div>
    )
}

export default Keyword
