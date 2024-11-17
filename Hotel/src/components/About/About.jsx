import React from 'react'
import style from './about.module.css'
import WashIcon from '@mui/icons-material/Wash';
import TextIcon from '@mui/icons-material/Textsms';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';
import img from '../Testimonials/img/pattern-1.png'



function About() {
    return <>
    <div className={style.about_outer_container}>
      <img src={img} alt="" className={style.dot} />
      <div className={style.about_container}>
        <div className={style.about_box}>
            <FavoriteIcon className={style.about_icon}/>
            <h3 className={style.about_title}>Customer Satisfaction</h3>
            <p className={style.about_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque laudantium quis aspernatur libero totam 
                facere</p>
        </div>
         <div className={style.about_box}>
         <WashIcon className={style.about_icon}/>
          <h3 className={style.about_title}>Consistent Cleanliness</h3>
        
          <p className={style.about_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque laudantium quis aspernatur libero totam 
                facere</p>
        </div>
        <div className={style.about_box}>
            <TextIcon className={style.about_icon} />
             <h3 className={style.about_title}>Efficient Communication</h3>
             <p className={style.about_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque laudantium quis aspernatur libero totam 
                facere</p>
        </div>
        <div className={style.about_box}>
                  <SpaIcon className={style.about_icon} />
           <h3 className={style.about_title}>Sustainable Practices</h3>
           <p className={style.about_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque laudantium quis aspernatur libero totam 
                facere</p>
        </div>
      </div></div>
    </>
}

export default About;
