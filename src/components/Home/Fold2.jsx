import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import iphone from "./assets/svg/iPhone_16_Pro.svg";
import Discover from "./assets/images/Discover.png";
import Aggregate from "./assets/images/Aggregate.png";
import Will from "./assets/images/Will.png";
import Claim from "./assets/images/claim.png";
gsap.registerPlugin(ScrollTrigger);

const Fold2 = () => {
  // useEffect(() => {
  //   const updateAnimations = () => {
  //     const isMobile = window.innerWidth < 768; // Mobile breakpoint
  //     const isTablet = window.innerWidth >= 768; // Tablet breakpoint
  //     // Desktop is implicitly anything >= 768px

  //     // Clear existing animations
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //     gsap.killTweensOf(".iphoneImg");

  //     const t1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold22",
  //         start: "0% 100%",
  //         end: "40% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t1.to(".iphoneImg", {
  //       top: isMobile ? "35%" : isTablet ? "28%" : "28%",
  //       left: isMobile ? "50%" : isTablet ? "25%" : "25%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });

  //     const t2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold23",
  //         start: "0% 100%",
  //         end: "50% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t2.to(".iphoneImg", {
  //       top: isMobile ? "60%" : isTablet ? "55%" : "55%",
  //       left: isMobile ? "50%" : isTablet ? "75%" : "75%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });

  //     const t3 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold24",
  //         start: "5% 100%",
  //         end: "50% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t3.to(".iphoneImg", {
  //       top: isMobile ? "85%" : isTablet ? "78%" : "78%",
  //       left: isMobile ? "50%" : isTablet ? "25%" : "25%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });
  //   };

  //   // Initial setup
  //   updateAnimations();

  //   // Update on window resize
  //   window.addEventListener("resize", updateAnimations);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("resize", updateAnimations);
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, []);

  return (
    <>
      <div className="fold2 bg-white w-full rounded-t-[2%] relative py-4">  {/* pt-[10vh] */}

        <div className="flex flex-col sm:flex-row">
          <div className="w-full md:w-1/2 sm:h-[80vh] px-10 sm:pr-0 sm:pl-10 lg:pl-20 2xl:pl-40 flex justify-evenly items-between flex-col sm:pt-28 pb-4">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">Discover</h1>
            <p className="text-lg md:text-xl text-justify font-semibold mt-4">
            Uncover hidden, unclaimed, and forgotten assets effortlessly with Vealthx Discovery. From lost bank accounts and insurance policies to retirement funds and other financial assets, our advanced search algorithms comb through multiple databases to find opportunities that may belong to you. Leveraging extensive data sources, VealthX streamlines the asset recovery process, simplifying it for you and your family. With just a few clicks, reveal and reclaim the financial resources that are rightfully yours unlocking the full potential of your wealth has never been easier.
            </p>
            <Link
              to="/login"
              className="w-fit text-center py-3 px-8 text-lg md:text-xl font-semibold bg-black text-white rounded-full mt-4"
            >
              More...
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:h-[80vh] flex items-center justify-center">
            <img
              src={Discover}
              alt="iphone"
              className="iphoneImg w-[20vh] md:w-[25vh] lg:w-[28vh] xl:w-[33vh]"
              style={{ transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)" }}
            />
          </div>
        </div>

        <div className="fold22 min-h-[85vh] flex flex-col sm:flex-row mt-24">
          <div className="w-full md:w-1/2 md:h-[80vh] flex items-center justify-center order-2 sm:order-1">
            <img
              src={Claim}
              alt="iphone"
              className="w-[25vh] md:w-[28vh] lg:w-[33vh]"
            />
          </div>
          <div className="w-full md:w-1/2 sm:h-[80vh] px-10 sm:pl-0 sm:pr-10 lg:pr-20 2xl:pr-40 flex justify-evenly items-between flex-col sm:pt-28 order-1 sm:order-2 pb-4">
            <h1 className="font-bold text-5xl md:text-7xl">Claims</h1>
            <p className="text-lg md:text-xl text-justify font-semibold mt-4">
            Simplifies the process of claiming unclaimed or undiscovered assets once they are identified. After using our Discovery feature to locate potential assets, you can easily initiate and manage your claims directly through the platform. This feature walks you through each necessary step, ensuring you complete all required documentation and submissions efficiently. To further support you, Vealthx offers resources to navigate any legal or bureaucratic challenges, making it easier for you to recover and reclaim your assets with minimal hassle. With our Claims feature, you can confidently take charge of your financial recovery and secure what is rightfully yours.
            </p>
            <Link
              to="/login"
              className="w-fit text-center py-3 px-8 text-xl font-semibold bg-black text-white rounded-full mt-4"
            >
              More...
            </Link>
          </div>
        </div>

        <div className="fold23 min-h-[85vh] flex flex-col sm:flex-row mt-24">
          <div className="w-full md:w-1/2 sm:h-[80vh] px-10 sm:pr-0 sm:pl-10 lg:pl-20 2xl:pl-40 flex justify-evenly items-between flex-col sm:pt-28 pb-4">
            <h1 className="font-bold text-5xl md:text-7xl">Aggregate</h1>
            <p className="text-lg md:text-xl text-justify font-semibold mt-4">
            Consolidates all discovered assets into one comprehensive view, making it easy for you to manage and track both your financial recoveries and current assets—whether owned or inherited. This feature collects information from various asset types, including bank accounts, insurance policies, retirement funds, and more, all within a single dashboard. With a holistic view of your asset portfolio, you can stay organized and monitor the status of each claim in real-time. The Aggregate feature ensures that nothing goes overlooked, streamlining the entire recovery process for maximum efficiency and clarity. Take control of your financial journey with confidence!
            </p>
            <Link
              to="/login"
              className="w-fit text-center py-3 px-8 text-xl font-semibold bg-black text-white rounded-full mt-4"
            >
              More...
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:h-[80vh] flex items-center justify-center">
            <img
              src={Aggregate}
              alt="iphone"
              className="w-[25vh] md:w-[28vh] lg:w-[33vh]"
            />
          </div>
        </div>

        <div className="fold24 min-h-[85vh] flex flex-col sm:flex-row mt-24">
          <div className="w-full md:w-1/2 md:h-[80vh] flex items-center justify-center order-2 sm:order-1">
            <img
              src={Will}
              alt="iphone"
              className="w-[25vh] md:w-[28vh] lg:w-[33vh]"
            />
          </div>
          <div className="w-full md:w-1/2 sm:h-[80vh] px-10 sm:pl-0 sm:pr-10 lg:pr-20 2xl:pr-40 flex justify-evenly items-between flex-col sm:pt-28 order-1 sm:order-2 pb-4">
            <h1 className="font-bold text-5xl md:text-7xl">Make a Will</h1>
            <p className="text-lg md:text-xl text-justify font-semibold mt-4">
            Empower yourself to effortlessly create and customize your own legal will online, ensuring that your assets are distributed according to your wishes. This feature transforms estate planning into a straightforward journey, offering a step-by-step guide to crafting a will that meets all legal standards. You can easily specify beneficiaries, designate asset distribution, and include personal instructions—all through a userfriendly interface designed with you in mind. Moreover, Vealthx provides ongoing guidance for updating and maintaining your will, ensuring it evolves alongside your life changes and stays compliant with legal requirements. With this feature, you can achieve peace of mind, knowing that your legacy is secure, and your loved ones are well protected. Take the first step toward safeguarding your future today!
            </p>
            <Link
              to="/login"
              className="w-fit text-center py-3 px-8 text-xl font-semibold bg-black text-white rounded-full mt-4"
            >
              More...
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Fold2;
