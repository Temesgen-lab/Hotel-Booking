import React from 'react'
import style from './room.module.css';
import img from './room1.jpg';

function Room() {
    return (
<div className={style.card_container} >
   <div className={style.card_img_box}>
        {/* <div className={style.img_content}>
            <p>type</p>
            <p>rate</p>
        </div> */}
       <div className={style.img_box}>
        <img src={img}  alt=''className={style.img} />
       </div>
   </div>
   <div className={style.price_box}>
    <p>price</p>
    <a href='#' >view details</a>
   </div>
</div>
    )
}

export default Room;