import React from 'react'
import './Ocard.css';

const Ocard = ({ bgImg, icon, iconText }) => {
  return (
      <div className="o-card">
        <img src={bgImg} alt="img"className="o-card-img"/>
        <div className="o-card-content">
          <img src={icon} alt="ship" />
          <p>{iconText}</p>
        </div>
      </div>
  )
}

export default Ocard