import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const FeatureSection = () => {
  // Content data defined in the same file
  const content = {
    heading: "Contact Information",
    description: "Say something to start a live chat!",
    contactDetails: {
      phone: "+1 (234) 567-890",
      email: "contact@example.com",
      address: "132 Dartmouth Street Boston,\nMassachusetts 02156 United States",
    },
    buttonText: "Contact now",
    imageSrc: "About4.png",
    imageAlt: "feature",
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt={content.imageAlt}
            className="object-cover object-center w-full h-full"
            src={content.imageSrc}
            style={{ maxWidth: "40rem", maxHeight: "30rem" }}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
          <div className="flex flex-col mb-10 lg:items-start items-start">
            <div className="flex-grow">
              <h1 className="text-gray-900 text-3xl lg:text-4xl title-font font-bold mb-3">
                {content.heading}
              </h1>
              <p className="leading-relaxed text-base text-gray-700">
                {content.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-start">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center space-x-4 lg:space-x-20 mt-5 mb-4">
              {/* Phone */}
              <div className="flex items-center space-x-2 mb-2 lg:mb-0">
                <FaPhone className="text-black" size={20} />
                <span className="text-black">{content.contactDetails.phone}</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 mb-2 lg:mb-0">
                <FaEnvelope className="text-black" size={20} />
                <span className="text-black">{content.contactDetails.email}</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2 mt-5 mb-4">
              <FaMapMarkerAlt className="text-black" size={20} />
              <span className="text-black">
                {content.contactDetails.address.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </div>

            {/* Contact Now Button */}
            <div className="flex items-center mt-6 space-x-2">
              <button className="text-white bg-orange-500 py-2 px-4 rounded hover:bg-orange-600 w-full lg:w-80">
                {content.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
