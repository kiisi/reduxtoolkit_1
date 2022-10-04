import React, {useState} from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import './Hero.css'
const Hero = () => {

  const [input, setInput] = useState("")
// "https://swid.herokuapp.com/"
  function submit(){
    fetch("https://swid.herokuapp.com/swid-tracking-info",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({trackingId: input})
    })
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  return (
    <div className="max-wrapper hero-wrapper">
      <section className="hero">
        <Navbar />
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>Fastest, Safest and best delivery for your goods</h1>
            <p>The best choice for the delivery of your packages that require speed and security during delivery and has many other features</p>
          </div>
          <div className="hero-btn-wrapper">
            <div className="hero-btn">
              <div className="hero-btn-input">
                <span className="material-icons hero-btn-search">
                  search
                </span>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" name="trackingId" placeholder="Track Your Package"/>
              </div>
              <div className="hero-btn-action" onClick={()=> submit()}>Track Package</div>
            </div>
          </div>
          <div className="hero-sub">
            <div className="hero-sub-text">
              <h1>3000+</h1>
              <p>People <br/> trust us</p>
            </div>
            <div className="hero-sub-text">
              <h1>65k</h1>
              <p>Delivery <br/> was successful</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero