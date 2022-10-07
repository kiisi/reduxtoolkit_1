import React from 'react'
import './Connect.css'
import { ReactComponent as Intersection } from '../../../assets/Intersection-2.svg'
import { ReactComponent as Intersect } from '../../../assets/Intersection-1.svg'

const Connect = () => {
  return (
    <div className="max-wrapper connect-wrapper" id="contact">
      <div className="connect">
        <div className="connect-intersection">
          <Intersection />
        </div>
        <div className="connect-intersect">
          <Intersect />
        </div>
        <div className="connect-content">
          <div className="connect-content-line"></div>
          <h1 className="connect-content-main">Let's Work Together</h1>
          <div className="connect-content-sub">Contact us by clicking on the button below</div>
          <div className="connect-content-btn">
            <div className="btn-c">                                
            <a href="mailto:speedwaysinternationaldelivery@aol.com">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect