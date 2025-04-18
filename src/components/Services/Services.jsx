import React from 'react';  
import backgroundImage from "./assets/images/Servicesbg.png"; // Fixed import variable name
import boxBackground from './assets/images/boxBackground.png';

const Services = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: '7rem',
      }}
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Content Section */}
        <div 
          className="w-full z-10 p-5 box-border pr-4"
          style={{ marginTop: '-2rem' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">EXCLUSIVE FEATURES</h1><br/><br/>

          {/* Features Mapping */}
          {[
            {
              title: "Discovery of Assets",
              content: "Helps you and your family to identify potential unclaimed or undiscovered assets that you or your family may be entitled to. Through advanced search and data analysis, Vealthx simplifies the process of locating these assets, providing you with a clear overview of what's available that you can uncover hidden wealth and make informed decisions about your financial future."
            },
            {
              title: "Legal Services",
              content: "Expert assistance for you to navigate the legal complexities of asset discovery, claims, and wealth transfer. By providing access to qualified legal professionals, this feature ensures that you receive the necessary guidance to resolve disputes, process claims, and manage inheritance matters with confidence and compliance. It streamlines the legal process, making it easier for you to protect and claim your assets."
            },
            {
              title: "Nominee Update",
              content: "Easily manage and update the designated beneficiaries for your assets. Ensures that you can promptly make changes to nominees as needed, keeping your asset distribution plans current and aligned with your preferences. Simplify the process of securing the future of loved ones by ensuring the right individuals are set to inherit the assets."
            },
            {
              title: "Heritage Services",
              content: "Preserve and manage your legacy through comprehensive estate planning and asset protection. Provides guidance on safeguarding valuable assets, family heirlooms, and wealth for future generations, ensuring a lasting impact. With tailored support, you can create a long-term strategy to honor your heritage while efficiently managing the transfer of wealth."
            },
            {
              title: "Claim Settlements",
              content: "Streamlines the process of recovering unclaimed or undiscovered assets. It provides you with step-by-step assistance in submitting and tracking claims, ensuring that all legal and procedural requirements are met. Simplifies the settlement process, reducing delays and helping you efficiently reclaim your entitled assets."
            },
            {
              title: "Estate Management",
              content: "Expert support for managing and organizing property and assets within an estate. It assists you with tasks such as estate planning, asset distribution, and legal compliance to ensure a smooth and efficient transfer of wealth. Simplify the complexities of estate management, helping you protect your assets and preserve your legacy for future generations."
            },
            {
              title: "Emergency Services",
              content: "Emergency Services -At Vealthx, we offer rapid support for navigating medical insurance claims and critical illness riders. Our dedicated team is here to assist you in understanding your policy benefits, streamlining the claims process, and securing timely updates on your coverage. With our expertise, you can confidently manage unexpected health challenges, ensuring that you receive the support you need when it matters most."
            },
            {
              title: "Wealth Management APIs",
              content: "Seamless integration with financial tools and platforms, enabling you and financial institutions to access, manage, and analyze wealth data efficiently. These APIs offer secure connectivity for tracking assets, monitoring portfolios, and automating financial processes, making wealth management more streamlined and customizable to individual needs. Enhances user control over financial decisions with real-time data and insights."
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="mb-3 p-6 rounded-lg flex flex-col justify-between"
              style={{
                backgroundImage: `url(${boxBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                color: 'white',
                height: 'auto', // Change height to auto for flexibility
              }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{feature.title}</h2>
                <p className="leading-relaxed text-lg sm:text-xl">
                  {feature.content}
                </p>
              </div>
              <div className="mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
