
import heroimage from '../../../assets/Home/hero/hero.png'
import iphone from '../../../assets/Home/hero/iphone.png'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal({ images }) {

  const defaultImages = [
    { id: 1, img: iphone },
    { id: 2, img: heroimage },
    { id: 3, img: heroimage },
    { id: 4, img: heroimage },
    { id: 5, img: heroimage },
  ];

  
  const data = images && images.length > 0 ? images : defaultImages;


  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((s) => (
          <div className="carousel-slide bg-red-100 w-[892px] h-[344px] relative" key={s.id}>
            <div className="absolute w-[892px] h-[344px]">
              <img className="w-full h-full object-cover" src={s.img} alt={`Slide ${s.id}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal;
