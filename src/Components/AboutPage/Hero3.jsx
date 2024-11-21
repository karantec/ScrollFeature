import React from 'react';
import { FaPaintBrush, FaCog, FaUserTie, FaServer, FaLaptop, FaUsers } from 'react-icons/fa'; // Importing different icons
import { BiSupport } from "react-icons/bi";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
const TeamSection = () => {
  const teamMembers = [
    { name: "Support Team", role: "UI Designer", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
    { name: "Creative Products", role: "CTO", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
    { name: "Easy Shipment", role: "Founder", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
    { name: "Quality Control", role: "DevOps", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
    { name: "Premium Material", role: "Software Engineer", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
    { name: "Client Management", role: "UX Researcher", desc: "The Indian rupee is the official currency in the Republic of India. The rupee is " },
  ];

  const roleToIcon = {
    "UI Designer": <BiSupport size={30} color="orange" />, // Orange color added
    "CTO": <LiaCreativeCommonsShare size={30} color="orange" />, // Orange color added
    "Founder": <MdOutlineLocalShipping size={30} color="orange" />, // Orange color added
    "DevOps": <FaServer size={30} color="orange" />, // Orange color added
    "Software Engineer": <FaLaptop size={30} color="orange" />, // Orange color added
    "UX Researcher": <FaUsers size={30} color="orange" />, // Orange color added
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-15 mx-auto">
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-start p-4 rounded-lg">
                <div className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                  {roleToIcon[member.role] } {/* Default icon if no match */}
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-medium title-font">{member.name}</h2>
                  <p className="text-gray-500">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
