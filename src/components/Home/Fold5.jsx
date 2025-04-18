import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const Fold5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Vealthx?",
      answer: "Vealthx is a platform designed to help individuals manage their financial assets and navigate the complexities of wealth management. It offers tools for discovering, tracking, and recovering unclaimed or undiscovered assets, along with features for estate planning, such as will creation. By consolidating various financial resources into a single, userfriendly dashboard, Vealthx empowers users to take control of their financial futures, ensuring that they can secure and manage their wealth effectively. The platform aims to simplify the financial recovery process and provide guidance and support to users throughout their journey."
    },
    {
      question: "What obstacles do Indian families face concerning unclaimed assets today?",
      answer: "Indian families face several obstacles regarding unclaimed assets today, including:<ul style= 'list-style-type: disc; padding-left:3%'><li><strong>Lack of Awareness: </strong>Many families are unaware of the existence of unclaimed assets, which can include bank accounts, insurance policies, and property.</li><li><strong>Complexity of Recovery: </strong>The process of recovering unclaimed assets can be complex and bureaucratic, often requiring extensive documentation and legal procedures.</li><li><strong>Inheritance Issues: </strong>Disputes over asset distribution among family members can arise, particularly if clear records or wills are not available.</li><li><strong>Limited Access to Information: </strong>Accessing information about unclaimed assets can be challenging due to fragmented databases and lack of centralized resources.</li><li><strong>Legal and Regulatory Hurdles: </strong>Families may encounter legal challenges or regulatory requirements that complicate the recovery process.</li><li><strong>Emotional Stress: </strong>The search for unclaimed assets can be emotionally taxing, especially during times of loss or transition.</li><li><strong>Time-Consuming Processes: </strong>The lengthy procedures involved in identifying and claiming assets can lead to frustration and delays.</li></ul> Addressing these obstacles can empower families to recover and manage their financial resources more effectively."
    },
    {
      question: 'Why do assets become "Unclaimed"?',
      answer: 'There are several reasons why assets become unclaimed or separated from their rightful owners. Common causes include:<ul> <li>Death of the asset holder, with the legal heirs or nominees not identifying or being aware of the asset.</li> <li>Changing residences and forgetting to update the bank or other providers with your new address.</li> <li>Fraudulent activities, such as unauthorized changes to names or addresses.</li> <li>Making investments and either forgetting about them or failing to inform family members, such as a spouse or children.</li></ul>'
    },
    {
      question: "What are the services provided by VealthX?",
      answer:"Vealthx offers a range of services designed to help individuals manage and recover their financial assets effectively. These services include:<ul  style= 'list-style-type: disc; padding-left:3%'> <li><b>Asset Discovery: </b>  Identifies unclaimed or forgotten assets such as bank accounts, insurance policies, and retirement funds by searching multiple databases.</li> <li><b>Claims Management:</b> Simplifies the process of initiating and managing claims for discovered assets, providing step-by-step guidance to ensuresuccessful recovery.</li> <li><b>Asset Aggregation: </b> Consolidates all discovered assets into a single dashboard, allowing users to easily manage and track their financial portfolio in real-time.</li> <li><b>Will Creation: </b> Enables users to draft and customize legal wills online, ensuring that their assets are distributed according to their wishes while providing guidance on maintaining and updating the will. </li> <li><b>Legal Support: </b> Offers resources and assistance to navigate legal or bureaucratic challenges associated with asset recovery and estate planning.</li> <li><b>Education and Resources: </b> Delivers informative content and resources to educate users about asset management, estate planning, and financialliteracy</li> </ul>These services empower individuals to take control of their financial futures, ensuring they can recover, manage, and secure their assets effectively."
    },
    {
      question: "What does a Vealthx advisor do, and how can they help you unlock your financial potential?",
      answer: "Vealthx Advisors are professional financial experts dedicated to supporting you with comprehensive wealth management services. They assist in locating unclaimed funds, guiding you through the recovery process, and ensuring peace of mind. Our advisors can also provide expert guidance on all the services offered by Vealthx."
    },
    {
      question: "Who can use the service of Vealthx?",
      answer: "Anyone who is an adult, aged 18 years or older, and a resident of India can register to become a user of the VealthX platform. Additionally, corporations can centrally onboard VealthX to offer privileged services to their employees."
    }
  ];

  return (
    <div className='py-8 '>
      <h1 className='text-center text-3xl sm:text-5xl md:text-5xl font-bold text-[#4F37BF]'>Discover All the Answers You’re Looking For! </h1>
      {/* <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">FAQs!</h2> */}

      

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 py-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium pr-4">{faq.question}</span>
              <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''} flex-shrink-0`}>
                <FaPlus className='text-green-600'/>
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <div 
                  className="text-base sm:text-lg faq-answer"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fold5
