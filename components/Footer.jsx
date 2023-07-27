import React from 'react';
import facebook from "../assets/socials/facebook.png";
import dribble from "../assets/socials/dribbble.png";
import instagram from "../assets/socials/instagram.png";
import sms from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className=' mt-28 flex md:flex-col justify-center items-center'>
      <p className='ml-10 text-white mb-1'>&copy; All copywrite reserve</p>
       <div className="flex ml-10 mb-5">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="" className="ml-4">
              <img src={dribble} alt="" />
            </a>
            <a href="" className="ml-4">
              <img src={instagram} alt="" />
            </a>
            <a href="" className="ml-4">
              <img src={sms} alt="" />
            </a>
           </div>
    </div>
  );
};

export default Footer;