import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <div className={"card " + props.align + " " + props.anim} onAnimationEnd={props.animState}>
            <img src={props.img} className="card-img"></img>
            <button className="reg-btn">Register Now!</button>
            <h1 className="card-name">{props.city}</h1>
            <p className="card-date">{props.date}</p>
        </div>
    )
}

export default Card