import React from "react";
import style from './facility.module.css';


function FacilityCard({imgPath,facilityName}) {
    return <>
         <div className={style.img_box}>
            <div className={style.content_box}>
                <h3 className={style.content}>{facilityName}</h3>
                <p className={style.content_desc}>Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit.sit amet consectetur. </p>
            </div>
              <img src={imgPath} alt="" className={style.img} />
         </div>
    </>
}
export default FacilityCard;