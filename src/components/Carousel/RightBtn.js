import React from "react";
import rightButton from './btns/right.png'
import rightArrow from './btns/rightArrow.png'
import './btn.css'

const RightButton = (props) => {
    return(
        <div className="parent">
            <img className="outline" onClick={props.handle} src={rightButton}></img>
            <img className="arrow" onClick={props.handle} src={rightArrow}></img>
        </div>
    )
}

export default RightButton