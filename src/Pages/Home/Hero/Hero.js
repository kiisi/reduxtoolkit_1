import React, { useState, useRef } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import './Hero.css'
import Swal from 'sweetalert2'
import Loader from '../../../components/loader/Loader'
const Hero = () => {

  const [input, setInput] = useState("")
  const [trackingInfo, setTrackingInfo] = useState("")
  const [loading, setLoading] = useState(false)
  let tdRef = useRef()

  // "https://swid.herokuapp.com/"
  function submit() {
    let td = tdRef.current

    setLoading(true)
    fetch("https://swid.herokuapp.com/swid-tracking-info", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ trackingId: input })
    })
      .then(response => response.json())
      .then(data => {
        if (data.package.length <= 0) {
          setLoading(false)
          return Swal.fire({
            title: "Warning",
            text: "Invalid Tracking ID",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: "#0777A1",
          });
        }
        td.classList.add("show")
        setTrackingInfo(data)
        console.log(data)
      })
      .then(() => setLoading(false))
      .catch(error => {
        setTrackingInfo(false)
        setLoading(false)
        Swal.fire({
          title: "Warning",
          text: "Invalid Tracking ID",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#0777A1",
        });
        console.log(error)
      })
  }


  function cancel() {
    let td = tdRef.current
    td.classList.remove("show")
  }
  return (
    <>
      <div className="trackeroutput-wrapper" ref={tdRef} >
        <div className="trackeroutput">
          <div className="trackeroutput-close" onClick={cancel}>
            <span className="material-icons">
              close
            </span>
          </div>

          <div className="r-card">
            <h1>Receiver's Info</h1>
            {
              trackingInfo.package && trackingInfo.package.map((pkg, i) => {
                return (<div className="r-card-content" key={i}>
                  <div className="r-card-content-row">
                    <div className="r-card-content-row-icon"><span className="material-icons">vpn_key</span></div>
                    <div className="r-card-content-row-text">{pkg._id}</div>
                  </div>
                  <div className="r-card-content-row">
                    <div className="r-card-content-row-icon"><span className="material-icons">perm_identity</span></div>
                    <div className="r-card-content-row-text">{pkg.receiver_name}</div>
                  </div>
                  <div className="r-card-content-row">
                    <div className="r-card-content-row-icon"><span className="material-icons">home</span></div>
                    <div className="r-card-content-row-text">{pkg.receiver_address}</div>
                  </div>
                  <div className="r-card-content-row">
                    <div className="r-card-content-row-icon"><span className="material-icons">mail</span></div>
                    <div className="r-card-content-row-text">{pkg.receiver_email}</div>
                  </div>
                  <div className="r-card-content-row">
                    <div className="r-card-content-row-icon"><span className="material-icons">phone</span></div>
                    <div className="r-card-content-row-text">{pkg.receiver_number}</div>
                  </div>
                </div>)
              })
            }
          </div>

          {
            trackingInfo.package && trackingInfo.package[0].shipment_progress.length <= 0 ? <h1 className="no-shipment-progress">No Shipment Progress</h1>
              :
              
              trackingInfo.package && trackingInfo.package[0].shipment_progress.map((shp, i) => {
                return (
                  <div className="s-card"key={i}>
                    <h1>Shipment Progress</h1>
                    <div className="s-card-content">
                      <div className="s-card-content-row">
                        <div className="s-card-content-row-icon"><span className="material-icons">trending_up</span></div>
                        <div className="s-card-content-row-text">{shp.status}</div>
                      </div>
                      <div className="s-card-content-row">
                        <div className="s-card-content-row-icon"><span className="material-icons">calendar_month</span></div>
                        <div className="s-card-content-row-text">{shp.date}</div>
                      </div>
                      <div className="s-card-content-row">
                        <div className="s-card-content-row-icon"><span className="material-icons">schedule</span></div>
                        <div className="s-card-content-row-text">{shp.time}</div>
                      </div>
                      <div className="s-card-content-row">
                        <div className="s-card-content-row-icon"><span className="material-icons">location_on</span></div>
                        <div className="s-card-content-row-text">{shp.location}</div>
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>

      {/*
    
  */}


      <div className="max-wrapper hero-wrapper">
        <section className="hero">
          <Navbar />
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1>Fastest, Safest And Best Delivery For Your Goods</h1>
              <p>The best choice for the delivery of your packages that require speed and security during delivery and has many other features</p>
            </div>
            <div className="hero-btn-wrapper">
              <div className="hero-btn">
                <div className="hero-btn-input">
                  <span className="material-icons hero-btn-search">
                    search
                  </span>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="trackingId" placeholder="Track Your Package" />
                </div>
                {loading ? <div className="hero-btn-action"><Loader /></div> : <div className="hero-btn-action" onClick={submit}>Track Package</div>}
              </div>
            </div>
            <div className="hero-sub">
              <div className="hero-sub-text">
                <h1>3000+</h1>
                <p>People <br /> trust us</p>
              </div>
              <div className="hero-sub-text">
                <h1>65k</h1>
                <p>Delivery <br /> was successful</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero