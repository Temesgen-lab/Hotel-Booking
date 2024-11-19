import React from 'react'
import style from './room.module.css';
import Rating from '@mui/material/Rating';

function RoomCard({data}) {
    // console.log(type,price,rate,image)
    return (
<div className={style.card_container} >
   <div className={style.card_img_box}>
        <div className={style.img_content}>
            <p className={style.type}>{data.type}</p>
            <p> <Rating value={data.rate} precision={0.5} className={style.rate}
            sx={{
                "& .MuiRating-iconFilled": {
                  color: "orange", // Color for filled icons
                },
                "& .MuiRating-iconEmpty": {
                  color: "#FC9906", // Color for empty icons
                },
                "& .MuiRating-iconHover": {
                  color: "darkorange", // Color when hovered
                },
              }}
            /></p>
        </div>
       <div className={style.img_box}>
        <img src={data.image}  alt=''className={style.img} />
       </div>
   </div>
   <div className={style.price_box}>
    <p>{data.price}</p>
    <a href='#' >view details</a>
   </div>

   
</div>
    )
}

export default RoomCard;