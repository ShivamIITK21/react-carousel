import React from "react";
import carouselData from "./carouselData";
import Card from "./Card";
import './Carousel.css'
import RightButton from "./RightBtn";
import LeftButton from "./LeftBtn";

const Carousel = (props) => {

    const [center, setCenter] = React.useState(1);
    const [fade, setFade] = React.useState(1);
    const [fader, setfader] = React.useState(1);
    const [fadel, setfade1] = React.useState(1);

    const setFade0 = () => {
        setFade(0);
    }

    const setFader0 = () => {
        setfader(0);
    }

    const setFade10 = () => {
        setfade1(0);
    }

    const rightHandler = () => {
        if (center !== carouselData.length - 1) {
            setCenter(center + 1)
        }
        else {
            setCenter(0)
        }
        setFade(1);
        setfader(1);
        setfade1(1);
    }

    const leftHandler = () => {
        if (center !== 0) {
            setCenter(center - 1)
        }
        else {
            setCenter(carouselData.length - 1)
        }
        setFade(1);
        setfader(1);
        setfade1(1);
    }

    const RenderCards = () => {
        let l = center-1;
        let r = center+1;
        if(l === -1){
            l = carouselData.length -1
        }
        if(r === carouselData.length){
            r = 0
        }
        return (
            <div className="holder">
                <Card
                    key={carouselData[l].id}
                    img={carouselData[l].img}
                    city={carouselData[l].city}
                    date={carouselData[l].date}
                    align='left'
                    anim = {fade ? 'fadel' : ''}
                    animState = {setFade10}
                />
                <Card
                    key={carouselData[center].id}
                    img={carouselData[center].img}
                    city={carouselData[center].city}
                    date={carouselData[center].date}
                    align='center'
                    anim = {fade ? 'fade' : ''}
                    animState = {setFade0}
                />
                <Card
                    key={carouselData[r].id}
                    img={carouselData[r].img}
                    city={carouselData[r].city}
                    date={carouselData[r].date}
                    align='right'
                    anim = {fader ? 'fader' : ''}
                    animState = {setFader0}
                />
            </div>
        )
    }

    return (
        <div>
            <RenderCards />
            <div className="btn-holder">
                <LeftButton handle={leftHandler} />
                <RightButton handle={rightHandler} />
            </div>
        </div>
    )
}

export default Carousel