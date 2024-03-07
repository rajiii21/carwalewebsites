import React, { useContext, useState, useEffect } from 'react'
import globalState from '../Context'
import './Comparecar.css'
import Comparecars from '../Comparecars/Comparcars.js'
import { FaChevronDown, FaChevronUp, FaSearchengin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Comparing = () => {
    const { state, dispatch } = useContext(globalState)
    const [openpopup, setOpenpopup] = useState(false)
    const [icon, setIcon] = useState(null)
    const [iconarr, setIcoarr] = useState([])
    const [comparearr, setComparearr] = useState([])
    const [carid, setCarid] = useState()


    // slice a brands array for popup window show only six brands

    useEffect(() => {
        const array = state.Branddetail.slice(0, 6)
        setComparearr(array)
    }, [])


    // when i click handleicon it shows a brand in ordered

    const handleicon = (id, title) => {

        const b = state.Cars.filter((e) => {
            return e.brand === title && e.type != "upcome"
        })

        const filtercar = b.slice(0, 3)
        setIcoarr(filtercar)


        // accordian logic

        if (icon === id) {
            return setIcon(null)
        }
        setIcon(id)


    }
    console.log(state.Comparecar)

    // the popup window open

    const handleopen = (id) => {
        setOpenpopup(true)
        console.log("rJ")

        setCarid(id)
    }

    // the popup window  close

    const popupclose = () => {
        console.log("closebtn")
        setOpenpopup(false)
    }



    const carnames = (cardetails, carname, id) => {
        console.log(cardetails, carname, id)

        // when i click select car that time show a popup and then select cars logic here

        const arr = state.Cars.filter((e, i) => {
            if (e.name === carname) {
                if (carid === 1) {
                    dispatch({ type: "updatecarid1", payload: state.carid1 = e.id })
                    dispatch({ type: "updatecarname1", payload: state.carname1 = e.name })
                    dispatch({ type: "updatecarprice1", payload: state.carprice1 = e.price1 })
                    dispatch({ type: "updatecarengine1", payload: state.carengine1 = e.Engine })

                }
                else if (carid === 2) {
                    dispatch({ type: "updatecarid2", payload: state.carid2 = e.id })
                    dispatch({ type: "updatecarname2", payload: state.carname2 = e.name })
                    dispatch({ type: "updatecarprice2", payload: state.carprice2 = e.price1 })
                    dispatch({ type: "updatecarengine2", payload: state.carengine2 = e.Engine })

                }
            }
            return e.name === carname
        })

        // add a new Object items in comparecar array of Object

        const cardetail = state.Comparecar.map((e, i) => {
            console.log(e.id, carid)
            return e.id === carid && e.compareboo === false ? { ...e, compareboo: e.compareboo = true, carsdetail: arr } : e
        })
        dispatch({ type: 'updateComparecar', payload: cardetail })


        // when i selct car that time the popup is closed

        popupclose()

        console.log("cardetails")
    }
    console.log(state.Comparecar)

    const handleclose=(id)=>{
          if(id===1){
            dispatch({ type: "updatecarid2", payload: state.carid1 =""})
            dispatch({ type: "updatecarname2", payload: state.carname1 = "" })
            dispatch({ type: "updatecarprice2", payload: state.carprice1 = "" })
            dispatch({ type: "updatecarengine2", payload: state.carengine1 = ""})
          }
          else{
            dispatch({ type: "updatecarid2", payload: state.carid2 = "" })
            dispatch({ type: "updatecarname2", payload: state.carname2 = "" })
            dispatch({ type: "updatecarprice2", payload: state.carprice2 = ""})
            dispatch({ type: "updatecarengine2", payload: state.carengine2 = ""})
          }

          const cardetail = state.Comparecar.map((e, i) => {
            console.log(e.id, id)
            return e.id === id && e.compareboo === true ? { ...e, compareboo: e.compareboo = false} : e
        })
        dispatch({ type: 'updateComparecar', payload: cardetail })

        
    }
     
      
    const nav=useNavigate()

    const comparecar=()=>{
        nav('./comparedetail')
    }

    return (
        <section className='compare-sec'>
            <div className='compare-con'>
                <div className='compare-title'>
                    <h1>Compare Cars</h1>
                </div>
                <div className='compare-row'>
                    {
                        state.Comparecar.map((e, i) => {
                            console.log(e.id);
                            return e.compareboo === false ? <div className='compare-col' key={i}>
                                <img src={e.image} alt='no picture' onClick={() => handleopen(e.id)}></img>
                                <button onClick={() => handleopen(e.id)}>{e.btn}</button>
                            </div> :
                                e.carsdetail?.map((a, i) => {
                                    return <div className='compare-col1' key={i}>
                                        <IoClose onClick={()=>handleclose(e.id)} />
                                        <img src={a.image} />
                                        <h2>{a.name}</h2>
                                        <h3>{a.price1}</h3>
                                        <p>{a.place}</p>
                                    </div>
                                })
                        })
                    }
                    {
                        openpopup === true ? <div className='popup'>
                            <div className='popupdetails'>
                                <div className='popup-cars'>
                                    <div className='popup-title'>
                                        <h1>Select Your Brand Model</h1>
                                        <IoClose onClick={popupclose} />
                                    </div>
                                    <FaSearchengin className='searchicon' /><input type='text' placeholder='Type to Select Brand or Model'></input>
                                </div>

                                {/* popup details */}

                                <div className='showbrands'>
                                    {/* accordian summary */}
                                    {
                                        comparearr.map((e, i) => {
                                            console.log(e.icon);
                                            return <div key={i}>
                                                <div className='comparebrands'>
                                                    <div className='compareimg' onClick={() => handleicon(e.id, e.title)} >
                                                        <div style={{ display: "flex" }}>
                                                            <img src={e.image} ></img>
                                                            <p>{e.title}</p>
                                                        </div>
                                                        <div>{icon === e.id ? <FaChevronUp /> : <FaChevronDown />}</div>
                                                    </div>

                                                    {/* accordian detail */}

                                                    {
                                                        icon === e.id && iconarr.map((a, i) => {
                                                            return a.brand === e.title ? <div className='brand-accordian' key={i} >
                                                                <p onClick={() => carnames(a, a.name, a.id)}>{a.name}</p>
                                                            </div> : ""
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        })

                                    }
                                </div>
                            </div>
                        </div> : ""
                    }
                    <span className='Vsicon'>Vs</span>
                </div>
                <div className='compare-btn' >
                    <button onClick={comparecar}>Compare</button>
                </div>
            </div>
        </section>
    )
}

export default Comparing