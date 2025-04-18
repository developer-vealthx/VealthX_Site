import React, { useState, useEffect } from "react";
import bgImage from "./assets/images/bg.png";
import video from "./assets/images/vealthx.mp4" // Import your video file

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2025-01-29T00:00:00"); // Updated target date to 90 days from 30/10/2024
    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center text-center p-4 overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})`, paddingTop: "80px" }}
    >
      <div className="container mx-auto">
        {/* Countdown Section */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 lg:mb-12 text-shadow">
          Launching soon
        </h1>
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            Something <span className="text-yellow-400">Awesome</span> is Coming
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8">
            Stay tuned— exciting things are on the horizon! In the meantime, take a sneak peek at our product preview!!
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
              const value =
                index === 0
                  ? timeLeft.days
                  : index === 1
                  ? timeLeft.hours
                  : index === 2
                  ? timeLeft.minutes
                  : timeLeft.seconds;
              return (
                <div key={label} className="flex flex-col items-center">
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                    {value}
                  </p>
                  <p className="text-sm sm:text-lg md:text-xl">{label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-center w-full mt-10 overflow-x-hidden">
          <video
            className="max-w-full object-contain rounded-[11%] h-[70vh] "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
