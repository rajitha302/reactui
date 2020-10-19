import React from 'react'
import "../assets/style.scss"
import { Button } from "react-bootstrap";

const btn = (props) => {
    return (
        <div>
            <Button type="submit" value="submit" className="custom-btn p-2">
                {props.name}
            </Button>
        </div>
    )
}

export default btn
