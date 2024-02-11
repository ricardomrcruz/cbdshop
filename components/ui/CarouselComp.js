'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComp() {
  return (
    <div className="max-w-7xl mx-auto mt-2 mb-10">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src="/media/carousel2.jpg" alt="cbd fleur mandarine" />
        </div>
        <div>
          <img src="/media/carousel3.jpg" alt="agriculture france chanvre " />
        </div>
        <div>
          <img src="/media/carousel3.jpg" alt="france cbd pas cher" />
        </div>
      </Carousel>
    </div>
  )
}
