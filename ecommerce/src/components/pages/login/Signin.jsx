import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import SigninHero from '../../../assets/login/signin-up.png'



function Signin() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        {/* Main Content Wrapper */}
        <div className='flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-8 mt-10 lg:mt-[100px]'>
          <div className='signin flex flex-col lg:flex-row justify-center items-center w-full'>
            {/* Left Image Section */}
            <div className='flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0'>
              <img 
                className='object-cover w-full h-auto max-h-[300px] sm:max-h-[500px] lg:max-h-none' 
                src={SigninHero} 
                alt="Sign In" 
              />
            </div>

            {/* Right Form Section */}
            <div className='flex flex-col items-center justify-center w-full lg:w-1/2'>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center'>Log in to exclusive</p>
              <p className='poppins-regular mt-2 text-sm sm:text-base text-center'>Enter your details below</p>
              
              <div className='w-full max-w-xs sm:max-w-md'>
                <form className='mt-4'>
                  <div className='flex flex-col gap-3 sm:gap-5'>
                    <input 
                      type='text' 
                      placeholder='Email or Phone Number' 
                      className='input input-bordered w-full h-[56px]' 
                    />
                    <input 
                      type='password' 
                      placeholder='Password' 
                      className='input input-bordered w-full h-[56px]' 
                    />
                  </div>
                </form>
              </div>

              <div className='flex flex-col items-center mt-4 w-full max-w-xs sm:max-w-md'>
                <button className='bg-red-500 text-white h-[56px] rounded-md w-full text-xl poppins-regular'>
                  Log in
                </button>
                <div className='mt-4 hover:underline text-red-500 poppins-regular text-lg text-center'>
                  <a href="">Forget Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default Signin;
