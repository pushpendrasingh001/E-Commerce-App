import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../../assets/fevicon logo.png';

function AboutCorousal() {
  const data = [
    {
      name: 'Pushpendra Singh',
      img: logo,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: logo,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: logo,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: logo,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    },
    {
      name: 'Pushpendra Singh',
      img: logo,
      review: 'Welcome to Book Haven, where words come alive! Our online bookstore is a sanctuary.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className='mt-6 w-[96%] m-[2%] items-center relative'>
      <Slider {...settings}>
        {data.map((s, index) => (
          <div key={index} className='h-[450px] bg-lime-50 text-black mx-4 my-4'> 
            <div className='h-56 rounded-t-xl bg-indigo-50 flex justify-center items-center'>
              <img src={s.img} alt={s.name} className='rounded-full h-44 w-44' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-1'>
              <p className='text-xl font-semibold'>{s.name}</p>
              <p className="text-center">{s.review}</p>
              <div className='flex flex-row gap-5 justify-center pt-5'>
                <button className="btn-circle">
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </button>
                <button className="btn-circle">
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                      <path
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                  </span>
                </button>
                <button className="btn-circle">
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.6 37.7-55.6 76.6V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48 87.8-48 94.0 0 111.1 61.9 111.1 142.3V448z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AboutCorousal;
