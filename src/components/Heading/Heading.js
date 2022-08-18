import React from "react";
import './Heading.css'

const Heading = (props) => {
    return (
        <h1 className="heading">{props.content}</h1>
    )
}

export default Heading