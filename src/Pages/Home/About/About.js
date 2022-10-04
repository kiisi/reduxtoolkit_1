import React from 'react'
import './About.css'
import deliveryimg from '../../../assets/delivery-2.png'

const About = () => {
  return (
    <div className="max-wrapper about-wrapper">
        <div className="about">
            <div className="about-content">
                <h1>About Us</h1>
                <p>Urban Logistics Delivery Services is one of the leading providers of courier services, sea freight and air freight services in the world. Our primary focus is to ensure that our customers receive their items at the desired destination at the desired time.</p>
                <p>We proud ourselves so high as one of the best delivery company in the world, due to international recognitions and awards we have gotten so far.</p>
            </div>
            <div className="about-img">
                <img src={deliveryimg} alt="delivery-img"/>
            </div>
        </div>
    </div>
  )
}

export default About