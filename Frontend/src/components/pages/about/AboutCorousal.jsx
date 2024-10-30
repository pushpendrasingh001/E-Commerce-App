import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../../assets/fevicon logo.png';
import pic from '../../../assets/about/pic.png';
import pic2 from '../../../assets/about/pic2.png';
import pic3 from '../../../assets/about/pic3.png';
import pic4 from '../../../assets/about/pic4.png';
import pic5 from '../../../assets/about/pic5.png';
import instagram from '../../../assets/about/instagram.svg'
import gmail from '../../../assets/about/gmail.svg'
import linkedin from '../../../assets/about/linkedin.svg'
function AboutCorousal() {
  const data = [
    {
      name: 'Pushpendra Singh',
      img: pic,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: pic2,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: pic3,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: pic4,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: pic5,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    }
  ];

  var settings = {
    dots: true,
    infinite:true,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return(
  <>
  <div className='mt-6 w-[96%] m-[2%]  items-center '>
      <Slider {...settings}>
        
 {data.map((s)=>(
<div className='bg-red-100 h-[500px]  text-black rounded-xl'>
  <div className=' h-56 rounded-t-xl bg-lime-50 flex justify-center items-center '>
<img src={s.img} className='object-fit-top w-[150px] h-[220px]'/>
  </div>
  <div className='flex flex-col justify-center mt-[50px] items-center gap-4 p-1'> 
<p className='text-xl font-semibold'>{s.name}</p>
<p className=" text-center">{s.review}</p>
<div className='flex flex-row gap-5 w-[200px] mt-[50px] justify-evenly'>
<div>
<button className="h-7 w-7 " >
  <img src={instagram} alt="" />
</button>
</div>

 <div> <button className="h-7 w-7 ">
<img src={gmail} alt="" />
</button>
</div>

<div>  <button className="h-7 w-7">
<img src={linkedin} alt="" />
</button>
</div>
   </div>

  </div>
</div>
))}

 </Slider>
  </div>

  </>)

}

export default AboutCorousal;
