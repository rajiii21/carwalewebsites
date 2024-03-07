import React, { useContext } from 'react'
import globalState from '../Context'
import './Brand.css'
import { useNavigate } from 'react-router-dom'
import Branddetail from '../Branddetail/Branddetail.js'
const Brand=()=>{

    const {state,dispatch}=useContext(globalState)
    const nav=useNavigate()

    //move to brand cars detail page

    const handle=(brand)=>{
       nav(`./branddetail/${brand}`)
    }
    
    console.log(handle);
    return(
        <section className='brand-sec'>
            <div className='brand-con'>
                <div className='head-title'>
                    <h1>All Brands</h1>
                </div>
                <div className='brand-row'>
                    {
                        state.Branddetail.map((e,i)=>{
                            console.log(e.brand)
                           return <div className='brand-col' key={i}>
                                <div className='brand-card'>
                                    <div className='brand-img' onClick={()=>handle(e.brand)}> 
                                        <img src={e.image} alt='no pic' className='brandimg'></img>
                                    </div>
                                    <div className='brand-title' onClick={()=>handle(e.brand)}>
                                        <h3>{e.title}</h3>
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
        
export default Brand