import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import "../assets/style.scss"

const Banner = (props) => {
    return (
        <div className="banner">
            <Jumbotron fluid>
                <Container className="banner--padding text-center pt-5">
                    <h1 className="py-3">{props.heading}</h1>
                    <p>
                        {props.subheading}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Banner
