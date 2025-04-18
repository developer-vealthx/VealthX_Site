import React from "react";
import Background from "./assets/images/Newbg.png";
import Boxground from "./assets/images/boxbg.jpg";

const News = () => {
  const events = [
    {
      title: "Singapore Expo Festival 2024",
      data: "18th oct 2024",
      content: `We are excited to announce that Vealthx will be participating in the 
        Singapore Fintech Festival 2024, Asia’s leading platform for fintech 
        innovation and networking. The event will take place from November 6–8, 
        and we look forward to showcasing how our asset discovery platform is 
        revolutionizing the way individuals and families identify and claim 
        unclaimed assets. At Vealthx, we are on a mission to bring transparency 
        and accessibility to the world of lost and unfound wealth. Our team will 
        be at Booth [#XXX], where we will demonstrate our cutting-edge tools that 
        simplify asset recovery and empower individuals to unlock hidden financial 
        opportunities. Join us for live demonstrations, insightful discussions, and 
        to explore how Vealthx is reshaping the financial landscape. We look forward 
        to seeing you at the Singapore Expo for this exciting event! <br />
        <br />
        Event Details:<br />
        - Date: November 6–8, 2024<br />
        - Venue: Singapore Expo<br />
        - Booth: [#XXX]<br />
        <br />
        For more information or to schedule a meeting with our team, please visit 
        www.vealthx.com.`,
    },
    {
      title: "Bengaluru Tech Summit 2024",
      data: "24th Oct 2024",
      content: `We are thrilled to announce that Vealthx will be participating in the 
        Bengaluru Tech Summit 2024, Asia's largest Tech Conclave. From November 19–21, 
        we will be showcasing our innovative asset discovery platform, which is 
        transforming the way individuals and families recover unclaimed assets globally. 
        Vealthx empowers people to identify and reclaim forgotten wealth through our 
        user-friendly platform, which leverages cutting-edge technology to provide 
        seamless asset recovery. Visit us at Booth [#XXX] for live demonstrations, 
        engaging conversations, and to learn how Vealthx is bringing financial freedom 
        to more people by unlocking hidden assets. Don't miss the opportunity to connect 
        with industry leaders and explore the future of tech-driven financial solutions.<br />
        <br />
        Event Details:<br />
        - Date: November 19–21, 2024<br />
        - Venue: Bangalore Palace, Bengaluru<br />
        - Booth: [#XXX]<br />
        <br />
        We look forward to meeting you at this exciting event. For more information or 
        to book a meeting with our team, visit www.vealthx.com.`,
    },
    {
      title:
        "VealthX Partners with Zolvit to Enhance Financial Recovery Solutions",
      data: "22nd Aug 2024",
      content: `Vealthx, a leading platform in asset management and recovery, is excited to announce a strategic partnership with Zolvit, formerly known as Vakilsearch, a renowned provider of innovative legal services. This collaboration aims to enhance the solutions available for individuals and families seeking to uncover and reclaim unclaimed assets. With this partnership, VealthX and Zolvit will leverage their respective expertise to create a comprehensive suite of services that streamlines the asset discovery and recovery process. Together, they will develop advanced tools and resources designed to provide clients with greater transparency and efficiency in managing their wealth.`,
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={Background}
        className="fixed top-0 right-0 z-[-1] h-full w-full object-cover"
        alt="Background"
      />

      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-1 py-4 md:p-20"
        >
          {/* Title Section */}
          <div className="mb-10 flex flex-col justify-center">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-center max-w-[120vh]">
              {event.title}
            </h1>
            {/* <h1 className="font-bold text-md sm:text-lg md:text-xl text-center py-2">{event.data}</h1> */}
          </div>

          {/* Content Section */}
          <div
            className="w-full max-w-[90%] text-base sm:text-lg md:text-xl lg:text-2xl space-y-8 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl"
            style={{
              backgroundImage: `url(${Boxground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="font-bold text-md sm:text-lg md:text-xl">
              {event.data}
            </h1>
            <p
              style={{ textShadow: "2px 2px 4px #000" }}
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
