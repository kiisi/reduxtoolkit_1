import React from 'react'
import './Footer.css'
const Footer = () => {
    let date = new Date();
  return (
    <div className="max-wrapper">
      <div className="footer">Speedway International Movers Delivery Company And Security Service &copy; {date.getFullYear()} </div>
    </div>
  )
}

export default Footer