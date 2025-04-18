import React from "react";
import { Link } from "react-router-dom";
import Aboutbg from "./assets/images/aboutbg.png";
import Gurashant from "./assets/images/Gurashant.jpg";
import Parashuram from "./assets/images/Parashuram.jpg";
import Mallikarjun from "./assets/images/Mallikarjun.jpg";
import Rajesh from "./assets/images/Rajesh.png";

const people = [
  {
    name: "Gurashant Hanchinal",
    role: "CEO",
    imageUrl: Gurashant,
  },
  {
    name: "Parashuram Hallur",
    role: "To be CPO & CGO",
    imageUrl: Parashuram,
  },
  {
    name: "Rajesh G",
    role: "Principal Officer",
    imageUrl: Rajesh,
  },
];

const About = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${Aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex items-center justify-center"
      >
        <div className="hero min-h-screen w-full px-6 sm:px-10 lg:px-20 xl:px-32 py-16 sm:py-24 lg:py-28 xl:py-36 flex flex-col justify-center items-start bg-opacity-70 bg-black">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-snug mb-14">
            About Us
          </h1>
          <p className="text-white text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed max-w-5xl text-justify mb-14">
          Vealthx stands at the forefront of asset management and recovery, dedicated to transforming the way individuals and families navigate their financial journeys. Our innovative platform is designed to simplify the complexities surrounding unclaimed or overlooked assets, empowering clients to reclaim what is rightfully theirs. At Vealthx, we are not just a service; we are your partners in securing a confident and prosperous financial future.
          </p>
          <Link
            to="/TryVealthxNow"
            className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg text-lg sm:text-xl hover:bg-yellow-400 transition-colors"
          >
            Try Vealthx Now
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="min-h-fit p-10 lg:px-48 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
          Mission
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center">
            <div className="pl-4 border-l-4 border-yellow-500">
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed font-light">
              Our mission is to bridge the gap between individuals and their financial entitlements. At Vealthx, we empower our clients with the knowledge and tools they need to uncover hidden assets and master the intricacies of asset recovery. We are committed to promoting financial literacy and awareness, enabling individuals to make informed choices that enhance their financial well-being. Through unwavering dedication and exceptional service, we strive to elevate the financial health of every client we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="min-h-fit p-10 lg:px-48 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
        Vision
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center">
            <div className="pl-4 border-l-4 border-yellow-500">
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed font-light">
              At Vealthx, we envision a future where financial peace of mind is a certainty for all. Our goal is to create a transformative ecosystem that empowers individuals to master their wealth effortlessly. We are committed to revolutionizing asset management and recovery, delivering seamless and empowering experiences. Through our innovative solutions, we aim to build trust, enhance security, and establish Vealthx as the premier partner in achieving financial empowerment and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Our Team Section */}
      <div className="flex flex-col items-center p-5">
        <div className="w-full text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Our Team
        </div>
        <div className="flex flex-col md:flex-row p-10 lg:px-48 lg:py-16">
          <div className="w-full flex flex-col justify-center">
            <div className="pl-4 border-l-4 border-yellow-500">
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed font-light">
              The Vealthx team comprises experienced financial professionals and innovative technology experts united by a shared passion: making a meaningful difference in our clients' lives. With a wealth of knowledge and experience, we are dedicated to understanding your unique needs and delivering tailored solutions that empower your financial success. Together, we are committed to guiding you toward financial empowerment and security, ensuring you have a steadfast ally in your journey
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-8">
          <div className="flex flex-wrap justify-center gap-36 max-w-7xl">
            {people.map((person, index) => (
              <div
                key={index}
                className="flex flex-col bg-slate-100 shadow-xl rounded-lg overflow-hidden w-72 transition-transform duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={person.imageUrl}
                    alt={`${person.name}-image`}
                    className={`object-cover object-top w-full h-full transition-transform duration-300 hover:scale-110 ${
                      person.name === "Rajesh G" ? "object-top" : "object-center"
                    }`}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg text-gray-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
