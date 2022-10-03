import React from 'react'
import './Offer.css'
import Ocard from '../../../components/Cards/Ocard/Ocard'
import shipIcon from '../../../assets/ship.png'
import shipImg from '../../../assets/ship.jpg'
import roadIcon from '../../../assets/road.png'
import roadImg from '../../../assets/road.jpg'
import planeIcon from '../../../assets/plane.png'
import planeImg from '../../../assets/airplane.jpg'

const Offer = () => {
  return (
    <div className="max-wrapper offer-wrapper">
        <div className="offer">
            <div className="offer-header">
                <h1>What We Offer</h1>
                <div></div>
                <p>One of the best courier and delivery services worldwide</p>
            </div>
            <div className="offer-gallery">
                <Ocard bgImg={shipImg} icon={shipIcon} iconText="Water Transportation"/>
                <Ocard bgImg={planeImg} icon={planeIcon} iconText="Air Transportation"/>
                <Ocard bgImg={roadImg} icon={roadIcon} iconText="Land Transportation"/>
            </div>
        </div>
    </div>
  )
}

export default Offer