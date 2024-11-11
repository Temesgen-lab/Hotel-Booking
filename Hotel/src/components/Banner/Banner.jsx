import React from 'react';
import style from './banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import data from './img/data'

function Banner() {
    return (
        <>
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
   interval={2000}
   transitionTime={1000}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    >
       { data.map(img => <img src={img} alt="image" className={style.carousel}/>)}



    </Carousel>
    </>
    )
}
export default Banner;