import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import Signuphero from "../../../assets/login/signin-up.png"
import google from '../../../assets/login/google.png'

function Signup() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        {/* Main Content Wrapper */}
        <div className='flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-8 sm:mt-10 mt-[100px]'>
          <div className='signup flex flex-col lg:flex-row justify-center items-center w-full'>
            {/* Left Image Section */}
            <div className='flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0'>
              <img
                className='object-cover w-full h-auto max-h-[300px] sm:max-h-[500px] lg:max-h-none'
                src={Signuphero}
                alt="Sign Up"
              />
            </div>

            {/* Right Form Section */}
            <div className='flex flex-col items-center justify-center w-full lg:w-1/2'>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center'>Create an Account</p>
              <p className='poppins-regular mt-2 text-sm sm:text-base text-center'>Enter your details below</p>

              <div className='w-full max-w-xs sm:max-w-md'>
                <form className='mt-4'>
                  <div className='flex flex-col gap-3 sm:gap-5'>
                    <input
                      type='text'
                      placeholder='Name'
                      className='input input-bordered w-full py-2 sm:py-3' 
                    />
                    <input
                      type='text'
                      placeholder='Email or Phone Number'
                      className='input input-bordered w-full py-2 sm:py-3' 
                    />
                    <input
                      type='password' 
                      placeholder='Password'
                      className='input input-bordered w-full py-2 sm:py-3' 
                    />
                  </div>
                </form>
              </div>

              <div className='flex flex-col gap-3 sm:gap-4 mt-4 w-full max-w-xs sm:max-w-md'>
                <button className='bg-red-500 text-white h-10 sm:h-12 rounded-md w-full text-base sm:text-lg poppins-regular'>
                  Create Account
                </button>
                <div className='w-full h-10 sm:h-12 rounded-md border-2 border-black flex items-center justify-center'>
                  <div className='flex gap-2 sm:gap-3 items-center'>
                    <img className="h-5 sm:h-6" src={google} alt="Google Logo" />
                    <p className='poppins-regular text-sm sm:text-lg'>Sign up with Google</p>
                  </div>
                </div>
                <p className='text-center text-sm sm:text-base'>
                  Already have an account? <a className='text-blue-600 hover:underline' href="/signin">Log in</a>
                </p>
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

export default Signup;
