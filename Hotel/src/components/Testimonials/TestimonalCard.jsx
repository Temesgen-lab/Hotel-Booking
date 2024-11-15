import React from "react";
import style from './testimonal.module.css';

import Rating from '@mui/material/Rating';

function TestimonalCard({image,comment,name,career}) {
    return <>
<div className={style.testimonal_box}>
  <Rating value={5} />
  <p className={style.comment}>{comment}</p>
  <div className={style.profile_box}>
    <img src={image} alt="image" className={style.profile} />
    <div className={style.personal_info}>
    <p className={style.name}>{name}</p>
    <p className={style.career}>{career}</p>
    </div>
  
  </div>
</div>

    </>
}

export default TestimonalCard;