import React, { useEffect, useState } from "react";
import fevicon from '../assets/navbar/fevicon logo.png';
import cart from '../assets/navbar/cart.svg';
import search from '../assets/navbar/search.svg';
import wishlist from '../assets/navbar/wishlist.svg';
function Navbar() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY> 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`navbar fixed top-0 left-0 bg-tranparent  right-0 z-50 ${
            sticky
              ? "sticky-navbar shadow-md bg-slate-300 duration-300 translate-all ease-in-out"
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-xl poppins-regular "
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
             
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </ul>
            </div>
           <img src={fevicon}className="w-[3rem] lg:ml-5 h-[3rem]" /> 
           
            <a className=" text-2xl poppins-semibold lg:ml-9 ml-2 md: text-center">
              UrbanCart
            </a>
          </div>
          <div className="navbar-center  hidden lg:flex ">
            <ul className="menu menu-horizontal px-1  text-lg poppins-regular">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>

             
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/signup">Sign up</a>
              </li>
            </ul>
          
          </div>
        
          <div className="navbar-end ">
          <div className=" flex gap-2 items-center p-2 md:w-[347px] md:h-[38px] w-full">
 
  <span className="flex gap-1 w-full md:w-auto border rounded-md border-black  ">
    <input
      className="h-full px-2 w-full bg-transparent md:w-auto border-none focus:outline-none poppins-regular mt-1" 
      placeholder="What are you looking for ? " style={{fontSize: '12px'}}
      type="text"
    />
    <img src={search} alt="Search" className="h-5 cursor-pointer w-5" /> 
  </span>


  <img src={wishlist} alt="Wishlist" className="h-5 cursor-pointer w-5 hidden md:block" /> 
  <img src={cart} alt="Cart" className="h-5 w-5 cursor-pointer hidden md:block" /> 
</div>

          <div className="dropdown  flex justify-end dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content poppins-regular bg-base-100 rounded-box z-[1] mt-16 w-52 p-2 shadow ">
        <li><a href="/manageaccount">Manage My Account</a></li>
        <li><a>My Order</a></li>
        <li><a>My Wishlist</a></li>
        <li><a>Logout</a></li> 
      
      </ul>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;