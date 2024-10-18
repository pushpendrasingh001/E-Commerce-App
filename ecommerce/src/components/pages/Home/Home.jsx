import {React} from 'react'
import Navbar from '../../Navbar'
import leftarrow from '../../../assets/Home/leftarrow.svg'
import rightarrow from '../../../assets/Home/rightarrow.svg'
import desktop from '../../../assets/Home/today flashsale/desktop.svg'
import gamepad from '../../../assets/Home/today flashsale/gamepad.svg'
import keyboard from '../../../assets/Home/today flashsale/keybord.svg'
import chair from '../../../assets/Home/today flashsale/chair.svg'
import phone from '../../../assets/Home/category/phone.png'
import camera from '../../../assets/Home/category/camera.png'
import computer from '../../../assets/Home/category/computer.png'
import game from '../../../assets/Home/category/gaming.png'
import headphone from '../../../assets/Home/category/headphone.png'
import watch from '../../../assets/Home/category/watch.png'
import cpu from '../../../assets/Home/this month/cpu.png.png'
import bookself from '../../../assets/Home/this month/bookself.png'
import bag from '../../../assets/Home/this month/bag.png'
import sweater from '../../../assets/Home/this month/sweater.png'
import banner from '../../../assets/Home/this month/banner.png'
import speaker from '../../../assets/Home/feature/speaker.png'
import delivery from '../../../assets/Home/feature/delivery.png'
import moneyback from '../../../assets/Home/feature/moneyback.png'
import playstation from '../../../assets/Home/feature/playstation.png'
import support from '../../../assets/Home/feature/support.png'
import women from '../../../assets/Home/feature/women.png'
import gucci from '../../../assets/Home/feature/gucci.png'
import Footer from '../../Footer'
import Sidebar from './Sidebar'
import FlashSale from './FlashSale'
import Carousal from './Corousal'
import OurProduct from './OurProduct'


