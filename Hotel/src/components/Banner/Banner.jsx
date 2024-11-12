import React from 'react';
import style from './banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import data from './img/data'

function Banner() {
    return (
        <>
       <div className={style.overlay}></div>
    <Carousel
    autoPlay
    infiniteLoop
    interval={3000} // Change to 3000ms or higher
    // transitionTime={1000} // Optional: 1 second transition
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
   
    >
       { data.map((img,index)=> <div className={style.carousel_box} key={index}>
        <div className={style.banner_content}>
         <p className={style.hero_desc}>make yourself at home in our hotel</p>
               <div className={style.banner_form}>
                <input type="text"  placeholder='check in' className={style.check_input}/>
                <input type="text" placeholder='check out' />
                <select name="" id="" value='adults'>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                </select>
                <select name="" id="" value='adults'>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                </select>
               </div>
          </div> 
         
         <img src={img} alt="image" className={style.carousel}/></div>)}



    </Carousel>
    </>
    )
}
export default Banner;