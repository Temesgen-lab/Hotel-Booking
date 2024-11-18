import React from 'react';
import style from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return <>
    <div className={style.footer_container}>
         <div className={style.footer_icon}>
           <a href="#"> <FacebookIcon className={style.icon}/></a>
           <a href="#"> <WhatsAppIcon className={style.icon}/></a>
           <a href="#"><TelegramIcon className={style.icon}/></a>
           <a href="#"><XIcon className={style.icon}/></a>
           <a href="#"><LinkedInIcon className={style.icon}/></a>
         </div>
         <p className={style.copyright}>
               &copy; 2024 Hotel template | all rights reserved
         </p>
    </div>
    </>
}
export default Footer;