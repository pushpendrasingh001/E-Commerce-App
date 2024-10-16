import React from "react";
import facebook from '../assets/footer/facebook.svg'
import qrcode from '../assets/footer/qrcode1.png'
import instagram from '../assets/footer/instagram.svg'
import twiter from '../assets/footer/twiter.svg'
import linkedin from '../assets/footer/linkedin.svg'
import arrow from '../assets/footer/emailarrow.png'
function Footer() {
  return (
    <div>
   
      <footer className="footer bg-black poppins-regular text-white p-10 justify-evenly">
        <nav>
          <h6 className=" poppins-medium text-2xl">UrbanCart</h6>
          <a className="link link-hover text-lg">Subscribe</a>

          <a className="link link-hover poppins-regular">
            Get 10% off your first order
          </a>
          <span className="flex h-[40px] items-center border ">
  <input
    type="email"
    placeholder="Enter your mail"
    className="bg-black text-white px-2 outline-none"
  />
  <img
    src={arrow}
    className="h-[24px] w-[24px]"
  />
</span>

        </nav>
        <nav>
          <h6 className="poppins-regular text-xl">Support</h6>
          <p>Lucknow 226028 <br />Uttar Pradesh,India</p>
         <p>Virat9005820988@gmail.com</p> 
         <p> +91 8005006785</p>
        </nav>
        <nav>
          <h6 className="poppins-regular text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="poppins-regular  text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav >
          <h6 className="poppins-regular text-xl ">Download App</h6>
<img src={qrcode}className="h-[100px]" alt="" />
      <div className="flex gap-7 ">
<img className="w-[24px] h-[24px] cursor-pointer " src={facebook} alt="" />
<img className="w-[24px] h-[24px] cursor-pointer " src={twiter} alt="" />
<img className="w-[24px] h-[24px] cursor-pointer " src={instagram} alt="" />
<img className="w-[24px] h-[24px] cursor-pointer " src={linkedin} alt="" />
      </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
