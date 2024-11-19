import React from 'react'
import style from './contact.module.css'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {
    return <>
       <div className={style.contact_outer_container} id='contact'>
        <div className={style.contact_heading}>
        <h1 className={style.contact_title}>
            contact <span>us</span>
        </h1>
    <p className={style.contact_desc}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Enim, suscipit doloremque hic eius officia ut inventore sapiente quasi nobis? Repudiandae 
cum quidem quisquam quam odit numquam.
    </p></div>

    <div className={style.contact_container}>
        <form action="">
            <input type="text"  placeholder='Name'/>
            <input type="text"  placeholder='Email'/>
            <input type="text" placeholder='Phone'/>
            <input type="text" placeholder='Address' />
            <textarea name="" id="" placeholder='Message'></textarea>
            <button type='submit'>send message</button>
        </form>
        <div className={style.contact_right}>
              <div className={style.address_box}>
                <HomeIcon className={style.contact_icon}/>
                <div>
                <p className={style.right_heading}>address :</p>
                <p className={style.right_desc}>1000 lorem ,new ipsum</p></div>
              </div>
              <div className={style.email_box}>
                <EmailIcon className={style.contact_icon}/>
                <div>
         <p className={style.right_heading}>email address :</p>
         <p className={style.right_desc}>hello@example.com</p></div>
              </div>
              <div className={style.phone_box}>
                <PhoneIcon className={style.contact_icon}/>
                <div>
                <p className={style.right_heading}>phone no :</p>
                <p className={style.right_desc}>+123456789</p></div>
              </div>
        </div>
    </div>
       </div>
    </>
}
export default Contact;