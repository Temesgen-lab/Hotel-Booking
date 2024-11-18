import React,{useState,useEffect} from 'react';
import style from './header.module.css'
import logo from './img/hotel-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
const [isClicked , setIsClicked]=useState(false);

function clickHandler() {
  setIsClicked(prev => !prev);
}

useEffect(() => {
  if (isClicked) {
    // Disable scrolling when isClicked is true
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
  } else {
    // Enable scrolling when isClicked is false
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
  }

  // Cleanup the effect when the component unmounts or the state changes
  return () => {
    document.body.style.overflow = 'auto'; // Reset overflow to 'auto' on cleanup
  };
}, [isClicked]); 
  return (<div>
    <div className={style.header_outer_container}>
      <nav className={style.header_container}>
        <p className={style.menu_icon} onClick={clickHandler}> <MenuIcon /> </p>
        <div className={style.logo_box}>
         
        </div>
        <ul className={style.header_nav}>
          <li> <a href="#">Home</a>  </li>
          <li> <a href="#about">About</a></li>
         <li><a href="#rooms">Rooms</a></li>
           <li><a href="#facility">facilities</a></li>
          <li><a href="#testimonials">testimonials</a></li>
          <li><a href="#contact">contact</a></li>

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
    <li> <a href="#" onClick={clickHandler} className={style.link}>Home</a> </li>
          <li> <a href="#about" onClick={clickHandler} className={style.link}>About</a></li>
         <li><a href="#rooms" onClick={clickHandler} className={style.link}>Rooms</a></li>
           <li><a href="#facility" onClick={clickHandler} className={style.link}>facilities</a></li>
          <li><a href="#testimonials" onClick={clickHandler} className={style.link}>testimonials</a></li>
          <li><a href="#contact" onClick={clickHandler} className={style.link}>contact</a></li>

</ul>
    </div></div>

  )
}

export default Header
