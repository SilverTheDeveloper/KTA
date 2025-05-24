import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { secondSliderData } from "@/Data/LandingPage";
import "./SecondFadeSlider.scss"
function SecondFadeSlider() {
  const settings = {
    fade:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container SecondFadeSlider" >
      <Slider {...settings}>
        {
          secondSliderData.map((data,index)=>(
            <div className="sliderImg">
              <img src={data} key={index} />
            </div>
          ))
        }
      </Slider>

      <div className="slider-content">
        <div className="top-heading">CONNECT</div>
        <div className="heading">Get in Touch</div>
        <p>Looking for expert guidance on ceramic, stone, or surface care? Our team is ready to assist you with tailored solutions.</p>

        <div className="outline-button">
           Contact Us
        </div>
      </div>
    </div>
  );
}

export default SecondFadeSlider;
