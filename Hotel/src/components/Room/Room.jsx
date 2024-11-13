import React from 'react'
import style from './room.module.css';
import RoomCard from './RoomCard';
import data from './img/data'

function Room() {
    console.log(data)
    return <>
    <div className={style.room_outer_container}>
       <div className={style.room_heading}>
        <h2 className={style.room_title}>our <span>rooms</span></h2>
        <p> <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span> </p>
       </div>
        <div className={style.rooms_container}>
        {data.map((room,index)=>{
            return <RoomCard data={room} key={index}/>
        })}
        </div></div>
    </>
}

export default Room;