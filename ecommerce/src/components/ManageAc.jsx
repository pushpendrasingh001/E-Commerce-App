import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import {useNavigate} from 'react-router-dom'
function ManageAc() {
  const navigate=useNavigate();
  return (
    <>
    <Navbar/>
      <div className='min-h-screen pt-10 pb-10 '>
        <div className='max-w-7xl mx-auto w-full h-auto p-5 '>
          <div className="flex justify-center lg:justify-end lg:mr-[50px] mt-6 lg:mt-10">
            <p className="poppins-regular">
              Welcome <span className="text-red-500">Pushpendra Singh</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-[230px] mt-5  h-auto lg:h-[650px] lg:ml-[50px] p-5  mx-4 lg:mx-0">
              <p className="text-xl poppins-regular">Manage My Account</p>
              <div className="lg:ml-[10px]">
                <p className="poppins-regular mt-8 text-red-500">My Profile</p>
                <p className="poppins-regular mt-3">My Address Book</p>
                <p className="poppins-regular mt-3">My Payment Options</p>
              </div>
              <p className="text-xl mt-10 poppins-regular">Manage Orders</p>
              <div className="lg:ml-[10px]">
                <p className="poppins-regular mt-8">My Returns</p>
                <p className="poppins-regular mt-3">My Cancellations</p>
              </div>
              <p className="text-xl poppins-regular mt-8">My Wishlist</p>
            </div>

            {/* Profile Editing Section */}
            <div className="w-full lg:w-[700px] lg:ml-[180px] h-auto lg:h-[650px] mt-5  p-5   mx-4 lg:mx-0">
              <span className="text-red-500 text-2xl lg:text-3xl font-semibold">
                Edit Your Profile
              </span>

              <div className="mt-5">
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex flex-col">
                    <p className="text-lg poppins-regular">Name</p>
                    <input
                      type="text"
                      placeholder="Name..."
                      className="input text-lg poppins-regular input-bordered input-accent w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg poppins-regular">Last Name</p>
                    <input
                      type="text"
                      placeholder="Last Name..."
                      className="input text-lg poppins-regular input-bordered input-accent w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-5">
                  <div className="flex flex-col">
                    <p className="text-lg poppins-regular">Email</p>
                    <input
                      type="email"
                      placeholder="Email..."
                      className="input text-lg poppins-regular input-bordered input-accent w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg poppins-regular">Address</p>
                    <input
                      type="text"
                      placeholder="Address..."
                      className="input text-lg poppins-regular input-bordered input-accent w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xl poppins-regular mb-5">Password Changes</p>
                <div className="flex flex-col gap-4">
                  <input
                    type="password"
                    placeholder="Old Password"
                    className="input text-lg poppins-regular input-bordered input-accent w-full"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="input text-lg poppins-regular input-bordered input-accent w-full"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input text-lg poppins-regular input-bordered input-accent w-full"
                  />
                </div>
              </div>

              <div className="flex justify-center lg:justify-end gap-4 mt-5">
              <button  className="border-2 h-[56px] rounded-md w-[120px] lg:w-[150px] text-lg lg:text-xl poppins-regular hover:bg-red-500 hover:text-white hover:border-black" onClick={()=>navigate('/')}> Cancel</button>
                <button className="bg-red-500 text-white h-[56px] rounded-md hover:bg-white hover:text-black border-2 border-black w-[160px] lg:w-[201px] text-lg lg:text-xl poppins-regular">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ManageAc;
