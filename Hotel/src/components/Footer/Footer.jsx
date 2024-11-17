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
            <FacebookIcon />
            <WhatsAppIcon />
            <TelegramIcon />
            <XIcon />
            <LinkedInIcon />
         </div>
         <p className={style.copyright}>
               &copy; 2024 Hotel template | all rights reserved
         </p>
    </div>
    </>
}
export default Footer;