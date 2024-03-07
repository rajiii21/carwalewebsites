import React, { useContext, useRef, useState } from 'react'
import './Banner.css'
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import globalState from '../Context';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const { state, dispatch } = useContext(globalState)
    const [isOpen, setOpen] = useState(false)
    const [isSelect, setSelect] = useState(false)
    const [searchitem, setSearchitem] = useState([])
    const [inputvalue, setInputvalue] = useState("")
    console.log(isOpen);
    console.log(searchitem)

    // open button

    const handle = () => {
        if (isOpen === false) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }

    // selecct button


    const handle1 = () => {

        if (isSelect === false) {
            setSelect(true)
        }
        else {
            setSelect(false)
        }
        if (isOpen === false) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }

    }


    //    search input box 

    const searchvalues = (e) => {
        setInputvalue(e.target.value)

        const searchfiltervalue = state.Cars.filter((e) => {
            return e.name.toLowerCase().includes(inputvalue.toLowerCase()) ? e.name : ""
        })

        setSearchitem(searchfiltervalue)
    }

    // move to cars details page
    
    const nav = useNavigate()
    const cardetail = (name) => {
        nav(`/cardetail/${name}`)
        console.log(name);
    }



    return (
        <section className='ban-sec'>
            <div className='ban-container'>
                <div className='head'>
                    <h1>FIND THE RIGHT CAR</h1>
                </div>
                <div className='ban-row'>
                    <div className='ban-input'>
                        {isSelect === false ? <div className='drop1'>

                            <div className='searchbox'>
                                <button onClick={handle} className='select-option'>
                                    New
                                    {
                                        isOpen ? <FaChevronDown /> : <FaChevronUp />
                                    }
                                </button>
                                {isOpen === true ? <button onClick={handle1} className='select-option1'>Used</button> : ""}
                                <IoSearchOutline className='seaicon' />
                                <input type="text" className='inputbox' value={inputvalue} onChange={searchvalues} placeholder='Select a New Car' />
                                <button className='search-btn'>Search</button>
                            </div>
                            <div className='new-detail'>
                                <div className="tata">
                                    <p><a href="#">tata</a></p>
                                </div>
                                <div className='new'>
                                    <p><a href='#' style={{ borderRight: "1px solid white", padding: "0 12px" }}>Help Me A Car</a></p>
                                    <p><a href='#' style={{ borderRight: "1px solid white", padding: "0 12px" }}>Find Me a New Car</a></p>
                                    <p><a href='#' style={{ padding: "0 11px" }}>Sell My Car</a></p>
                                </div>
                            </div>
                        </div> :
                            <div className='drop2'>
                                <div className='searchbox'>
                                    <button className='select-option' onClick={handle}>Used
                                        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
                                    </button>
                                    {isOpen === true ? <button onClick={handle1} className='select-option1'>New</button> : ""}
                                    <IoSearchOutline className='seaicon' />
                                    <input type="text" className='inputbox1' value={inputvalue} onChange={searchvalues} placeholder='City eg.Mumbai' />
                                    <button className='search-btn'>Search</button>
                                </div>
                                <div className="used-detail">
                                    <a href="#" style={{ borderRight: "1px solid white", padding: "0 12px" }}>Sell My Car</a>
                                    <a href="#" style={{ padding: "0 11px" }}>Get Instand Loan Deals</a>
                                </div>
                            </div>}
                    </div>
                    {
                        inputvalue.length > 0 && <div className='search-items'>
                            {searchitem.slice(0, 15).map((e, i) => {
                                return <div key={i} className='searchitem'>
                                    <IoMdTime />
                                    <p onClick={() => cardetail(e.name)}>{e.name}</p>
                                </div>
                            })
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default Banner
