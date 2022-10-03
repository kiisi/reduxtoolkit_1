import React from 'react'
import Pcard from '../../../components/Cards/Pcard/Pcard'
import './Offersub.css'
import box from '../../../assets/box.png'
import secure from '../../../assets/protection.png'
import global from '../../../assets/worldwide.png'
import support from '../../../assets/support.png'

const Offersub = () => {
  return (
    <div className="max-wrapper offersub-wrapper">
      <div className="offersub">
        <div className="offersub-content">
          <Pcard icon={box} title="Home Delivery" body="Our road dispatchers makes sure that your package gets to your home without any hitches" />
          <Pcard icon={secure} title="Package Protection" body="Our package protection policy ensures that your package gets to you as it is from the point of delivery." />
          <Pcard icon={global} title="International Shipping" body="We are expert in shipping out products to every part of the world. Just buy and we ship." />
          <Pcard icon={support} title="24/7 Support" body="Customers' satisfaction is our utmost priority and concern, we care and value them so much." />
        </div>
      </div>
    </div>
  )
}

export default Offersub