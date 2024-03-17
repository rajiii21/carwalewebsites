import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import './Head.css'
import globalState from '../Context.js';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { CiShoppingTag } from "react-icons/ci";
import { FaKeycdn, FaRegNewspaper } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { FaRegClone } from "react-icons/fa6";
import { TbAlignBoxTopRight } from "react-icons/tb";
import { IoLanguageOutline } from "react-icons/io5";


const Header = () => {
    const { state, dispatch } = useContext(globalState)
    const [menu, setMenu] = useState(false)
    const nav = useNavigate()

    const homepagelogo = () => {
        nav('/carwalewebsites/')
    }


    // responsive nav bar when i click outside of navbar then the nav sec will close

    const burgerRef = useRef()


    useEffect(() => {
        const handler = (e) => {
            console.log(e.target)
            if (!burgerRef.current.contains(e.target)) {
                setMenu(false)
            }
        }

        document.addEventListener("click", handler)
    })


    return (

        // start of header Section
        <>
            <header className='header-sec'>
                <nav className='nav-sec' ref={burgerRef}>
                    <div className='burger-ico' onClick={() => setMenu(true)} >
                        < GiHamburgerMenu />
                    </div>
                    <div className='logo' onClick={homepagelogo}>
                        <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg' alt='no picuture' />
                    </div>
                    <ul className='list'>
                        <li><a href='#'>NEW CARS</a></li>
                        <li><a href='#'>USED CARS</a></li>
                        <li><a href='#'>REVIEWS & NEWS</a></li>
                    </ul>
                    <div className='icons'>
                        <div className='input-box'>
                            <input type='text' placeholder='Search' />
                        </div>
                        <IoSearchOutline className='search-ico' />
                        <div className='ico1'>
                            <IoLocationOutline />
                        </div>
                        <div className='ico2'>
                            <MdGTranslate />
                        </div>
                        <div className='ico3'>
                            <BsPersonCircle />
                        </div>
                    </div>
                </nav>
            </header>

            <div className='menu'>
                {menu === true ? <div className='menubar'>
                    <ul>
                        <li><RiHome2Line />Home</li>
                        <li><CiShoppingTag />New Cars</li>
                        <li><FaKeycdn />Used Cars</li>
                        <li><FaRegNewspaper />Reviews and News</li>
                        <li><CiDollar />Sell Cars</li>
                        <li><GoHeart />My Shortlist </li>
                        <li><FaRegClone />Car Loan</li>
                        <li><TbAlignBoxTopRight />Loan Against Car</li>
                        <li><IoLanguageOutline />Choose Language</li>
                    </ul>
                    <p>TOLL FREE NUMBER </p>
                    <h4>1800 2090 230</h4>
                    <div className='addimg'>
                        <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2' alt='no picture' />
                        <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2' alt='no picture' />
                    </div>
                </div> : ""
                }
            </div>
        </>

        // {/* end of header section */}

    )
}
export default Header