import React, {useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IoMdDownload } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Fold1 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

  const handleDownloadClick = () => {
    setIsDialogOpen(true); // Open the dialog
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  const handleOverlayClick = (e) => {
    // Close the dialog only if the click is on the overlay
    if (e.target.classList.contains('overlay')) {
      closeDialog();
    }
  };

  return (
    <div className='hero min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex flex-col justify-start'>
        <h1 className='text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
            <span className='block'>Discover Your Investments</span>
            <span className='block'>See Them All In One Place</span>
            <span className='block'>Secure Your Future</span>
        </h1>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl '>
            Vealthx lets you aggregate investments, secure them into your account, make dynamic wills, update nominees, and much more
        </p>
        <div className='bg-white text-black font-bold py-4 px-6 w-fit rounded-full text-xl mt-10 sm:mt-16 lg:mt-28 hover:bg-gray-200 transition-colors'>
          <button onClick={handleDownloadClick} className='flex items-center'>
            Download the App <IoMdDownload className='inline w-7 h-7 ml-6'/> 
          </button>
        </div>

        {/* Dialog Box */}
        {isDialogOpen && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overlay p-8' onClick={handleOverlayClick}>
            <div className='bg-white p-6 rounded shadow-lg w-full sm:w-3/4 md:w-1/2 xl:w-1/4'>
              <h2 className='text-lg font-bold mb-4'>Our Download Feature is Coming Soon!</h2>
              <p className=''>Get ready to unlock a world of possibilities with our upcoming download feature! Soon, you’ll be able to effortlessly access and save your assets with just a click. Stay tuned for a streamlined experience that empowers you to securely manage your financial resources anytime, anywhere. We can’t wait to share this essential tool with you!</p>
              <div className='mt-4'>
                <button onClick={closeDialog} className='mr-2 bg-gray-300 px-4 py-2 rounded font-bold'>Close</button>
                {/* Add any additional buttons for actions here */}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Fold1

// Add this function to handle the button click

