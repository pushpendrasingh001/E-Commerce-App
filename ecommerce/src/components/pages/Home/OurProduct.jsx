import React, { useEffect, useState } from 'react';

import leftarrow from '../../../assets/Home/leftarrow.svg';
import rightarrow from '../../../assets/Home/rightarrow.svg';

// Product Grid Component
const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to manage showing all products

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
              <p className="text-red-600 text-xl font-bold">${(product.price).toFixed(2)}</p>
              <p className="line-through text-gray-500">${(product.price * 10).toFixed(2)}</p>
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
const OurProduct = () => {
  return (
   
  <>
    <div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full md:w-[1170px] mx-auto'>
    
    {/* Title and Arrow Controls */}
    <div className="h-auto w-full shadow-lg">
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 font-bold text-lg">Our Products </h2>
          <h2 className="text-2xl font-bold text-gray-900">Explore Our Products</h2>
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

<ProductGrid/>
    </div>
  </div>
  </>
  );
};

export default OurProduct;
