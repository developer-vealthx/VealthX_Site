import React, { useState, useEffect } from "react";
import logo from "./assets/images/vealthx_logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Login from "../Login/Login";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the login/register form
  // const [isLogin, setIsLogin] = useState(true); // State for toggling between Login and Register
  const navigate = useNavigate();
  const location = useLocation();
  const [showDialog, setShowDialog] = useState(false); // New state for dialog box

  useEffect(() => {
    if (location.pathname.includes('login')) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [location]);

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="h-20">
      <div className="flex transition-colors h-20 duration-300 bg-white w-full px-4 sm:px-6 md:px-10 py-3 z-[100] fixed shadow-md">
        <div className="w-1/2 md:w-1/5 lg:w-1/2 2xl:w-[60%] h-full flex gap-4 sm:gap-8 items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 sm:h-12" />
          </Link>
          {/* These links will be hidden for smaller screens */}
          <Link
            to="/about"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            About
          </Link>
          <Link
            to="/Product"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            Product
          </Link>
          <Link
            to="/services"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            Services
          </Link>
          <Link
            to="/News"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            News
          </Link>
          <Link
            to="/our-journey"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            Our Journey
          </Link>
          {/* <Link
            to="/Investor"
            className="text-black font-light text-base sm:text-lg hover:font-semibold hidden 2xl:block"
          >
            Investor & Mentor
          </Link> */}
        </div>

        <div className="w-1/2 md:w-4/5 lg:w-1/2 2xl:w-[40%] h-full flex items-center justify-end gap-4 sm:gap-8">
          <div className="hidden md:block w-[65%] px-5 py-2 rounded-full bg-gray-100 text-gray-800">
            <form className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Name /Mobile no. /Pan Card no. /Aadhaar Card no."
                className="w-[95%] bg-transparent outline-none"
                onClick={() => {setShowDialog(true); setMenuOpen(false)}}
              />
              <BsSearch
                className="hover:cursor-pointer text-gray-500"
                type="submit"
              />
            </form>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => {
                setShowForm(true);
                setShowDialog(false);
                handleLinkClick("/login");
              }}
              className="bg-black text-white font-bold py-2 px-4 lg:px-6 xl:px-8 2xl:px-10 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Responsive Menu Icon for Smaller Screens */}
          <div className="block 2xl:hidden">
            <button onClick={() => {setMenuOpen(!menuOpen); setShowDialog(false); }}>
              {menuOpen ? (
                <IoCloseSharp className="text-black text-3xl" />
              ) : (
                <RiMenu3Fill className="text-black text-3xl" />
              )}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute top-20 right-0 bg-white w-full md:w-[80%] lg:w-[50%] text-black z-50 shadow-lg 2xl:hidden">
              <div className="flex flex-col gap-4 p-5">
                <button
                  onClick={() => handleLinkClick("/about")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  About
                </button>
                <button
                  onClick={() => handleLinkClick("/Product")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  Product
                </button>
                <button
                  onClick={() => handleLinkClick("/services")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  Services
                </button>
                <button
                  onClick={() => handleLinkClick("/News")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  News
                </button>
                <button
                  onClick={() => handleLinkClick("/our-journey")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  Our Journey
                </button>
                {/* <button
                  onClick={() => handleLinkClick("/Investor")}
                  className="text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  Investor & Mentor
                </button> */}
                <div className="md:hidden">
                  <form>
                    <input
                      type="text"
                      placeholder="Name /Mobile no. /Pan Card no. /Aadhaar Card no."
                      className="w-full px-5 py-2 rounded-full bg-gray-100 text-gray-800 outline-none"
                      onClick={() => {
                        setShowDialog(true);
                        setMenuOpen(false);
                      }}
                    />
                    <button
                      className="w-full mt-4 h-10 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition duration-300"
                      type="submit"
                      onClick={() => {
                        setShowDialog(true);
                        setMenuOpen(false);
                      }}
                    >
                      Search
                    </button>
                  </form>
                </div>
                <button
                  onClick={() => {
                    setShowForm(true);
                    setShowDialog(false);
                    handleLinkClick("/login");
                  }}
                  className="md:hidden text-left text-gray-800 font-light text-lg hover:text-black"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Conditional rendering of the Login/Register Form */}
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-md z-50"
          onClick={() => {
            setShowForm(false);
            navigate('/');
          }}
        >
          <Login />
        </div>
      )}

      {/* New Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-md z-50"
        onClick={() => {
          setShowDialog(false);
        }}>
          <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 xl:w-1/4">
            <h2 className="text-xl font-bold mb-4">Our Search Feature is Coming Soon!</h2>
            <p>Get ready to unlock a world of possibilities with our upcoming search feature! Soon, you’ll be able to easily locate and manage your assets like never before. Stay tuned for a seamless experience that empowers you to discover hidden opportunities and take control of your financial future. We can’t wait to share this powerful tool with you!</p>
            <button 
              className="mt-4 bg-black text-white px-4 py-2 rounded"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
