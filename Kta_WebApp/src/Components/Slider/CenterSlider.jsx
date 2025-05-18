import React, { Component } from "react";
import Slider from "react-slick";
import materialOneImg from "@/assets/AboutPage/materialOne.jpg";
import materialTwoImg from "@/assets/AboutPage/materialTwo.jpg";
import materialThreeImg from "@/assets/AboutPage/materialThree.jpg";
import './CenterSlider.css';
function CenterSlider() {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 9000,

};
  return (
    <div id="centerSlider" className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={materialOneImg} alt="" />
        </div>
        <div>
          <img src={materialTwoImg} alt="" />
        </div>
        <div>
          <img src={materialOneImg} alt="" />
        </div>
        <div>
          <img src={materialThreeImg} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterSlider;
