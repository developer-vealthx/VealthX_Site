import React, { useState, useEffect } from "react";
import "./assets/css/ComingSoon.css";
import bgImage from "./assets/images/ComingSoonbg.png"; // Make sure this path is correct

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2025-02-31T00:00:00"); // Replace with your target date
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
      className="h-screen w-full grid place-items-center bg-cover bg-center text-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", // Ensures the background image covers the entire section
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 lg:mb-8 text-shadow">
          Launching soon
        </h1>
        <div className="flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-7 lg:mb-8">
            Something <span className="text-yellow-400">Awesome</span> is Coming
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-7">
            Stay tuned— exciting things are on the horizon! In the meantime, take a sneak peek at our product preview!!
          </p>
          <div className="flex space-x-3 sm:space-x-5">
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                {timeLeft.days}
              </p>
              <p className="text-sm sm:text-base md:text-lg">Days</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                {timeLeft.hours}
              </p>
              <p className="text-sm sm:text-base md:text-lg">Hours</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                {timeLeft.minutes}
              </p>
              <p className="text-sm sm:text-base md:text-lg">Minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                {timeLeft.seconds}
              </p>
              <p className="text-sm sm:text-base md:text-lg">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
