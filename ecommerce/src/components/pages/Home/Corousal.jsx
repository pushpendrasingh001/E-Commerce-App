

import iphone from '../../../assets/Home/hero/iphone.png'
import electronic from '../../../assets/Home/hero/electronic.png'
import men from '../../../assets/Home/hero/men.png'
import women from '../../../assets/Home/hero/womens.png'
import personalcare from '../../../assets/Home/hero/personalcare.png'
import kids from '../../../assets/Home/hero/kids.png'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {

  const data = [
    { id: 1, img: iphone, title:' Premium iPhone Accessories and Gadgets',about:'Upto 10% off Voucher  ',buy:'Shop Now'},
    { id: 2, img: kids,about:'Start at just ₹299 ' ,title:' Colorful Clothing for Happy Kids',buy:'Shop Now' },
    { id: 3, img: electronic ,about:'Upto 80% off electronics and assesories' , title:' Premium Gadgets and Electronics',buy:'Shop Now'},
    { id: 4, img: men ,about:'Start at just ₹399 Your favourite brand' , title:' Elevating Mens Fashion and Accessories',buy:'Shop Now'},
    { id: 5, img: women ,about:'Start at just ₹299  '  , title:' Premium Fashion and Beauty for Her',buy:'Shop Now'},
    { id: 6, img: personalcare ,about:'Start at just ₹99  ', title:' Nourish Your Body, Refresh Your Soul',buy:'Shop Now'},
 
  ];
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
          <div className="carousel-slide bg-black relative w-[80%] md:w-[892px] md:h-[344px] h-[250px] mx-auto" key={s.id}>
            <div className="absolute flex justify-end items-end w-full h-full">
              <div className="flex flex-col items-end">
                <img className="w-[250px]  h-[200px] md:w-[350px] md:h-[300px] object-top" src={s.img} alt={s.title} />
              </div>
            </div>
            <p className="text-white mt-[30px] md:mt-[60px] ml-[20px] md:ml-[70px] md:w-[320px] w-[300px] h-[100px] poppins-semibold text-xl md:text-2xl">{s.title}</p>
            <p className='text-white ml-[20px] md:ml-[70px] poppins-regular text-lg md:text-xl w-[250px] md:w-[280px]'>{s.about}</p>
            <button className="text-white mt-[20px] hover:scale-110 md:mt-[70px] ml-[20px] md:ml-[70px] cursor-pointer underline poppins-regular text-lg md:text-xl absolute">{s.buy}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal;
