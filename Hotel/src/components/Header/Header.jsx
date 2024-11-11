import React,{useState} from 'react';
import style from './header.module.css'
import logo from './img/hotel-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
const [isClicked , setIsClicked]=useState(false);

function clickHandler() {
  setIsClicked(prev => !prev);
}
  return (<div>
    <div className={style.header_outer_container}>
      <nav className={style.header_container}>
        <p className={style.menu_icon} onClick={clickHandler}> <MenuIcon /> </p>
        <div className={style.logo_box}>
         
        </div>
        <ul className={style.header_nav}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Rooms</li>
          <li>blog</li>
          <li>events</li>
          <li>contact</li>

        </ul>
        <button className={style.book_btn}>Book Now</button>
      </nav>
    </div>

    <div className={style.mobile_nav_container} style={{
      opacity:isClicked?1:0,
      pointerEvents:isClicked?'auto':'none',
      visibility:isClicked?'visible':'hidden'
    }}> 

<CloseIcon className={style.closeIcon} onClick={clickHandler}/>
    <ul className={style.mobile_nav}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Rooms</li>
          <li>blog</li>
          <li>events</li>
          <li>contact</li>
</ul>
    </div></div>

  )
}

export default Header
