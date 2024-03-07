import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import globalState from "../Context";
import './Feature.css'
import { FaGalacticSenate, FaWhatsapp } from "react-icons/fa6";
import Cars from '../File.json'
import { useNavigate } from "react-router-dom";


const Feature = () => {

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };


  const { state, dispatch } = useContext(globalState)
  console.log(state.Cars);

  const [categorys, setCategory] = useState("TRENDING")
  const [istrend, setTrend] = useState(true)
  const [ispopular, setPopular] = useState(true)
  const [isupcome, setUpcome] = useState(true)

  const [arr1, setArr1] = useState([])
  const [arr2, setArr2] = useState([])
  const [arr3, setArr3] = useState([])


  useEffect(() => {

    // filter the Trending car

    const a = state.Cars.filter((e, i) => {
      return e.category === "Trending car"
    })

    setArr1(a)

    // filter the Popular car

    const b = state.Cars.filter((e, i) => {
      return e.category === "Popular car"
    })
    setArr2(b)

    // filter the Upcoming car

    const c = state.Cars.filter((e, i) => {
      return e.category === "Upcoming car"
    })
    setArr3(c)

    console.log(a, b, c)

  }, [])


  const trend = () => {
    setTrend(true)
    setPopular(false)
    setUpcome(false)
    setCategory("TRENDING")
  }

  const popular = () => {
    setTrend(false)
    setPopular(true)
    setUpcome(false)
    setCategory("POPULAR")
  }
  const upcome = () => {
    setTrend(false)
    setPopular(false)
    setUpcome(true)
    setCategory("UPCOMING")

  }


  // move to carsdetail page

  const nav = useNavigate()

  const cardetail = (name) => {
    nav(`/cardetail/${name}`)
    console.log(name);
  }



  return (
    <section className="feature-sec">
      <div className="feature-con">
        <div className="feature-title">
          <h1>Featured Cars</h1>
        </div>
        <div className="feature-row">
          <div className="list-cars">
            <ul>
              <li onClick={trend}>TRENDING{categorys === "TRENDING" ? <hr /> : ""}</li>
              <li onClick={popular}>POPULAR{categorys === "POPULAR" ? <hr /> : ""}</li>
              <li onClick={upcome}>UPCOMING{categorys === "UPCOMING" ? <hr /> : ""}</li>
            </ul>
          </div>

          <Slider {...settings}>
            {istrend === true ?
              arr1.map((e, i) => {
                console.log(e.category, e.name);
                return <div className="feature-col" key={i}>
                  <div className="feature-card">
                    <div onClick={() => cardetail(e.name)}>
                      <img src={e.image} alt="no pic" />
                    </div>
                    <div className="car-detail">
                      <h1 onClick={() => cardetail(e.name)}>{e.name}</h1>
                      <span className="span" >{e.price1}</span>
                      <span style={{ color: "#aaa" }}>{e.pricesuf}</span>
                      <h1>{e.place}</h1>
                      <button>{e.btn1}</button>
                    </div>
                  </div>
                </div>
              }) : ""
            }

            {ispopular === true ?
              arr2.map((e, i) => {
                console.log(e.category);
                return <div className="feature-col" key={i}>
                  <div className="feature-card">
                    <div onClick={() => cardetail(e.name)}>
                      <img src={e.image} alt="no pic" />
                    </div>
                    <div className="car-detail">
                      <h1 onClick={() => cardetail(e.name)}>{e.name}</h1>
                      <span className="span" >{e.price1}</span>
                      <span style={{ color: "#aaa" }}>{e.pricesuf}</span>
                      <h1>{e.place}</h1>
                      <button>{e.btn1}</button>
                    </div>
                  </div>
                </div>
              })
              : ""
            }                        
            {isupcome === true ?
              arr3.map((e, i) => {
                console.log(e.category);
                return <div className="feature-col" key={i}>
                  <div className="feature-card">
                    <div onClick={() => cardetail(e.name)}>
                      <img src={e.image} alt="no pic" />
                    </div>
                    <div className="car-detail">
                      <h1 onClick={() => cardetail(e.name)}>{e.name}</h1>
                      <span className="span" >{e.price1}</span>
                      <span style={{ color: "#aaa", fontSize: "14px" }}>{e.pricesuf1}</span>
                      <h1>{e.place} </h1>
                      <span className="span">{e.launch}</span>
                      <span style={{ color: "#aaa", fontSize: "11.7px" }}>{e.pricesuf2}</span>
                      <button><FaWhatsapp style={{ fontSize: "14px", margin: "3px" }} /> {e.btn1}</button>
                    </div>
                  </div>
                </div>
              }) : ""
            }
          </Slider>
        </div>
      </div>
    </section>
  );

}

export default Feature