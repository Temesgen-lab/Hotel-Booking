import React from "react";
import datas from './img/data';
import FacilityCard from "./FacilityCard";
import style from './facility.module.css'

function Facility() 
{
return <>
<div className={style.facility_container}>
  <div className={style.facility_heading}>
      <span className={style.facility_sub_title}>our facilities</span>
      <h3 className={style.facility_title}>explore the hotel</h3>
      <p className={style.facility_desc}>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Consequuntur repellendus quos veritatis 
        hic expedita sint! Mollitia magni enim excepturi officia nulla ipsam perspiciatis! Optio
         obcaecati dicta at fugiat! Porro, deserunt!</p>
  </div>
<div className={style.facility_box}>
    {
        datas.map((data,index)=>{

     return <FacilityCard imgPath={data.img} key={index} facilityName={data.name}/>
        })
    }</div></div>
</>    
}

export default Facility;