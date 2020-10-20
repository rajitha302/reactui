import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "../assets/style.scss"
import Banner from '../components/banner'
import Closestcfinder from '../components/closestcfinder'
import Navigation from '../components/navigation'

const Closestcountry = () => {
    return (
        <div className="closestcfinder">
            <Navigation />
            <Banner heading="Closest Country" subheading="Simple App to find closest country" />
            <Closestcfinder />
            <Container className="justify-content-md-center mt-4">
                <Card>
                    <Row className="p-3 justify-content-">
                        <Col xs lg="4"><h4>Country</h4> <span><p>India</p></span></Col>
                        <Col xs lg="4"><h4>Distance</h4> <span><p>2438 kilometers and 921 m</p></span></Col>
                        <Col md="auto" className="col--center"><Button variant="outline-dark">View Location</Button></Col>
                    </Row>
                </Card>
                <Card>
                    <Row className="p-3">
                        <Col xs lg="4"><h4>Country</h4> <span><p>Pakistan</p></span></Col>
                        <Col xs lg="4"><h4>Distance</h4> <span><p>4438 kilometers and 921 m</p></span></Col>
                        <Col md="auto" className="col--center"><Button variant="outline-dark">View Location</Button></Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default Closestcountry
