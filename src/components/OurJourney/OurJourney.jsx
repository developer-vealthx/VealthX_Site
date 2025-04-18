import React from 'react';
import Trackimg from './assets/images/ourjourney.jpg';
import Background from './assets/images/OurJourneybg.png';
import Boxground from './assets/images/boxbg.png';

const OurJourney = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <img 
        src={Background} 
        className="fixed top-0 right-0 z-[-1] h-full w-full object-cover" 
        alt="Background" 
      />

      {/* Title Section */}
      <div className="flex items-center justify-center font-bold text-5xl sm:text-6xl md:text-7xl h-[20vh] text-center">
        <div className="mt-[15px]">Our Journey</div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start h-auto md:h-[90%] p-4 md:p-0">
        {/* Left Spacer for layout alignment */}
        <div className="w-[5%] md:w-[10%] h-full hidden md:block"></div>

        {/* Main Content with Black Outline */}
        <div 
          className="w-full md:w-[80%] text-base sm:text-lg md:text-xl lg:text-2xl p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl space-y-8"
          style={{
            backgroundImage: `url(${Boxground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textShadow: '2px 2px 4px #000',
          }}
        >
          <p className="mb-6">
            At <b>Vealthx</b>, we are driven by a singular mission: to empower families and individuals in securing and preserving their financial legacy. Our journey began with the recognition of a pressing issue—over over ₹2,00,000 (two Lakh Crores) Crores of unclaimed funds in India, coupled with the complexity of wealth management in today’s fast-evolving financial landscape. We saw not only a challenge but also an opportunity to transform the way wealth is discovered, managed, and transferred across generations.
          </p>
          <p>
            Our founders bring together decades of experience in finance, technology, and innovation. Our platform is built on cutting-edge technologies like AI/ML, combined with regulatory frameworks such as the <b>RBI’s Account Aggregator</b> and <b>Consent Frameworks</b>, to deliver a seamless, secure, and transparent experience in asset discovery and wealth management.
          </p>
          <p>
            We are more than just a financial service provider—we are a partner in navigating life’s financial complexities. From comprehensive legal services and end-to-end claim settlement to strategic partnerships with leading service providers, Vealthx offers a holistic, one-stop solution for managing wealth. Our focus is not just on the present but on building long-term value that transcends generations.
          </p>
          <p>
            What sets us apart is our commitment to making a meaningful social impact. We believe in leveraging technology not just for innovation’s sake but to provide real, tangible benefits to families across India. Our platform simplifies the complexities of wealth management, ensuring that families can safeguard their assets while focusing on what matters most—each other.
          </p>
          <p>
            As we continue to grow and evolve, our vision remains the same: to create a future where financial security is accessible to all and the transfer of wealth is seamless, transparent, and stress-free. Join us on this transformative journey as we redefine the future of wealth management and help secure a better tomorrow for generations to come.
          </p>
          <p>
            Anyone who is an adult, aged 18 years or older, and a resident of India can register to become a user of the VealthX platform. Additionally, corporations can centrally onboard VealthX to offer privileged services to their employees.
          </p>

          {/* Traction and Roadmap Image */}
          <div className="flex justify-center">
            <img 
              src={Trackimg} 
              className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] rounded-lg border-4" 
              alt="Traction and Roadmap" 
            />
          </div>
        </div>

        {/* Right Spacer for layout alignment */}
        <div className="w-[5%] md:w-[10%] h-full hidden md:block"></div>
      </div>
      
      <div className="w-full h-[10vh]">
        {/* Additional spacing at the bottom */}
      </div>
    </div>
  );
}

export default OurJourney;
