import React, { useContext } from 'react'
import globalState from '../Context'
import './Comparecardetail.css'
import { IoClose } from 'react-icons/io5'
import { type } from '@testing-library/user-event/dist/type'
import Comparing from '../Comparecar/Comparecar'
import { Link, useNavigate } from 'react-router-dom'


const Comparecardetail = () => {
    const { state, dispatch } = useContext(globalState)
    console.log(state.Comparecar)
    const nav=useNavigate()


    const handleclose=(id)=>{
        if(id===1){
            dispatch({ type: "updatecarid2", payload: state.carid1 =""})
            dispatch({ type: "updatecarname2", payload: state.carname1 = "" })
            dispatch({ type: "updatecarprice2", payload: state.carprice1 = "" })
            dispatch({ type: "updatecarengine2", payload: state.carengine1 = ""})
        }
        else {
            dispatch({ type: "updatecarid2", payload: state.carid2 =""})
            dispatch({ type: "updatecarname2", payload: state.carname2 = "" })
            dispatch({ type: "updatecarprice2", payload: state.carprice2 = "" })
            dispatch({ type: "updatecarengine2", payload: state.carengine2 = ""})
       
        
        }
        const a=state.Comparecar.map((e,i)=>{
            return e.id===id ? e.compareboo===true ? {...e,compareboo:e.compareboo=false}:{...e,compareboo:e.compareboo=true}:e
        })
        dispatch({type:"updateComparecar",payload:a})
        nav('/')

    }
    return (
        <section className='comparecardetail-sec'>
            <div className='comparecardetail-con'>
                <div className='comparecardetail-title'>
                    <h1>{state.carname1}</h1>
                    <p>&</p>
                    <h1>{state.carname2}</h1>
                </div>
                <div className='title-para'>
                    <p>Carwale Brings you Comparision of {state.carname1} and {state.carname2}.
                        The {state.carname1} price is {state.carprice1} and {state.carname2} price is {state.carprice2}.
                        The {state.carname1} is available in {state.carengine1} engine with 1 fuel option and {state.carname2}
                        is available in {state.carengine2} engine with 1 fuel option...</p>
                </div>
                <div className='compare-row'>
                    {
                        state.Comparecar.map((e, i) => {
                            console.log(e.id);
                            return e.compareboo === false ? <div className='compare-col' key={i}>
                                <img src={e.image} alt='no picture'></img>
                                <button>{e.btn}</button>
                            </div> :
                                e.carsdetail?.map((a, i) => {
                                    return <div className='compare-col1' key={i}>
                                        <IoClose onClick={()=>handleclose(e.id)}/>
                                        <img src={a.image} />
                                        <h2>{a.name}</h2>
                                        <h3>{a.price1}</h3>
                                        <p>{a.place}</p>
                                    </div>
                                })
                        })
                    }
                    <span className='Vs-icon'>Vs</span>
                </div>
                <div className='comparecardetail-feature'>
                    <ul>
                        <li>SPECIFICATIONS</li>
                        <li>FEATURES</li>
                        <li>BROCHURE</li>
                        <li>EXPERT OPINION</li>
                        <li>COLORS</li>
                    </ul>
                    <div>
                        <input type='text' placeholder='Search here'></input>
                    </div>
                </div>
                <div className='comparecardetail-row'>

                    <div className='main-heading'>
                        <p>Specifications & Finance</p>
                    </div>
                    <div className='sub-heading1'>
                        <p>Engine & Transmission</p>
                    </div>
                    <div className='comparecardetail-col1'>
                        <div className='comparedetail-col'>
                            <div className='comparecardetails'>
                                <div className='cardetail-head'>
                                    <h4>Engine</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Engine Type</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Fuel Type</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Max Power (bhp & rpm)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Max Torque (Nm & rpm)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Mileage (ARAI) (kmpl)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Driving Range (km)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Drive Train</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Transmission</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Emission Standard</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                            </div>
                            {

                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 1 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Engine}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.enginetype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Fueltype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.maxpower}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Maxtorque}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.mileage}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.drivingrange}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.DriveTrain}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Transmission}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.EmissionStandard}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                            {

                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 2 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Engine}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.enginetype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Fueltype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.maxpower}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Maxtorque}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.mileage}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.drivingrange}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.DriveTrain}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Transmission}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.EmissionStandard}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                        </div>
                        <div className='sub-heading2'>
                            <p>Dimensions & Weight</p>
                        </div>

                        <div className='comparedetail-col'>
                            <div className='comparecardetails'>
                                <div className='cardetail-head'>
                                    <h4>Length(mm)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Width(mm)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Height(mm)</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Wheelbase</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Ground Clearance</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                            </div>
                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 1 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.length}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.weight}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.height}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.wheelbase}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.groundclearance}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 2 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.length}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.weight}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.height}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.wheelbase}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.groundclearance}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                        </div>

                        <div className='sub-heading3'>
                            <p>Capacity</p>
                        </div>

                        <div className='comparedetail-col'>
                            <div className='comparecardetails'>
                                <div className='cardetail-head'>
                                    <h4>Doors</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Seating Capacity</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>No of Seating rows</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Bootspace</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Fuel Tank Capacity</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                            </div>
                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 2 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.doors}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.Seatingcapacity}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.noofrows}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.bootspace}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.fueltankcapacity}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 2 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.doors}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.   Seatingcapacity}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.noofrows}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.bootspace}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.fueltankcapacity}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }
                        </div>

                        <div className='sub-heading4'>
                            <p>Suspensions,Breaks,Steering&yres</p>
                        </div>
                        <div className='comparedetail-col'>
                            <div className='comparecardetails'>
                                <div className='cardetail-head'>
                                    <h4>Front Suspension</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Rear Suspension</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Front Break Type</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Minimum Turning Radius</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Steering Type</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Wheels</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Spare Wheel</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Front Tyres</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                                <div className='cardetail-head'>
                                    <h4>Rear Tyres</h4>
                                    <a href='#'>(Know More)</a>
                                </div>
                            </div>
                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 1 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontsuspension}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.rearsuspension}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontbraketype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.minimumradius}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.steeringtype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.wheels}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.sparewheel}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontyres}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.reartyres}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }

                            {
                                state.Comparecar.map((e, i) => {
                                    return e.carsdetail.map((a, i) => {
                                        return e.id === 2 ? <div className='comparecardetails'>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontsuspension}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.rearsuspension}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontbraketype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.minimumradius}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.steeringtype}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.wheels}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.sparewheel}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.frontyres}</p>
                                            </div>
                                            <div className='heading-details'>
                                                <p>{a.cardetails.reartyres}</p>
                                            </div>
                                        </div> : ""
                                    })
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparecardetail