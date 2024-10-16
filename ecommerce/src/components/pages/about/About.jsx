import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import heroimage from '../../../assets/about/hero.svg'
import seller  from '../../../assets/about/seller.svg'
import monthlysale  from '../../../assets/about/monthlysale.svg'
import customer  from '../../../assets/about/customer.svg'
import annualgrowth  from '../../../assets/about/annualgrowth.svg'
import delivery  from '../../../assets/about/delivery.svg'
import support  from '../../../assets/about/support.svg'
import moneyback  from '../../../assets/about/moneyback.svg'
import AboutCorousal from './AboutCorousal'

function About() {
  return (
    <>
      <Navbar/>
      <div className="w-full h-auto pt-[50px] pb-[30px] md:pt-[100px] md:pb-[50px]">
  <div className="w-full max-w-[1230px] h-auto mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-0">
    <div className="w-full lg:w-[525px] h-auto lg:h-[336px] mt-8 lg:mt-[136px]">
      <div>
        <h2 className="text-3xl lg:text-5xl poppins-semibold mb-4">
          Our Story
        </h2>
        <p className="mt-5 poppins-regular text-justify">
          Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in India. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
        </p>
        <p className="mt-4 poppins-regular text-justify">
          Exclusive has more than 1 million products available to offer and is growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer products and more.
        </p>
      </div>
    </div>
    <div className="w-full lg:w-[705px] h-auto">
      <img src={heroimage} alt="" className="w-full h-auto object-cover" />
    </div>
  </div>
</div>

 
    {/* company detail */}
    <div className="w-full h-auto pt-[50px] pb-[30px] md:pt-[100px] md:pb-[50px]">
  <div className="w-full max-w-[1170px] h-auto mx-auto flex flex-col md:flex-row gap-6 justify-center items-center px-4">
    {/* Box 1 */}
    <div className="w-full max-w-[270px] h-[230px] border-2 hover:bg-red-400 transition duration-300 ease-in-out mx-auto">
      <div className="w-full max-w-[170px] h-[170px] mx-auto mt-[30px] mb-[50px]">
        <div className="flex justify-center">
          <img className="w-[80px] h-[80px]" src={seller} alt="" />
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-2xl poppins-semibold">10.5K</p>
        </div>
        <div className="text-center poppins-regular">
          <p>Sellers active in our site</p>
        </div>
      </div>
    </div>
    {/* Box 2 */}
    <div className="w-full max-w-[270px] h-[230px] border-2 hover:bg-red-400 transition duration-300 ease-in-out mx-auto">
      <div className="w-full max-w-[170px] h-[170px] mx-auto mt-[30px] mb-[50px]">
        <div className="flex justify-center">
          <img className="w-[80px] h-[80px]" src={monthlysale} alt="" />
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-2xl poppins-semibold">33K</p>
        </div>
        <div className="text-center poppins-regular">
          <p>Monthly product sale</p>
        </div>
      </div>
    </div>
    {/* Box 3 */}
    <div className="w-full max-w-[270px] h-[230px] border-2 hover:bg-red-400 transition duration-300 ease-in-out mx-auto">
      <div className="w-full max-w-[170px] h-[170px] mx-auto mt-[30px] mb-[50px]">
        <div className="flex justify-center">
          <img className="w-[80px] h-[80px]" src={customer} alt="" />
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-2xl poppins-semibold">10.5K</p>
        </div>
        <div className="text-center poppins-regular">
          <p>Customers active in our site</p>
        </div>
      </div>
    </div>
    {/* Box 4 */}
    <div className="w-full max-w-[270px] h-[230px] border-2 hover:bg-red-400 transition duration-300 ease-in-out mx-auto">
      <div className="w-full max-w-[170px] h-[170px] mx-auto mt-[30px] mb-[50px]">
        <div className="flex justify-center">
          <img className="w-[80px] h-[80px]" src={annualgrowth} alt="" />
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-2xl poppins-semibold">425K</p>
        </div>
        <div className="text-center poppins-regular">
          <p>Annual gross sale in our site</p>
        </div>
      </div>
    </div>
  </div>
</div>

         {/* about corousal */}
         <div className="w-full h-auto pt-[50px] pb-[50px]">
  <div className="w-full max-w-[1170px] h-auto mx-auto">
    <AboutCorousal />
  </div>
</div>

    {/* support */}
<div className='w-full h-auto pt-12 pb-12'>
  <div className='w-full max-w-screen-lg mx-auto px-4'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
      {/* Free and Fast Delivery */}
      <div className='h-[160px] w-full mx-auto'>
        <img className='h-[80px] mx-auto mb-5' src={delivery} alt="Free Delivery" />
        <p className='poppins-semibold text-lg'>FREE AND FAST DELIVERY</p>
        <p className='poppins-regular text-sm lg:text-base'>Free delivery for all orders over $140</p>
      </div>

      {/* 24/7 Customer Service */}
      <div className='h-[160px] w-full mx-auto'>
        <img className='h-[80px] mx-auto mb-5' src={support} alt="Customer Support" />
        <p className='poppins-semibold text-lg'>24/7 CUSTOMER SERVICE</p>
        <p className='poppins-regular text-sm lg:text-base'>Friendly 24/7 Customer Service</p>
      </div>

      {/* Money Back Guarantee */}
      <div className='h-[160px] w-full mx-auto'>
        <img className='h-[80px] mx-auto mb-5' src={moneyback} alt="Money Back Guarantee" />
        <p className='poppins-semibold text-lg'>MONEY BACK GUARANTEE</p>
        <p className='poppins-regular text-sm lg:text-base'>We return money within 30 days</p>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default About
