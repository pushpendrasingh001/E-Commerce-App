import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Signuphero from "../../../assets/login/signin-up.png";
import google from '../../../assets/login/google.png';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
        toast.success("Signup Successfully");
        localStorage.setItem("users",JSON.stringify(res.data.user));
    
   
    } catch (err) {
      toast.error(err.response.data.message);
    }
  
    
  };


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
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                  <div className='flex flex-col gap-3 sm:gap-5'>
                    <input
                      type='text'
                      placeholder='Name'
                      className='input input-bordered w-full py-2 sm:py-3'
                      {...register('fullname', { required: 'Name is required' })}
                    />
                    {errors.fullname && <p className='text-red-500 text-sm'>{errors.fullname.message}</p>}

                    <input
                      type='text'
                      placeholder='Email or Phone Number'
                      className='input input-bordered w-full py-2 sm:py-3'
                      {...register('email', { 
                        required: 'Email is required', 
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Enter a valid email address'
                        } 
                      })}
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

                    <input
                      type='password'
                      placeholder='Password'
                      className='input input-bordered w-full py-2 sm:py-3'
                      {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                  </div>

                  <button type='submit' className='bg-red-500 text-white h-10 sm:h-12 rounded-md w-full text-base sm:text-lg poppins-regular mt-4'>
                    Create Account
                  </button>
                </form>
              </div>

              <div className='flex flex-col gap-3 sm:gap-4 mt-4 w-full max-w-xs sm:max-w-md'>
                <div className='w-full h-10 sm:h-12 rounded-md border-2 cursor-pointer border-black flex items-center justify-center'>
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
