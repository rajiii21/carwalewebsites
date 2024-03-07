import React, { useContext, useEffect, useState } from 'react'
import './Cardetail.css'
import globalState from '../Context'
import { useParams } from 'react-router-dom'
import { FaImages, FaRegFileVideo, FaRegStar, FaVideo, FaWhatsapp } from 'react-icons/fa6'
import { IoChevronBackOutline, IoColorPaletteOutline } from 'react-icons/io5'
import { RiPriceTag2Line, RiVideoFill } from "react-icons/ri";
import { PiEngineLight } from "react-icons/pi";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { CiCircleAlert, CiShuffle } from "react-icons/ci";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Cardetail = () => {

    const { state, dispatch } = useContext(globalState)

    const { name } = useParams()
    console.log(state.Cars);

    const [filtercar, setFiltercar] = useState([])


    useEffect(() => {

        // filter cars details

        const a = state.Cars.filter((e) => {
            console.log(e.name, name);
            return e.name === name
        })
        setFiltercar(a)
        console.log(a);

    }, [])



    return (
        <section className='cardetail-sec'>
            <div className='cardetail-con'>

                {/* cardetail heading  */}

                {
                    filtercar?.map((e, i) => {
                        return e.type === "upcome" ? <div key={i}>
                            <div className='addimg1'>
                                <img src={e.cardetails.addimg1}></img>
                            </div>
                            <div className='cardetail-title'>
                                <h1>{e.name}</h1>
                            </div>
                        </div>
                            :
                            <div key={i}>
                                <div className='addimg1'>
                                    <img src={e.cardetails.addimg1}></img>
                                </div>
                                <div className='cardetail-title'>
                                    <h1>{e.name}</h1>
                                </div>
                                <div className='carrating'>
                                    <Stack>
                                        <Rating name="half-rating" defaultValue={e.rating} precision={0.5} />
                                    </Stack>
                                    <p><a href="#">{e.rating} Ratings</a></p>
                                    <p><a href="#">Rate & Win</a></p>
                                </div>
                            </div>

                    })
                }
                <div className='cardetail-row1'>

                    {/* car detail image and price details*/}

                    {
                        filtercar.map((e, i) => {
                            return <>
                                <div className='cardetail-col' key={i}>
                                    <div className='cardetail-card'>
                                        <div className='cardetail-img'>
                                            <img src={e.image} alt='no picture' />
                                            <div className='cardetail-imgicon'>
                                                <span><IoColorPaletteOutline /></span>
                                                <p> Colors</p>
                                                <span><FaImages /> </span>
                                                <p>Images</p>
                                                <span><RiVideoFill /></span>
                                                <p>Videos</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* car variant select,price and offer  */}

                                {
                                    e.type === "upcome" ?
                                        <div className='cardetail-col1'>
                                            <div className='cardetailprice'>
                                                <h3>{e.minmaxprice}</h3>
                                                <p>Estimated Price</p>
                                            </div>
                                            <div className='carlaunch'>
                                                <h3>{e.launch}</h3>
                                                <p>Expected launch</p>
                                            </div>
                                            <div className='confidence'>
                                                <p>CarWale Confidence Low : <span>Low</span> <CiCircleAlert style={{ color: "goldenrod" }} /> </p>
                                            </div>
                                            <div className='caroffer-btn'>
                                                <p> <FaWhatsapp /> Get Launch Alert on WhatsApp</p>
                                            </div>
                                        </div>
                                        :
                                        <div className='cardetail-col'>
                                            <div className='cardetail-selectbox'>
                                                <div className='selectbox'>
                                                    <div>
                                                        <span>variant</span>
                                                        <p>Select a variant</p>
                                                    </div>
                                                    <div>
                                                        <IoChevronBackOutline />
                                                    </div>
                                                </div>
                                                <div className='selectbox'>
                                                    <div>
                                                        <span>city</span>
                                                        <p>Select a City</p>
                                                    </div>
                                                    <div>
                                                        <IoChevronBackOutline />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cardetail-prices'>
                                                <h3>{e.minmaxprice} <a href="#">{e.btn1}</a></h3>
                                                <p>Avg.Ex Showroom price</p>
                                                <span>Availbale only in Nexa showroom</span>
                                            </div>
                                            <div className='cardetail-emioff'>
                                                <div className='emioff'>
                                                    <p>Calculate Your EMI</p>
                                                    <span>EMI calculator</span>
                                                </div>
                                                <span className='emi-btn'>Get EMI offers</span>
                                            </div>
                                            <div className='off-btn'>
                                                <span>Get Yeasr-End Offers</span>
                                            </div>
                                        </div>
                                }
                            </>
                        })
                    }
                </div>

                <div className='cardetail-row2'>
                    {
                        filtercar?.map((e, i) => {
                            console.log(e.name)
                            return <div className='cardetails-col1' key={i}>
                                <h1>{e.name} Car Specifications</h1>

                                {/* car specifications */}

                                {
                                    e.type === "upcome" ?
                                        <div className='car-specification'>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Price</p>
                                                <h3>{e.price1}</h3>
                                            </div>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Engine</p>
                                                <h3>{e.cardetails.Engine}</h3>
                                            </div>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Fuel Type</p>
                                                <h3>{e.cardetails.Fueltype}</h3>
                                            </div>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Power and Torque</p>
                                                <h3>{e.cardetails.Powerandtorque}</h3>
                                            </div>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Body Style</p>
                                                <h3>{e.cardetails.bodystyle}</h3>
                                            </div>
                                            <div className='speciality'>
                                                <p><BsFuelPumpDiesel />Seating Capacity</p>
                                                <h3>{e.cardetails.Seatingcapacity}</h3>
                                            </div>
                                        </div>
                                        :
                                        e.cardetails.highprice === "price" ?
                                            <div className='car-specification'>
                                                <div className='speciality'>
                                                    <p><PiEngineLight />Engine</p>
                                                    <h3>{e.cardetails.Engine}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><BsFuelPumpDiesel />Fuel Type</p>
                                                    <h3>{e.cardetails.Fueltype}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><CiShuffle />Power and Torque</p>
                                                    <h3>{e.cardetails.Transmission}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><MdAirlineSeatReclineExtra />DriveTrain</p>
                                                    <h3>{e.cardetails.DriveTrain}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><MdAirlineSeatReclineExtra />Acceleration</p>
                                                    <h3>{e.cardetails.Acceleration}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><MdAirlineSeatReclineExtra />Top Speed</p>
                                                    <h3>{e.price1}</h3>
                                                </div>
                                            </div>
                                            :
                                            <div className='car-specification'>
                                                <div className='speciality'>
                                                    <p><RiPriceTag2Line />price</p>
                                                    <h3>{e.price1}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><RiPriceTag2Line />Mileage</p>
                                                    <h3>{e.cardetails.mileage}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><PiEngineLight />Engine</p>
                                                    <h3>{e.cardetails.Engine}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><BsFuelPumpDiesel />Fuel Type</p>
                                                    <h3>{e.cardetails.Fueltype}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><CiShuffle />Transmission</p>
                                                    <h3>{e.cardetails.Transmission}</h3>
                                                </div>
                                                <div className='speciality'>
                                                    <p><MdAirlineSeatReclineExtra />seating capacity</p>
                                                    <h3>{e.cardetails.Seatingcapacity}</h3>
                                                </div>
                                            </div>
                                }

                                {/* car summary here*/}

                                <div className='car-summary'>
                                    <h1>All new {e.name} Cars Summary</h1>
                                    <div>
                                        <h4>Latest Update</h4>
                                        <p>New {e.name} Cars Launched Price announced</p>
                                        <p>Price</p>
                                        <a href="#">ReadMore</a>
                                    </div>
                                </div>

                                {/* variant cars price here */}

                                {e.type === "upcome" ?
                                    <div className='car-price'>
                                        <h1>{e.name}</h1>
                                        <p>Following details are tentative.</p>
                                        <div className='pricehead'>
                                            <ul>
                                                <li>Variants</li>
                                                <li>Specifications</li>
                                            </ul>
                                            <hr></hr>
                                            <div className='carnames'>
                                                <span>{e.cardetails.variants.variant1}</span>
                                                <p>{e.cardetails.variants.detail1}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='car-price'>
                                        <h1>{e.name} Price</h1>
                                        <p className='pricepara'>Tata Nexon price for base model start and end with {e.minmaxprice} and Fronx price for {e.cardetails.variant} variants is listed below.</p>
                                        <p className='filterpara'>Filter By Fuel Type & Transmission</p>
                                        <ul className='price-ul'>
                                            <li>Manual</li>
                                            <li>Automatic (AMT)</li>
                                            <li>Automatic (TC)</li>
                                        </ul>
                                        <div className='pricehead'>
                                            <ul>
                                                <li className='variant-head1'>Versions</li>
                                                <li className='variant-head2'>Ex-Showroom price</li>
                                                <li style={{textAlign: "end" }} className='variant-head3'>Compare</li>
                                            </ul>
                                            <hr></hr>
                                            <>
                                                {e.cardetails.variantdetails === 1 ? <div className='pricedetail'>
                                                    <div className='carname'>
                                                        <span>{e.cardetails.variants.variant1}</span>
                                                        <p>{e.cardetails.variants.detail1}</p>
                                                    </div>
                                                    <div className='prices'>
                                                        <h3>{e.cardetails.variants.price1}</h3>
                                                    </div>
                                                    <div className='comparepricecar'>
                                                        <div className='addtocompare'>
                                                            <p>Add to compare</p>
                                                            <span></span>
                                                        </div>

                                                        <div>
                                                            <a href='#'>show price in my city</a>
                                                            <span>|</span>
                                                            <a href='#'>Get Offers</a>
                                                        </div>
                                                    </div>
                                                </div> : ""
                                                }
                                               
                                            </>

                                            <>
                                                {e.cardetails.variantdetails === 2 ? <div><div className='pricedetail'>
                                                    <div className='carname'>
                                                        <span>{e.cardetails.variants.variant1}</span>
                                                        <p>{e.cardetails.variants.detail1}</p>
                                                    </div>
                                                    <div className='prices'>
                                                        <h3>{e.cardetails.variants.price1}</h3>
                                                    </div>
                                                    <div className='comparepricecar'>
                                                        <div className='addtocompare'>
                                                            <p>Add to compare</p>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <a href='#'>show price in my city</a>
                                                            <span>|</span>
                                                            <a href='#'>Get Offers</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant2}</span>
                                                            <p>{e.cardetails.variants.detail2}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price2}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    : ""
                                                }
                                                
                                            </>
                                            <>
                                                {e.cardetails.variantdetails === 3 ? <div><div className='pricedetail'>
                                                    <div className='carname'>
                                                        <span>{e.cardetails.variants.variant1}</span>
                                                        <p>{e.cardetails.variants.detail1}</p>
                                                    </div>
                                                    <div className='prices'>
                                                        <h3>{e.cardetails.variants.price1}</h3>
                                                    </div>
                                                    <div className='comparepricecar'>
                                                        <div className='addtocompare'>
                                                            <p>Add to compare</p>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <a href='#'>show price in my city</a>
                                                            <span>|</span>
                                                            <a href='#'>Get Offers</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant2}</span>
                                                            <p>{e.cardetails.variants.detail2}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price2}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant3}</span>
                                                            <p>{e.cardetails.variants.detail3}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price3}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    : ""
                                                }
                                                
                                            </>
                                            <>
                                                {e.cardetails.variantdetails === 4 ? <div><div className='pricedetail'>
                                                    <div className='carname'>
                                                        <span>{e.cardetails.variants.variant1}</span>
                                                        <p>{e.cardetails.variants.detail1}</p>
                                                    </div>
                                                    <div className='prices'>
                                                        <h3>{e.cardetails.variants.price1}</h3>
                                                    </div>
                                                    <div className='comparepricecar'>
                                                        <div className='addtocompare'>
                                                            <p>Add to compare</p>
                                                            <span></span>
                                                        </div>
                                                        <div>
                                                            <a href='#'>show price in my city</a>
                                                            <span>|</span>
                                                            <a href='#'>Get Offers</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant2}</span>
                                                            <p>{e.cardetails.variants.detail2}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price2}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant3}</span>
                                                            <p>{e.cardetails.variants.detail3}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price3}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className='pricedetail'>
                                                        <div className='carname'>
                                                            <span>{e.cardetails.variants.variant4}</span>
                                                            <p>{e.cardetails.variants.detail4}</p>
                                                        </div>
                                                        <div className='prices'>
                                                            <h3>{e.cardetails.variants.price4}</h3>
                                                        </div>
                                                        <div className='comparepricecar'>
                                                            <div className='addtocompare'>
                                                                <p>Add to compare</p>
                                                                <span></span>
                                                            </div>
                                                            <div>
                                                                <a href='#'>show price in my city</a>
                                                                <span>|</span>
                                                                <a href='#'>Get Offers</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    : ""
                                                }
                                                
                                            </>

                                            {
                                                e.cardetails.variant > 4 ? <div>
                                                    <div className='hr'><hr></hr></div>
                                                    <div className='viewbtn'>
                                                        <a href="#"> View More Variants</a>
                                                    </div>
                                                </div> : ""
                                            }
                                        </div>
                                    </div>
                                }

                                {/* cars brochure download */}

                                <div className='download-brochure'>
                                    <div className='brochure-svg'>
                                        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/download-2.svg"></img>
                                    </div>
                                    <div className='brochure-head'>
                                        <h2>{e.name} 2024 Brochure</h2>
                                    </div>
                                    <div className='brochure-btn'>
                                        <a href="#">Download Creta Brochure</a>
                                    </div>
                                </div>


                                {/* cars Mileage sec here */}
                                {
                                    <div className='car-mileagesec'>
                                        <h1>{e.name} Mileage</h1>
                                        <p>{e.name} claimed by ARAI is {e.cardetails.mileage}</p>
                                        <table>
                                            <thead>
                                                <th>Fuel Type</th>
                                                <th>Transmission</th>
                                                <th>ARAI Mileage</th>
                                            </thead>
                                            {
                                                e.type === "upcome" ?
                                                    <tbody>
                                                        <tr>
                                                            <td>{e.cardetails.fueltype.type1}</td>
                                                            <td>{e.cardetails.transmission.trans1}</td>
                                                            <td>{e.cardetails.ARImileage.mileage1}</td>
                                                        </tr>
                                                    </tbody> :


                                                    <tbody>
                                                        {
                                                            e.cardetails.mileagedetail === 4 ?
                                                                <>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type2}</td>
                                                                        <td>{e.cardetails.transmission.trans2}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage2}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type3}</td>
                                                                        <td>{e.cardetails.transmission.trans3}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage3}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type4}</td>
                                                                        <td>{e.cardetails.transmission.trans4}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage4}</td>
                                                                    </tr>
                                                                </> : ""
                                                        }

                                                        {
                                                            e.cardetails.mileagedetail === 3 ?
                                                                <>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type2}</td>
                                                                        <td>{e.cardetails.transmission.trans2}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage2}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type3}</td>
                                                                        <td>{e.cardetails.transmission.trans3}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage3}</td>
                                                                    </tr>

                                                                </> : ""
                                                        }
                                                        {
                                                            e.cardetails.mileagedetail === 2 ?
                                                                <>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type2}</td>
                                                                        <td>{e.cardetails.transmission.trans2}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage2}</td>
                                                                    </tr>

                                                                </> : ""
                                                        }
                                                        {
                                                            e.cardetails.mileagedetail === 1 ?
                                                                <>
                                                                    <tr>
                                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                                    </tr>

                                                                </> : ""
                                                        }
                                                    </tbody>
                                            }
                                            {
                                                e.cardetails.mileagedetail === 3 ? <tbody>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type2}</td>
                                                        <td>{e.cardetails.transmission.trans2}</td>
                                                        <td>{e.cardetails.ARImileage.mileage2}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type3}</td>
                                                        <td>{e.cardetails.transmission.trans3}</td>
                                                        <td>{e.cardetails.ARImileage.mileage3}</td>
                                                    </tr>
                                                </tbody> : ""
                                            }
                                            {
                                                e.cardetails.mileagedetail === 2 ? <tbody>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type2}</td>
                                                        <td>{e.cardetails.transmission.trans2}</td>
                                                        <td>{e.cardetails.ARImileage.mileage2}</td>
                                                    </tr>

                                                </tbody> : ""
                                            }
                                            {
                                                e.cardetails.mileagedetail === 1 ? <tbody>
                                                    <tr>
                                                        <td>{e.cardetails.fueltype.type1}</td>
                                                        <td>{e.cardetails.transmission.trans1}</td>
                                                        <td>{e.cardetails.ARImileage.mileage1}</td>
                                                    </tr>

                                                </tbody> : ""
                                            }

                                        </table>
                                    </div>
                                }

                                {/* car image gallery here */}

                                <div className='gallery-sec'>
                                    <h1>{e.name} Images</h1>
                                    {
                                        e.cardetails.img === 1 ?
                                            <div className='carimg-gallery'>
                                                <div className='carimg1'>
                                                    <img src={e.cardetails.img1} alt='car img' loading='lazy'></img>
                                                </div>
                                            </div>
                                            :
                                            <div className='carimg-gallery'>
                                                <div className='carimg1'>
                                                    <img src={e.cardetails.img1} alt='car img' loading='lazy'></img>
                                                </div>
                                                <div className='carimg2'>
                                                    <img src={e.cardetails.img2} alt='car img' loading='lazy'></img>
                                                </div>
                                                <div className='carimg3'>
                                                    <img src={e.cardetails.img3} alt='car img' loading='lazy'></img>
                                                </div>
                                                <div className='carimg4'>
                                                    <img src={e.cardetails.img4} alt='car img' loading='lazy'></img>
                                                </div>
                                                <div className='carimg5'>
                                                    <img src={e.cardetails.img5} alt='car img' loading='lazy'></img>
                                                </div>
                                                <div className='carimg6'>
                                                    <img src={e.cardetails.img6} alt='car img' loading='lazy'></img>
                                                </div>
                                            </div>
                                    }
                                </div>

                            </div>
                        })
                    }

                    {/* start of side colum */}


                    <div className='cardetails-col2'>
                        {
                            filtercar?.map((e, i) => {
                                return <div key={i}>
                                    <div className='addimg2'>
                                        <img src={e.cardetails.addimg2}></img>
                                    </div>
                                    <div className='getbestdeal'>
                                        <div className='getbestdeal-offer'>
                                            <div className='bestdeal-img' >
                                                <img src='https://imgd.aeplcdn.com/0X0/cw/static/icons/6f6f6f/dealer-96.svg?q=80' alt='handshake image' loading='lazy'></img>
                                            </div>
                                            <p className='bestdeal-para'>Get in touch with Authorized Hyundai Dealership on call for best buying options like:</p>
                                            <span>
                                                <p>Doorstep Demo</p>
                                                <p>Offers & Discounts</p>
                                            </span>
                                            <span>
                                                <p>Lowest EMI</p>
                                                <p>Exchange Benefits</p>
                                            </span>
                                            <div className='getbestdeal-btn'>
                                                <a href="#">Get Best Deal</a>
                                            </div>
                                        </div>
                                    </div>


                                    {/* cars price in india */}

                                    <div className='prices-india'>
                                        <h1>{e.name} Prices In india</h1>
                                        <table>
                                            <thead>
                                                <th>City </th>
                                                <th>on-Roads Prices</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    e.type === "upcome" ?
                                                        <>
                                                            <tr>
                                                                <td><a href="#">Mumbai</a></td>
                                                                <td>{e.price1}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">Banglore</a></td>
                                                                <td>{e.price1}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">Delhi</a></td>
                                                                <td>{e.price1}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">Pune</a></td>
                                                                <td>{e.price1}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2} style={{ textAlign: "center", borderBottom: "0" }}><a href="#">View More Cities</a></td>
                                                            </tr>
                                                        </>
                                                        :
                                                        <>
                                                            <tr>
                                                                <td><a href="#">{e.cardetails.cityprice.city1}</a></td>
                                                                <td>{e.cardetails.cityprice.price1}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">{e.cardetails.cityprice.city2}</a></td>
                                                                <td>{e.cardetails.cityprice.price2}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">{e.cardetails.cityprice.city3}</a></td>
                                                                <td>{e.cardetails.cityprice.price3}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="#">{e.cardetails.cityprice.city4}</a></td>
                                                                <td>{e.cardetails.cityprice.price4}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2} style={{ textAlign: "center", borderBottom: "0" }}><a href="#">View More Cities</a></td>
                                                            </tr>
                                                        </>
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* cars buyers tools */}

                                    <div className='carbuyer-tool'>
                                        <div className='buyertools'>
                                            <div className='buyer-img'>
                                                <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/car-loans-02.svg'></img>
                                            </div>
                                            <div>
                                                <h4>Instand Car Loan </h4>
                                                <p>Apply and Get Best Car Loan offers within maxpriceinute</p>
                                            </div>
                                        </div>
                                        <div className='buyertools'>
                                            <div className='buyer-img'>
                                                <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/locate-dealer.svg'></img>                                     </div>
                                            <div>
                                                <h4>Locate Dealers</h4>
                                                <p> Locate {e.name} Dealers</p>
                                            </div>
                                        </div>
                                        <div className='buyertools'>
                                            <div className='buyer-img'>
                                                <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg'></img>                                     </div>
                                            <div>
                                                <h4>{e.name} Cars</h4>
                                                <p>Explore other {e.name} Cars </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* add image */}

                                    <div className='addimg3'>
                                        <img src={e.cardetails.addimg3} alt="add image" loading='lazy'></img>
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cardetail