import React, { useState,useRef,useEffect } from "react";
import TestimonalCard from "./TestimonalCard";
import data from './img/data';
import style from './testimonal.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Testimonal() {


return <>
    <div className={style.testimonal_outer_container} id="testimonials">
        <div className={style.testimonal_left}>
          <h3 className={style.sub}>
             testimonials
          </h3>
          <h2 className={style.title}>
          Our Clients Reviews
          </h2>
          <p className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
</p>
        </div>
        <div className={style.testimonal_right}>
         {data.map((testimonal,index)=>{
            return <TestimonalCard image={testimonal.image}
            comment={testimonal.comment}
            name={testimonal.name}
            career={testimonal.career}            
            />
         })}
        </div>
    </div>
    </>
}
export default Testimonal;