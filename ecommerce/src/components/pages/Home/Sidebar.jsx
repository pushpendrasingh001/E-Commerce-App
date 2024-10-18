import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); 
  const dropdownRef = useRef(null); 
  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);};
  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full md:w-[217px] mt-8 hidden lg:block h-auto">
      <div className="flex">
        <div className="border-r-2 h-auto w-full lg:w-[217px]">
          <ul className='poppins-medium'>
           
            <li
              className="relative bg-transparent py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center"
              onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center">
                Men's Fashion<span className='ml-12'>&gt;</span>
              </span>

             
              {dropdownOpen === 'men' && (
                <div
                  ref={dropdownRef}
                  className="absolute w-auto  bg-[#E5E7EB] rounded-md ml-[200px] mt-[190px] md:mt-[128px] z-50 p-4"
                >
            <ul className='poppins-medium flex flex-col gap-1'>
             <a href="/"><li className='hover:scale-105'>T-Shirt</li></a>
             <a href="/"><li className='hover:scale-105'>Shirt</li></a>
             <a href="/"><li className='hover:scale-105'>Jeans</li></a>
             <a href="/"><li className='hover:scale-105'>Trousers</li></a>
             <a href="/"><li className='hover:scale-105'>Shoes</li></a>
            </ul>
                 
                 
                </div>
              )}
            </li>

            
            <li
              className="relative bg-transparent py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center"
              onMouseEnter={() => handleMouseEnter('women')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center">
                Women's Fashion<span className='ml-6'>&gt;</span>
              </span>

              
              {dropdownOpen === 'women' && (
                <div
                  ref={dropdownRef}
                      className="absolute w-auto  bg-[#E5E7EB] rounded-md ml-[200px] mt-[190px] md:mt-[128px] z-50 p-4"
                >
            <ul className='poppins-medium flex flex-col gap-1 '>
             
              <a  href="/"><li className='hover:scale-105  ' >Saree</li></a>
              <a  href="/"><li className='hover:scale-105' >Kurti</li></a>
              <a  href="/"><li className='hover:scale-105' >Jeans </li></a>
              <a  href="/"><li className='hover:scale-105' >Western</li></a>
              <a  href="/"><li className='hover:scale-105' >Footwear</li></a>
            </ul>
                </div>
              )}
            </li>

            
            <li className="py-2 px-4  hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Electronics
            </li>
            <li className="py-2 px-4  hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Home & Lifestyle
            </li>
            <li className="py-2 px-4 hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Medicine
            </li>
            <li className="py-2 px-4 hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Sports & Outdoor
            </li>
            <li className="py-2 px-4 hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Groceries & Pet
            </li>
            <li className="py-2 px-4 hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Health & Beauty
            </li>
            <li className="py-2 px-4 hover:scale-105 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
              Baby & Toys
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
