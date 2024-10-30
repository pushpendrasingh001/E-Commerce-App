import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import call from '../../../assets/contact/call.svg';
import mail from '../../../assets/contact/massage.svg';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='contact w-full max-w-[1540px] poppins-regular h-[auto] mt-[100px] pt-[70px] '>
        <div className='w-full max-w-[1140px] h-auto mx-auto '>
          <div className='flex flex-col lg:flex-row items-start px-4'> 
            <div className='w-full lg:w-[340px] flex justify-center lg:justify-start'>
              <div className='w-full lg:w-[270px] h-auto p-5 lg:ml-[35px] '>
                <div className='flex items-center gap-5'>
                  <img src={call} alt='Call Icon' />
                  <p className='text-lg poppins-semibold'>Call To Us</p>
                </div>
                <div className='poppins-regular mt-2'>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p className='mt-2'>Phone: +91 8005006785</p>
                </div>
                <hr className='mt-6' />
                <div className='flex items-center gap-5 mt-6'>
                  <img src={mail} alt='Mail Icon' />
                  <p className='text-lg poppins-semibold'>Write To Us</p>
                </div>
                <div className='poppins-regular mt-2'>
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p className='mt-2'>Email: customer@exclusive.com</p>
                  <p className='mt-2'>Email: support@exclusive.com</p>
                </div>
              </div>
            </div>

            <div className='w-full lg:w-[800px] flex justify-center lg:ml-[50px]'>
              <div className='w-full lg:w-[727px] p-5  lg:ml-[31px] flex flex-col justify-between h-full'>
                <div className='flex flex-col lg:flex-row justify-between gap-5'>
                  <input
                    type='text'
                    placeholder='Name*'
                    className='input poppins-regular input-accent w-full h-[56px]'
                  />
                  <input
                    type='email'
                    placeholder='Email*'
                    className='input poppins-regular input-accent w-full h-[56px]'
                  />
                  <input
                    type='tel'
                    placeholder='Phone*'
                    className='input poppins-regular input-accent w-full h-[56px]' 
                  />
                </div>

                <textarea
                  className='input poppins-regular input-accent w-full h-[150px] lg:h-[207px] mt-5 lg:mt-10'
                  placeholder='Your Message'
                ></textarea>

                {/* Move the button down */}
                <div className='flex justify-end mt-5'>
                  <button className='bg-red-500 text-white text-xl poppins-semibold text-center w-full lg:w-[215px] h-[56px] rounded-md'>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className='mt-[87px]'>
      <Footer />
      </div>
    
    </div>
  );
}

export default Contact;
