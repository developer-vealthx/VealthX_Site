import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import vealtxLogo from './assets/images/vealthx_logo.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import qrCode from './assets/images/qrCode.jpg'

const PURPLE_COLOR = '#4F37BF';
const HOVER_PURPLE_COLOR = '#3D2A9D';

const SOCIAL_ICONS = [
  { Icon: FaInstagram, link: 'https://www.instagram.com/vealthx.media/' },
  { Icon: FaLinkedin, link: 'https://www.linkedin.com/company/vealthx/' },
//   { Icon: FaFacebook, link: '#' },
  { Icon: FaXTwitter, link: 'https://x.com/vealthx' },
];

const Footer = () => {
    const { pathname } = useLocation();

    const handleLinkClick = (e, path) => {
        if (pathname.includes(path)) {
            e.preventDefault();
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className='p-4 sm:p-8 md:p-12 bg-black w-full text-white'>
            <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8'>
                <div className='w-full lg:w-3/5'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-4'>Are You on Top of Your Finances?<br/>Take the Vealthx Survey to See If You’re Covered!</h1>
                    {/* <h2 className='text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl'>
                        Join us as an Investor and Mentor to help shape the success of
                        <br className='hidden sm:block' /> our team with your expertise and support!
                    </h2>
                    <div className='bg-white text-black font-bold py-2 px-4 w-fit rounded-full text-sm mt-8 hover:bg-gray-200 transition-colors'>
                        <Link to='/Investor'>Be our Investor & Mentor</Link>
                    </div> */}
                    <img src={qrCode} className='w-[15vh]'/>
                </div>

                <div className='w-full lg:w-2/5'>
                    {/* <div className="flex items-center justify-left w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 h-12 border-2 border-transparent focus:outline-none rounded-l-lg border-y-4 border-l-4 border-[#4F37BF] bg-white text-gray-800 w-2/3"
                        />
                        <button className="h-12 w-1/3 bg-[#4F37BF] text-white rounded-r-lg border-y-4 border-r-4 border-[#4F37BF] focus:outline-none hover:bg-[#3D2A9D] transition-colors">
                            Get started
                        </button>
                    </div> */}

                    <div className="flex flex-wrap justify-between mt-8 gap-y-6">
                        <div className="w-1/2 sm:w-2/6">
                            <h3 className="font-bold mb-2">COMPANY</h3>
                            <Link 
                                to='/about' 
                                className="mb-1 hover:underline block"
                                onClick={(e) => handleLinkClick(e, 'about')}
                            >
                                About
                            </Link>
                        </div>

                        <div className="w-1/2 sm:w-2/6">
                            <h3 className="font-bold mb-2">LEGAL</h3>
                            {['PrivacyPolicy', 'TermsConditions', 'RefundPolicy'].map((path) => (
                                <Link 
                                    key={path}
                                    to={`/${path}`} 
                                    className="mb-1 hover:underline block"
                                    onClick={(e) => handleLinkClick(e, path)}
                                >
                                    {path.replace(/([A-Z])/g, ' $1').trim()}
                                </Link>
                            ))}
                        </div>

                        <div className="w-full md:w-2/6 lg:w-full 2xl:w-2/6">
                            <h3 className="font-bold mb-2">Contact us</h3>
                            <h1>
                                <a href="mailto:founders@vealthx.com" className="mb-1">
                                    email: <span className='hover:underline'>founders@vealthx.com</span>
                                </a>
                            </h1>
                            <h1>
                                <a href="tel:+911234566889" className="mb-1">
                                    phone no. : <span className='hover:underline'>+91 9429691489</span>
                                </a>
                            </h1>
                        </div>


                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-700'>
                <div className='mb-4 sm:mb-0'>
                    <img src={vealtxLogo} alt="logo" className='w-16 sm:w-24 mb-2 text-center' />
                    <p className='text-xs text-center sm:text-left'>Copyright Vealthx   2024. All Rights Reserved.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    {SOCIAL_ICONS.map(({ Icon, link }) => (
                        <a key={Icon.name} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon className='h-6 w-6 sm:h-8 sm:w-8 hover:text-gray-400 cursor-pointer'/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
