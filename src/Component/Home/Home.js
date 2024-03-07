import React from 'react'
import  Banner from "../Banner/Banner"
import Feature from "../Featuresec/Feature"
import Brand from "../Brand/Brand"
import  Caramount from "../Caramount/Caramount"
import Comparing  from "../Comparecar/Comparecar"


const Home=()=>{

    return<div>
          <Banner/>
          <Feature/>
          <Brand/>
          <Caramount/>
          <Comparing/>
         </div>
}


export default Home








// {amount === true ? <div><span style={{ display: "flex", width: "12px", height: "12px", backgroundColor: "white", transform: "rotate", position: "absolute", top: "64px", left: "0", margin: "0 788px", transform: "rotate(45deg)" }}></span>
// <div style={{ width: "400px", height: "229px", backgroundColor: "white", margin: "-24px 625px", position: "relative", zIndex: "999" }}>
//     <span style={{ width: "328px", height: "4px", backgroundColor: "#00afa0", display: "block", position: "absolute", right: "36px", top: "42px", bottom: "0" }}></span>
//     <button style={{ width: "26px", height: "26px", borderRadius: "50%", border: "none", backgroundColor: "#00afa0", position: "absolute", top: "29px", left: "339px", bottom: "0" }}></button>
//     <button style={{ width: "26px", height: "26px", borderRadius: "50%", border: "none", backgroundColor: "#00afa0", position: "absolute", left: "35px", top: "28px" }}></button>
//     <div className='qty-increase'>
//         <div className='min-box'>
//             <input placeholder='Min' value={count} onClick={h} name="min" className="min-input"></input>
//             <div className='qty-btns1'>
//                 <p><button onClick={minbtn}><GoTriangleUp /></button></p>
//                 <p><button onClick={maxbtn}><GoTriangleDown /></button></p>
//             </div>
//         </div>
//         <div className='max-box'>
//             <input placeholder='Max' className="max-input"></input>
//             <div className='qty-btns2'>
//                 <p><button><GoTriangleUp /></button></p>
//                 <p><button><GoTriangleDown /></button></p>
//             </div>
//         </div>
//     </div>
// </div></div> : ""}


    // budgetamount detail

    // const [amount, setAmount] = useState(false)

    // const budgetamount = () => {
    //     if (amount === false) {
    //         setAmount(true)
    //     }
    //     else {
    //         setAmount(false)
    //     }
    // }


    // min max button in less then 20L

    // const [count, setCount] = useState(0)
    // const h = (e) => {
    //     if (e.target.name === "min") {
    //         setCount(e.target.value)
    //     }
    // }


    // const minbtn = () => {
        //      {state.count===0 ? state.count=state.count:state.count=state.count+1}
    // }
    // dispatch({type:"updatecount",payload:minbtn})

    // min max button in less then 20L
    // const maxbtn = () => {
        // {state.count===0? state.count=state.count+1: "" }
    // }
    // dispatch({type:"updatecount",paylomad:maxbtn})