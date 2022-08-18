import React from "react";
import carouselData from "./carouselData";
import Card from "./Card";
import './Carousel.css'
import RightButton from "./RightBtn";
import LeftButton from "./LeftBtn";

const Carousel = (props) => {

    const [center, setCenter] = React.useState(1);

    const rightHandler = () => {
        if (center !== carouselData.length - 1) {
            setCenter(center + 1)
        }
        else {
            setCenter(0)
        }
    }

    const leftHandler = () => {
        if (center !== 0) {
            setCenter(center - 1)
        }
        else {
            setCenter(carouselData.length - 1)
        }
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
                />
                <Card
                    key={carouselData[center].id}
                    img={carouselData[center].img}
                    city={carouselData[center].city}
                    date={carouselData[center].date}
                    align='center'
                />
                <Card
                    key={carouselData[r].id}
                    img={carouselData[r].img}
                    city={carouselData[r].city}
                    date={carouselData[r].date}
                    align='left'
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