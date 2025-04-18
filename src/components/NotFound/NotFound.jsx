import React from "react";
import bgImage from "./assets/images/Notfoundbg.png";
import "./assets/css/Notfound.css"
import { Link } from "react-router-dom"; // Import Link for navigation

const NotFound = () => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`, // Corrected this line
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center w-full max-w-3xl mx-auto">
        {/* Main Heading */}
        <h1
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-shadow"
          style={{ letterSpacing: "0.1em", color: "#ffffff" }} // Main heading with white font
        >
          Oops! Page Not Found
        </h1>

        {/* 404 Error Message */}
        <div className="flex flex-col items-center justify-center" style={{ color: "#ffffff" }}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
            404 Error - Sorry, the page you <span className="text-yellow-400">looking</span> for does not exist!
          </h2>

          <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
            Don't worry, let's get you back on track.
          </p>

          {/* Call to Action Button with Link tag */}
          <Link
            to="/" // Use Link instead of a tag
            className="px-6 py-3 bg-yellow-400 text-black font-semibold text-md rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Return to Home
          </Link>
        </div>

        {/* Parallax Effect */}
        <div className="parallax-stars">
          <div className="star" style={{ animationDelay: "0s" }}></div>
          <div className="star" style={{ animationDelay: "1s" }}></div>
          <div className="star" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
