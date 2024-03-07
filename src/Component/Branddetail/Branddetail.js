import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import globalState from '../Context'
import './Branddetail.css'
import { IoIosStar } from 'react-icons/io'
import Brand from '../Brand/Brand'
import { FaChevronRight } from 'react-icons/fa6'
import { MdErrorOutline } from 'react-icons/md'

const Branddetail = (props) => {
  const { state, dispatch } = useContext(globalState)
  const { brand } = useParams()


  const readmore = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  }
  console.log(state.Branddetail)

  const [brandarr, setBrandarr] = useState([])
  const [cararr, setCararr] = useState([])
  const [brandarr1, setBrandarr1] = useState([])
  const [brandarr2, setBrandarr2] = useState([])


  // brand and cars detaials logic here

  useEffect(() => {

    const a = state.Branddetail.filter((a) => {
      console.log(a.brand, brand)
      return a.brand === brand
    })
    setBrandarr(a)

    const b = state.Cars.filter((a) => {
      return a.brand === brand
    })

    setCararr(b)

    const c = state.Branddetail.filter((e) => {
      return e.brandtype === "famous" && e.brand !== brand
    })
    setBrandarr1(c)

    const d = state.Branddetail.filter((e) => {
      return e.brandtype == "midiumfam" && e.brand !== brand
    })
    setBrandarr2(d)

  }, [brand])

  // move to cars detail page

  const nav = useNavigate()

  const cardetail = (name) => {
    nav(`/cardetail/${name}`)
    console.log(name);
  }

  // move to brand detail page

  const branddetail = (brand) => {
    nav(`/branddetail/${brand}`)
  }

  return (
    <section className='branddetail-sec' key={brand}>
      <div className='branddetail-con'>
        <div className='branddetail-row1'>
          {
            brandarr.map((e, i) => {
              return <div key={i} style={state.readmore ? null : readmore}>
                <div className='branddetail-title'>
                  <h1>{e.branddetail.title}</h1>
                </div>
                <div>
                  <div className='branddetails'>
                    <p>{e.branddetail.detail} <a href="#">{e.branddetail.carhighlight}</a></p>
                    <h3>{e.branddetail.head1}</h3>
                    <p>{e.branddetail.detail1}</p>
                    <h3>{e.branddetail.head2}</h3>
                    <p>{e.branddetail.detail2}</p>
                    <h3>{e.branddetail.head3}</h3>
                    <p>{e.branddetail.detail3}</p>
                    <h3>{e.branddetail.head4}</h3>
                    <p>{e.branddetail.detail4}</p>
                    <h3>{e.branddetail.head5}</h3>
                    <p>{e.branddetail.detail5}</p>
                  </div>
                  <div className='brand-pricelist'>
                    <h1>{e.branddetail.pricelist}</h1>
                    <p>{e.branddetail.pricestart}</p>
                    <table>
                      <thead>
                        <th>MODEL</th>
                        <th>PRICE</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{e.branddetail.car1}</td>
                          <td>{e.branddetail.price1}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car2}</td>
                          <td>{e.branddetail.price2}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car3}</td>
                          <td>{e.branddetail.price3}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car4}</td>
                          <td>{e.branddetail.price4}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car5}</td>
                          <td>{e.branddetail.price5}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car6}</td>
                          <td>{e.branddetail.price6}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car7}</td>
                          <td>{e.branddetail.price7}</td>
                        </tr>
                        <tr>
                          <td>{e.branddetail.car8}</td>
                          <td>{e.branddetail.price8}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            })
          }
          <button onClick={() => dispatch({ type: "updatereadmore", payload: !state.readmore })}>{state.readmore ? "Collaps" : "ReadMore"}</button>
        </div>

        {/* cars display in brand order */}

        <div className='branddetail-row2'>
          <div className='branddetail-col1'>
            {
              brandarr.map((e, i) => {
                return <h1 key={i}>{e.branddetail.heading}</h1>
              })
            }

            {
              cararr.map((e, i) => {
                return e.type === "upcome" ?
                  <div className='car-col' key={i}>
                    <div className='car-card'>
                      <div className="carimage">
                        <img src={e.image} alt='no pic' onClick={() => cardetail(e.name)} />
                        <h3>Upcoming</h3>
                      </div>
                      <div className='car-details'>
                        <h1 onClick={() => cardetail(e.name)}>{e.name}<FaChevronRight /></h1>
                        <h3>{e.price} <span style={{ color: "#aaa" }}>Estimeted Price</span></h3>
                        <h3>{e.launch} <span style={{ color: "#aaa" }}>Estimeted launch</span></h3>
                        <span>{e.confidence} <span style={{ color: "black" }}>Low</span><MdErrorOutline /></span>
                      </div>
                    </div>
                  </div>
                  :
                  <div className='car-col' key={i}>
                    <div className='car-card'>
                      <div className="carimage">
                        <img src={e.image} alt='no pic' onClick={() => cardetail(e.name)} />
                      </div>
                      <div className='car-details'>
                        <h1 onClick={() => cardetail(e.name)}>{e.name}<FaChevronRight /></h1>
                        <p>{e.petroal}</p>
                        <h3>{e.price}</h3>
                        <p>{e.place}</p>
                        <button>{e.btn2}</button>
                      </div>
                      <div className='rating-btn'>
                        <div className='rating-icon'><IoIosStar /></div>
                        <div className='ratings'>{e.rating}<span>/5</span></div>
                        <div className='hrline'></div>
                        <div className='numofrating'>{e.numofrating}s</div>
                      </div>
                    </div>
                  </div>
              })
            }
          </div>

          {/* brands show in side */}

          <div className='branddetail-col2'>
            <h1>Similar Brands</h1>
            <div className='brand-colum'>
              {
                brandarr1.map((e, i) => {
                  return <div className='brand-col1' key={i}>
                    <div className='brand-card'>
                      <div className='brand-img' onClick={() => branddetail(e.brand)}>
                        <img src={e.image} alt='no pic'></img>
                      </div>
                      <div className='brand-titles' onClick={() => branddetail(e.brand)}>
                        <h3>{e.title}</h3>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
            <h1>Popular Brands</h1>
            <div className='brand-colum'>
              {
                brandarr2.map((e, i) => {
                  return <div className='brand-col1' key={i}>
                    <div className='brand-card'>
                      <div className='brand-img' onClick={() => branddetail(e.brand)}>
                        <img src={e.image} alt='no pic'></img>
                      </div>
                      <div className='brand-titles' onClick={() => branddetail(e.brand)}>
                        <h3>{e.title}</h3>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Branddetail
