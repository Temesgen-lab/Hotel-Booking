import React,{useRef} from 'react';
import style from './banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import data from './img/data'

function Banner() {
    const dateInputRef = useRef(null); // Reference to the date input


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
                <div className={style.input_box} >
                <label htmlFor="check_in" className={style.input_label}>check in: <span>👇👇👇</span></label><br />
                <input type="date"  placeholder='check in' className={style.check_input} id={style.check_in}/></div>
                <div className={style.input_box} >
                   
                <label htmlFor="check_out" className={style.input_label}>check out: <span>👇👇👇</span></label> <br />
                <input type="date" placeholder='check out' className={style.check_input} id={style.check_out}/></div>
                <select name="" id="" className={style.select}>
                <option value="6" selected>adults </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select>
                <select name="" id="" className={style.select}>
                <option value="6" selected>childrens </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
               </div>
               <button className={style.btn_check}>Check Availability</button>
          </div> 
         
         <img src={img} alt="image" className={style.carousel}/></div>)}



    </Carousel>
    </>
    )
}
export default Banner;