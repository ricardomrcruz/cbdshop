"use client"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComp(){

    return (
        <div className="max-w-7xl mx-auto ">
            <Carousel showArrows={true} autoPlay={true} interval={7000} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img  src="/media/carousel1.jpg" alt="" />
                </div>
                <div>
                    <img  src="/media/carousel2.jpg" alt="" />
                </div>
                <div>
                    <img  src="/media/carousel1.jpg" alt="" />
                </div>
            </Carousel>


        </div>
    )
}