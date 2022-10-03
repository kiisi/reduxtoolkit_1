import React from 'react'
import './Pcard.css'

const Pcard = ({icon, title, body}) => {
  return (
    <div className="p-card">
        <img src={icon} alt="icon"/>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default Pcard