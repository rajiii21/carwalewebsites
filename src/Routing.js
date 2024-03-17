import React, { Suspense, lazy, useReducer } from "react";
import { initialstate, reducer } from "./Component/Reducer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import globalState from "./Component/Context.js";

const Home=lazy(()=> import ("./Component/Home/Home.js"));
const Branddetail =lazy(()=>import("./Component/Branddetail/Branddetail.js"));
const Header =lazy(()=>import("./Component/Header/Head.js"));
const CaramountDetail =lazy(()=>import("./Component/Caramountdetail/Caramountdetail.js"))
const Cardetail =lazy(()=>import( "./Component/Cardetails/Cardetail.js"))
const Comparecardetail =lazy(()=>import("./Component/Comparecardetail/Comparecardetail.js"))
const Comparing=lazy(()=>import( "./Component/Comparecar/Comparecar.js"))
const Footer =lazy(()=>import("./Component/Footer/Footer.js"))

const Routing=()=>{
     const [state,dispatch]=useReducer(reducer,initialstate)
     console.log(state,dispatch);
     
     // const [loading,setLoading]=useState(true)
     
     // useEffect(()=>{
     //      setTimeout(()=>{
     //        setLoading(false)
     //      },5000)
     //  },[])
    
     

     return(
        <globalState.Provider value={{state,dispatch}}>
              <BrowserRouter>
                  <Header/>
                   <Routes>
                        <Route path="/carwalewebsites/" element={<Suspense fallback={<div>loading...</div>}><Home/></Suspense>}></Route>
                        <Route path="/branddetail/:brand" element={<Suspense fallback={<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>loading...</div>}><Branddetail/></Suspense>}></Route>
                        <Route path="/filterprice/:btn/:price" element={<Suspense fallback={<div>loading...</div>}><CaramountDetail/></Suspense>}></Route>
                        <Route path="/cardetail/:name" element={<Suspense fallback={<div>loading...</div>}><Cardetail/></Suspense>}/>
                        <Route path="/comparedetail" element={<Suspense fallback={<div>loading...</div>}><Comparecardetail/></Suspense>}/>
                        <Route path="/comparing" element={<Suspense fallback={<div>loading...</div>}><Comparing/></Suspense>}/>
                   </Routes>
                   <Footer/>
              </BrowserRouter>
        </globalState.Provider>
     )
}

export default Routing