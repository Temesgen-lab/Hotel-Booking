import React from 'react';
import style from './header.module.css'
import logo from './img/hotel-logo.png'


function Header() {

  return (
    <div className={style.header_outer_container}>
      <nav className={style.header_container}>

        <div className={style.logo_box}>
          <img src={logo} alt='hotel - logo' className={style.logo} />
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
  )
}

export default Header
