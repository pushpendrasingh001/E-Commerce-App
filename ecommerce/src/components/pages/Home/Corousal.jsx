import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroimage from '../../../assets/Home/hero/hero.png'
function Carousal() {
  const data=[

    {
      id:1,
  img:heroimage
},
{
  id:2,
img:heroimage
},   {
  id:3,
img:heroimage
},   {
  id:4,
img:heroimage
},   {
  id:5,
img:heroimage
},   {
  id:5,
img:heroimage
},

]

 var settings = {

    infinite:true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
 
    autoplaySpeed: 5000,
    
    
  };
  return(<>
  <div >
      <Slider {...settings}>
        
 {data.map((s)=>(

  <div key={s.id}>
<img src={s.img} />
  

   </div>


))}

      </Slider>
  </div>
  </>)

}

export default Carousal