import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./heroBanner.scss";
import { CaretLeft, CaretRight } from "phosphor-react";

const HeroBanner = () => {
  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CaretRight />,
    prevArrow: <CaretLeft />,
  };
  return (
    <section className="hero-banner">
      <Slider {...sliderSetting}>
        <div className="slider">
          <img
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBiYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="slider">
          <img
            src="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGVsZWN0cm9uaWNzJTIwYmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="slider">
          <img
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGVsZWN0cm9uaWNzJTIwYmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
};

export default HeroBanner;
