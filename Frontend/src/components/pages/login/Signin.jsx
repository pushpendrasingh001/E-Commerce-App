import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import SigninHero from '../../../assets/login/signin-up.png';
import axios from 'axios';
import toast from 'react-hot-toast';
function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) =>{
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
   
        toast.success('Login Successfully ');
        localStorage.setItem("users",JSON.stringify(res.data.user))
        pars
    } catch (err) {
     
      toast.error(err.response.data.message);
    }
  }

 

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />

        <div className='flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-8 mt-10 lg:mt-[100px]'>
          <div className='signin flex flex-col lg:flex-row justify-center items-center w-full'>
            <div className='flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0'>
              <img 
                className='object-cover w-full h-auto max-h-[300px] sm:max-h-[500px] lg:max-h-none' 
                src={SigninHero} 
                alt="Sign In" 
              />
            </div>

            <div className='flex flex-col items-center justify-center w-full lg:w-1/2'>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center'>Log in to exclusive</p>
              <p className='poppins-regular mt-2 text-sm sm:text-base text-center'>Enter your details below</p>
              
              <div className='w-full max-w-xs sm:max-w-md'>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                  <div className='flex flex-col gap-3 sm:gap-5'>
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
                      className='input input-bordered w-full ' 
                      {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                  </div>
                  
                  <button type='submit' className='bg-red-500 text-white h-[56px] rounded-md w-full text-xl poppins-regular mt-4'>
                    Log in
                  </button>
                </form>
              </div>

              <div className='flex flex-col items-center mt-4 w-full max-w-xs sm:max-w-md'>
                <div className='mt-4 hover:underline text-red-500 poppins-regular text-lg text-center'>
                  <a href="/">Forget Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Signin;
