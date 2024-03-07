import React, { useContext } from 'react'
import './Caramount.css'
import globalState from '../Context'
import { useNavigate } from 'react-router-dom'

const Caramount = () => {
    const { state, dispatch } = useContext(globalState)
    const nav=useNavigate()

    const caramount=(btn,price)=>{
        nav(`/filterprice/${btn}/${price}`)
        console.log(btn,price);
    }
    
    return (
        <section className='caramount-sec'>
            <div className='caramount-con'>
                <div className='caramount-title'>
                    <h1>Find The Cars Of Your Choice</h1>
                </div>
                <div className='caramountlist'>
                    <ul>    
                        <li><a href='#'>BUDGET</a></li>
                        <li><a href='#'>BODYTYPE</a></li>
                        <li><a href='#'>FUELTYPE</a></li>
                        <li><a hre1f='#'>TRANSMISSION</a></li>
                        <li><a href='#'>SEATING CAPACITY</a></li>
                    </ul>
                </div>
                <div className='caramount-row'>
                    {
                        state.Filterprice.map((e,i)=>{
                            console.log(e.price1,e.price)
                            return  <div className='caramount-col' key={i}>
                            <div className='caramount-card'>
                                <p onClick={()=>caramount(e.btn,e.price)}>{e.btn}</p>                                
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Caramount