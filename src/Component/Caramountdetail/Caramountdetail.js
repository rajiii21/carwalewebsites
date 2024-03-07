import React, { useContext, useEffect, useState } from 'react'
import './Caramountdetail.css'
import globalState from '../Context'
import { useNavigate, useParams } from 'react-router-dom'

const CaramountDetail=()=>{
    const {state,dispatch}=useContext(globalState)
    const {btn,price}=useParams()
    console.log(price);

    let a=btn
    let b=a.replace("Under","")
    console.log(b);

    let prices=b.replace("Lakh","")
    console.log(prices);


    const [filterarr,setFilterarr]=useState([])

    // filter the Price in order

    useEffect(()=>{
        const a=state.Cars.filter((e)=>{
            console.log(price,e.price2)
            return btn==="Luxury Cars" ? e.type!=="upcome" && e.price2 > price:e.type!=="upcome" && e.price2<=price
        })
        setFilterarr(a)

    },[prices])

   console.log(filterarr);
   

// move to cars details page

   const nav=useNavigate()
   const cardetail=(name)=>{
    nav(`/cardetail/${name}`)
    console.log(name);
  }

    return(
        <section>
            <div className='filterprice-con'>    
               <div className='filter-title'>
                    <h1>Best Cars under {prices} Lakh</h1>
                    {
                        prices==="Luxury Cars" ? <p>A luxury car is a fancy, high-end vehicle that comes with extra comfort and additional top-notch features, giving it a more premium feel to the end customer.</p>
                        :<p>Are you planning on buying a car under Rs. {prices} lakh? Well, we know that budget is one of the most crucial things while buying a car and with so many options available out there, it gets really difficult to find a good car which suits your pocket. Hence, we have put together a complete list of best cars under Rs. {prices} lakh.</p>
                    }
                    <a href="#">Readmore</a>
                </div>  
                <div className="totalcar">
                    <h3>{prices==="Luxury Cars" ? `${filterarr.length} ${prices}`:`${filterarr.length} Cars Under ${prices} Lakh`}</h3>
                </div>           
                
                <div className='filterprice-row'>          
                        {
                            filterarr.map((e,i)=>{
                                return <div className='filterprice-col' key={i}>
                                          <div className='filterprice-card'>
                                            <div className='filterprice-img'>
                                                <img src={e.image} alt='no picture' onClick={()=>cardetail(e.name)}/>
                                            </div>
                                            <div className="filterprice-detail">
                                                <h1 onClick={()=>cardetail(e.name)}>{e.name}</h1>
                                                <h3>{e.price1}</h3>
                                                <p>{e.place}</p>
                                                <button>{e.btn2}</button>
                                            </div>
                                           </div>
                                       </div>
                             })                    
                        }
                </div>  
            </div>
        </section>
    )
}

export default CaramountDetail