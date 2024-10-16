import {React,useEffect,useState} from 'react'
import Navbar from '../../Navbar'
import Carousal from './Corousal'
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
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(countdown);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (

    <div className='h-auto w-full shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 poppins-semibold text-lg">Today's  </h2>
      <h2 className="text-2xl poppins-semibold text-gray-900"> Flash Sales</h2>
    </span>
   <span className="flex mt-4 md:mt-0 space-x-4">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
         <div key={index} className="text-center">
         <span className="block text-2xl md:text-3xl poppins-semibold text-gray-900">
              {timeLeft[unit]?.toString().padStart(2, '0') || '00'}
           </span>
           <span className="text-xs md:text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
         </div>
         ))}
      </span>

    <span className='flex  items-center space-x-4'>
      <button>
        <img src={leftarrow} alt="Left arrow" />
      </button>
      <button>
        <img src={rightarrow}alt="Right arrow" />
      </button>
    </span>
  </div>
</div>
  );
};

function Home() {
  return (
    <>

    <Navbar/>
    <div className='w-full h-auto pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px]'>
  <div className='w-full md:w-[1200px] mx-auto'>
    <div className='flex flex-col md:flex-row justify-around'>
      
      {/* Sidebar */}
      <div className='w-full md:w-[217px] h-auto'>
        <div className="flex">
          <div className="border-r-2 h-auto w-full lg:w-[217px]">
            <ul>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Men's Fashion <span>&gt;</span>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Women's Fashion <span>&gt;</span>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Electronics
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Home & Lifestyle
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Medicine
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Sports & Outdoor
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Groceries & Pet
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Health & Beauty
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex justify-between items-center">
                Baby & Toys
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Carousel */}
      <div className='w-full md:w-[892px] h-auto'>
        <Carousal />
      </div>
    </div>
  </div>
</div>

    {/* todays flash sale */}
    <div className='w-full h-auto pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px]'>
  <div className='w-full md:w-[1200px] mx-auto'>
    
    {/* Countdown Timer */}
    <CountdownTimer />
    
    <div className='w-full md:w-[1170px] h-auto mt-8'>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="relative">
            <img src={gamepad} alt="Gamepad" className="w-full h-32 object-contain rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
          </div>
          <h2 className="text-lg md:text-xl poppins-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$120</p>
            <p className="line-through text-gray-500">$160</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(88)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="relative">
            <img src={keyboard} alt="Keyboard" className="w-full h-32 object-contain rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          </div>
          <h2 className="text-lg md:text-xl poppins-semibold mt-2">AK-900 Wired Keyboard</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$960</p>
            <p className="line-through text-gray-500">$1160</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(75)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="relative">
            <img src={desktop} alt="Monitor" className="w-full h-32 object-contain rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
          </div>
          <h2 className="text-lg md:text-xl poppins-semibold mt-2">IPS LCD Gaming Monitor</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-red-600 text-xl font-bold">$370</p>
            <p className="line-through text-gray-500">$400</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <span className="flex items-center text-yellow-500">★★★★★</span>
            <span className="text-gray-500 text-sm">(99)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="relative">
            <img src={chair} alt="Chair" className="w-full h-32 object-contain rounded" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
          </div>
          <h2 className="text-lg md:text-xl poppins-semibold mt-2">S-Series Comfort Chair</h2>
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

      {/* View All Products Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  </div>

  {/* Horizontal Line */}
  <hr className='w-full md:w-[1170px] mx-auto mt-8' />
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
<div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full md:w-[1170px] h-auto mx-auto px-4'>
    <div className='h-auto w-full shadow-lg'>
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 poppins-semibold text-lg">Our Products</h2>
          <h2 className="text-2xl poppins-semibold text-gray-900">Explore Our Products</h2>
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

    <div className="max-w-[1300px] mx-auto mt-10">
      {/* First Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            imgSrc: desktop,
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            originalPrice: 160,
            discount: "-40%",
            rating: 88,
          },
          {
            imgSrc: chair,
            title: "AK-900 Wired Keyboard",
            price: 960,
            originalPrice: 1160,
            discount: "-35%",
            rating: 75,
          },
          {
            imgSrc: sweater,
            title: "IPS LCD Gaming Monitor",
            price: 370,
            originalPrice: 400,
            discount: "-30%",
            rating: 99,
          },
          {
            imgSrc: keyboard,
            title: "S-Series Comfort Chair",
            price: 375,
            originalPrice: 400,
            discount: "-25%",
            rating: 99,
          },
        ].map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative">
              <img src={product.imgSrc} alt={product.title} className="w-full h-32 object-top rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            </div>
            <h2 className="text-lg poppins-semibold mt-2">{product.title}</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl poppins-semibold">${product.price}</p>
              <p className="line-through text-gray-500">${product.originalPrice}</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">({product.rating})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {[
          {
            imgSrc: chair,
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            originalPrice: 160,
            discount: "-40%",
            rating: 88,
          },
          {
            imgSrc: sweater,
            title: "AK-900 Wired Keyboard",
            price: 960,
            originalPrice: 1160,
            discount: "-35%",
            rating: 75,
          },
          {
            imgSrc: gamepad,
            title: "IPS LCD Gaming Monitor",
            price: 370,
            originalPrice: 400,
            discount: "-30%",
            rating: 99,
          },
          {
            imgSrc: desktop,
            title: "S-Series Comfort Chair",
            price: 375,
            originalPrice: 400,
            discount: "-25%",
            rating: 99,
          },
        ].map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative">
              <img src={product.imgSrc} alt={product.title} className="w-full h-32 object-top rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            </div>
            <h2 className="text-lg poppins-semibold mt-2">{product.title}</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl poppins-semibold">${product.price}</p>
              <p className="line-through text-gray-500">${product.originalPrice}</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">({product.rating})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  </div>
</div>

{/* new arrival */}
<div className='w-full h-auto pt-[30px] pb-[30px] md:pt-[50px] md:pb-[50px]'>
  <div className='w-full max-w-screen-xl h-auto mx-auto px-4'>
    <div className='h-auto w-full shadow-lg'>
      <div className='flex justify-between m-5 flex-wrap'>
        <span className='flex flex-col gap-y-3'>
          <h2 className="text-red-600 poppins-semibold text-lg">Featured</h2>
          <h2 className="text-2xl poppins-semibold text-gray-900">New Arrival</h2>
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

    {/* Product Grid */}
    <div className="grid grid-rows-4 grid-flow-col gap-4 h-auto w-full mt-10">
      {/* First Large Image */}
      <div className="row-span-4 col-span-2 bg-red-100">
        <img src={playstation} className="h-full w-full object-cover" alt="Playstation" />
      </div>

      {/* Top Right Image */}
      <div className="row-span-2 col-span-2 bg-slate-200">
        <img className="h-full w-full object-cover" src={women} alt="Women" />
      </div>

      {/* Bottom Left Image */}
      <div className="row-span-2 col-span-1 bg-green-100">
        <img className="h-full w-full object-cover" src={speaker} alt="Speaker" />
      </div>

      {/* Bottom Right Image */}
      <div className="row-span-2 col-span-1 bg-yellow-100">
        <img className="h-full w-full object-cover" src={gucci} alt="Gucci" />
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