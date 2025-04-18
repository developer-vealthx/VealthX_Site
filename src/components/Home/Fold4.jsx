import React, { useEffect } from 'react';
import finBlue from './assets/images/finBlue.png';
import startupIndia from './assets/images/startupIndia.png';
import msme from './assets/images/msme.jpeg';
import startupKarnataka from './assets/images/startupKarnataka.png';
import wadhwaniFoundation from './assets/images/wadhwaniFoundation.png';
import moc from './assets/images/commerce.jpg';
import zolvit from './assets/svg/zolvit.svg';
import microsoft from './assets/images/MicrosoftLogo.png';
import google from './assets/images/googleLogo.png';
import amazon from './assets/images/amazonLogo.png';
import SamadhanInsurance from './assets/images/SamadhanInsurance.png';
import Share_Samadhan_Logo from './assets/images/Share_Samadhan_Logo.png';
import attestr from './assets/images/attestr.png';
import razorpayLogo from './assets/images/razorpayLogo.png';
import SahamatiLogo from './assets/images/SahamatiLogo.png';
import conquestLogo from './assets/images/conquestLogo.png';
import AdvisoryLogo from './assets/images/Advisory.png';
import AiravatLogo from './assets/images/Airavat.png';


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Fold4 = () => {
  return (
    <div className='fold4'>
      <div className='pt-8'> {/* Reduced padding */}
        <h1 className='f41text opacity-100 text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold p-2'>Sponsors</h1> {/* Reduced font size and padding */}
        <div className="f41images flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 lg:gap-x-8 px-2 sm:px-4 lg:px-6"> {/* Reduced gap and padding */}
          <img src={finBlue} alt="finBlue" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={microsoft} alt="microsoft" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={google} alt="google" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={amazon} alt="amazon" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
        </div>
      </div>
      <hr className='f4line border-1' />
      <div className='py-5'> {/* Reduced padding */}
        <h1 className='f41text opacity-100 text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold p-2'>Partners</h1>
        <div className="f41images flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 lg:gap-x-8 px-2 sm:px-4 lg:px-6">
          <img src={zolvit} alt="startupIndia" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain scale-110" />
          <img src={SamadhanInsurance} alt="SamadhanInsurance" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={Share_Samadhan_Logo} alt="Share_Samadhan_Logo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={attestr} alt="attestr" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={razorpayLogo} alt="razorpayLogo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={SahamatiLogo} alt="SahamatiLogo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={AiravatLogo} alt="SahamatiLogo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={AdvisoryLogo} alt="SahamatiLogo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
        </div>
      </div>
      <hr className='f4line border-1' />
      <div className='py-5'>
        <h1 className='f41text opacity-100 text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold p-2'>Recognized By</h1>
        <div className="f41images flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 lg:gap-x-8 px-2 sm:px-4 lg:px-6">
          <img src={startupIndia} alt="startupIndia" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={startupKarnataka} alt="startupKarnataka" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={msme} alt="msme" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
        </div>
      </div>
      <hr className='f4line border-1' />
      <div className='py-5'>
        <h1 className='f41text opacity-100 text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold p-2'>Incubated By</h1>
        <div className="f41images flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 lg:gap-x-8 px-2 sm:px-4 lg:px-6">
          <img src={finBlue} alt="finBlue" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={wadhwaniFoundation} alt="wadhwaniFoundation" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
          <img src={conquestLogo} alt="conquestLogo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Fold4;
