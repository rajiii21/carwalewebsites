import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer=()=>{

    return(

        // start of footer section

        <footer className='footer-sec'>
             <div className='footer-img'>
                <ul>
                    <li><a href='#'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg' alt='no picture'/></a></li>
                    <li><a href='#'><img src='https://d5x4wettsjecf.cloudfront.net/images4/cartrade_logo_238-48.png' alt='no picture'/></a></li>
                    <li><a href='#'><img src='https://imgd.aeplcdn.com/0x0/bw/static/icons/logo/bikewale-logo-new-header.svg?v=30092022' alt='no picture'/></a></li>
                    <li><a href='#'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/logos/absure-logo.svg?q=80' alt='no picture'/></a></li>
                </ul>
            </div>
            <hr/>

            <div className='footer-row'>
                <div className='footer-col1'>
                     <ul className='list-1'>
                        <li>Language: English  <a href='#'>हिंदी</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Careers</a></li>
                     </ul>
                     <ul className='list-2'>
                        <li><a href='#'>Terms & Conditon</a></li>
                        <li><a href='#'>Advertise</a></li>
                     </ul>
                </div>
                <div className='footer-col'>
                    <p className='para'>Download Mobile App</p>
                    <ul>
                        <li><a href='#'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2' alt='no picture'/></a></li>
                        <li><a href='#'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2' alt='no picture'/></a></li>
                    </ul>
                    <p>Connect with us</p>
                    <div className='social-icon'>
                        <a href='#'><FaFacebook /></a>
                        <a href='#'><FaInstagram/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaYoutube/></a>
                        <a href='#'><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </footer>

        // end of footer section
    )
}

export default Footer