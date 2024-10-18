import React, { useEffect, useState } from 'react';

import leftarrow from '../../../assets/Home/leftarrow.svg';
import rightarrow from '../../../assets/Home/rightarrow.svg';

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(countdown);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className='h-auto w-full shadow-lg'>
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 poppins-semibold text-lg">Today's</h2>
          <h2 className="text-2xl poppins-semibold text-gray-900">Flash Sales</h2>
        </span>
        <span className="flex mt-4 md:mt-0 space-x-4">
          {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
            <div key={index} className="text-center">
              <span className="block text-2xl md:text-3xl poppins-semibold text-gray-900">
                {timeLeft[unit]?.toString().padStart(2, '0') || '00'}
              </span>
              <span className="text-xs md:text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
            </div>
          ))}
        </span>
        <span className='flex items-center space-x-4'>
          <button>
            <img src={leftarrow} alt="Left arrow" />
          </button>
          <button>
            <img src={rightarrow} alt="Right arrow" />
          </button>
        </span>
      </div>
    </div>
  );
};

// Product Grid Component
const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); // New state to manage showing all products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products to show based on the showAll state
  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className='w-full md:w-[1170px] h-auto mt-16'>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative">
              <img src={product.image} alt={product.title} className="w-full h-32 object-contain rounded" />
              
            </div>
            <h2 className="text-lg md:text-xl poppins-semibold mt-2">{product.title}</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl font-bold">${(product.price ).toFixed(2)}</p>
              <p className="line-through text-gray-500">${(product.price)*(10).toFixed(2)}</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">({product.rating.count})</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)} // Toggle the showAll state
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition"
        >
          {showAll ? 'Show Less Products' : 'View All Products'} {/* Change button text based on state */}
        </button>
      </div>
    </div>
  );
};

// Flash Sales Section Component
const FlashSalesSection = () => {
  return (
    <div className='w-full h-auto pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px]'>
      <div className='w-full md:w-[1200px] mx-auto'>
        {/* Countdown Timer */}
        <CountdownTimer />
        
        {/* Product Grid */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default FlashSalesSection;
