import React from "react";
import style from './facility.module.css';


function FacilityCard({imgPath}) {
    return <>
         <div className={style.img_box}>
              <img src={imgPath} alt="" className={style.img} />
         </div>
    </>
}
export default FacilityCard;