function Home() 
{
  return (
    <>

<Navbar/>
    <div className='w-full h-auto md:mt-[70px] pt-[50px] pb-[50px] md:pt-[100px] '>
  <div className='w-full md:w-[1200px] mx-auto'>
    <div className='flex flex-col md:flex-row justify-around'>
      
      {/* Sidebar */}
     
 <div>
 <Sidebar/>
 </div>
      {/* Carousel */}
      <div className='w-full mt-10 md:w-[892px] h-auto'>
        <Carousal />
      </div>
      </div>
      </div>
      </div>
  <hr className='w-full md:w-[1170px] mx-auto mt-8' />
  {/* Flash Sale */}
  <div>
  <FlashSale/>
  </div>
    {/* browse by category */}


    <div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full md:w-[1170px] mx-auto'>
    
    {/* Title and Arrow Controls */}
    <div className="h-auto w-full shadow-lg">
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 font-bold text-lg">Categories</h2>
          <h2 className="text-2xl font-bold text-gray-900">Browse By Category</h2>
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

    {/* Categories Grid */}
    <div className="flex flex-wrap justify-center gap-5 mt-12 md:mt-16 mx-4">
      {[
        { id: 1, img: phone, alt: 'Phone' },
        { id: 2, img: computer, alt: 'Computer' },
        { id: 3, img: camera, alt: 'Camera' },
        { id: 4, img: headphone, alt: 'Headphones' },
        { id: 5, img: watch, alt: 'Watch' },
        { id: 6, img: game, alt: 'Gaming' },
      ].map((category) => (
        <div 
          key={category.id} 
          className="w-[120px] h-[120px] md:w-[170px] md:h-[145px] hover:bg-red-400 flex items-center justify-center transition duration-300"
        >
          <img src={category.img} alt={category.alt} className="max-w-full max-h-full object-contain" />
        </div>
      ))}
    </div>
  </div>
</div>

{/* this month best selling product */}
<div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full md:w-[1170px] mx-auto'>
    
    {/* Title and Arrow Controls */}
    <div className="h-auto w-full shadow-lg">
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 font-bold text-lg">This Month</h2>
          <h2 className="text-2xl font-bold text-gray-900">Best Selling Products</h2>
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

    {/* Products Grid */}
    <div className='w-full mx-auto pt-[30px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Product 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <img src={sweater} alt="Sweater" className="w-full h-32 object-top rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
          </div>
          <h2 className="text-lg poppins-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$120</p>
            <p className="line-through text-gray-500">$160</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(88)</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <img src={bag} alt="Bag" className="w-full h-32 object-top rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          </div>
          <h2 className="text-lg poppins-semibold mt-2">AK-900 Wired Keyboard</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$960</p>
            <p className="line-through text-gray-500">$1160</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(75)</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <img src={cpu} alt="CPU" className="w-full h-32 object-top rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
          </div>
          <h2 className="text-lg poppins-semibold mt-2">IPS LCD Gaming Monitor</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$370</p>
            <p className="line-through text-gray-500">$400</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(99)</span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <img src={bookself} alt="Bookshelf" className="w-full h-32 object-top rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
          </div>
          <h2 className="text-lg poppins-semibold mt-2">S-Series Comfort Chair</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$375</p>
            <p className="line-through text-gray-500">$400</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(99)</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

{/* banner */}
<div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full md:w-[1170px] h-auto mx-auto px-4'>
    <img src={banner} alt="Banner" className="w-full h-auto object-cover" />
  </div>
</div>

{/* our product */}

<OurProduct/> 
{/* new arrival */}
<div className="w-full md:w-[1170px] mx-auto mt-10 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
    {/* First Large Image */}
    <div className="md:col-span-2 lg:row-span-4 lg:col-span-2 w-full md:h-[600px] bg-black relative">
      <img src={playstation} className="h-[511px] absolute w-[511px] top-[87px] left-[50px]" alt="Playstation" />
      <div className='absolute w-[242px] h-auto bottom-10 left-5'>
        <p className='poppins-semibold text-white text-xl'>Play Station 5</p>
        <p className='poppins-regular text-sm mt-3 text-white'>
          Black and White version of the PS5 coming out on sale.
        </p>
        <a className='poppins-regular hover:underline absolute text-sm mt-[10px] text-white' href="/">Shop Now</a>
      </div>
    </div>

    {/* Top Right Image */}
    <div className="md:col-span-2 lg:row-span-2 lg:col-span-2 bg-black h-[284px] relative">
      <img className="h-[284px] w-full object-cover" src={women} alt="Women" />
      <div className='absolute w-[242px] h-auto bottom-10 left-5'>
        <p className='poppins-semibold text-white text-xl'>Women's Collections</p>
        <p className='poppins-regular text-sm mt-3 text-white'>
          Featured women collections that give you another vibe.
        </p>
        <a className='poppins-regular hover:underline absolute text-sm mt-[10px] text-white' href="/">Shop Now</a>
      </div>
    </div>

    {/* Bottom Left Image */}
    <div className="lg:row-span-2 md:col-span-1 bg-opacity-90 bg-black relative h-[284px]">
      <img className="h-[222px] w-[210px] absolute mt-9 ml-7" src={speaker} alt="Speaker" />
      <div className='absolute w-[191px] h-auto bottom-10 left-8'>
        <p className='poppins-semibold text-white text-xl'>Speakers</p>
        <p className='poppins-regular text-sm mt-2 text-white'>Amazon wireless speakers.</p>
        <a className='poppins-regular hover:underline absolute text-sm mt-2 text-white' href="/">Shop Now</a>
      </div>
    </div>

    {/* Bottom Right Image */}
    <div className="lg:row-span-2 md:col-span-1 bg-opacity-90 bg-black relative h-[284px]">
      <img className="h-[222px] w-[210px] absolute mt-9 ml-7" src={gucci} alt="Gucci" />
      <div className='absolute w-[191px] h-auto bottom-10 left-8'>
        <p className='poppins-semibold text-white text-xl'>Perfume</p>
        <p className='poppins-regular text-sm mt-2 text-white'>GUCCI INTENSE OUD EDP</p>
        <a className='poppins-regular hover:underline absolute text-sm mt-2 text-white' href="/">Shop Now</a>
      </div>
    </div>
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


{/* footer */}

<Footer/>
    </>
  )
}

export default Home