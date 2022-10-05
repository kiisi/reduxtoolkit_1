import React from 'react'
import './Testimony.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avater1 from '../../../assets/avatar1.jpg'
import avater2 from '../../../assets/avatar2.jpg'
import avater3 from '../../../assets/avatar3.jpg'

const Testimony = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };
    return (
        <div className="testimony-wrapper">
            <div className="testimony">
                <Slider {...settings}>
                    <div className="testimony-slide">
                        <div className="testimony-avatar">
                            <img src={avater1} alt="avatar" />
                        </div>
                        <div className="testimony-content"><p>"Great services i got from Speedway International Movers Delivery Company And Security Service has been a great joy for me and my family. I will surely tell the good news to my friends too."</p></div>
                        <div className="testimony-author">Laura Thomas</div>
                    </div>
                    <div className="testimony-slide">
                        <div className="testimony-avatar">
                            <img src={avater2} alt="avatar" />
                        </div>
                        <div className="testimony-content"><p>"Their customer relation approach is second to none. Timely and swift delivery of my package is surprising and i will always choose Speedway International Movers Delivery Company And Security Service for my delivery services."</p></div>
                        <div className="testimony-author">Savannah Hubbard</div>
                    </div>
                    <div className="testimony-slide">
                        <div className="testimony-avatar">
                            <img src={avater3} alt="avatar" />
                        </div>
                        <div className="testimony-content"><p>"The package protection policy ensured that my package gets to me untampered and without any breakage of damages. I humbly recommend Speedway International Movers Delivery Company And Security Service for maximum and satisfactory delivery services."</p></div>
                        <div className="testimony-author">Robert Smith</div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimony