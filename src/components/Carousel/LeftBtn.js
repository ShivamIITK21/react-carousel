import React from "react";
import './btn.css'
import leftButton from './btns/left.png'
import leftArrow from './btns/leftArrow.png'

const LeftButton = (props) => {
    return(
        <div className="parent">
            <img className="outline" onClick={props.handle} src={leftButton}></img>
            <img className="arrow" onClick={props.handle} src={leftArrow}></img>
        </div>
    )
}

export default LeftButton