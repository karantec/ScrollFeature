import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection1 = () => {
  // Define content as an object within the file
  const content = {
    heading: "History of Noorani Company",
    description: `
      The Indian rupee is the official currency in the Republic of India. The rupee 
      is The Indian rupee is the official currency in the Republic of India. The
      rupee is The Indian rupee is the official currency in the Republic of India. 
      The rupee is The Indian rupee is the official currency in the Republic of India. 
      The rupee is The Indian rupee is the official currency in the Republic of India.
    `,
    imageAlt: "hero",
    imageSrc: "About2.png",
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg border-2 border-orange-400"
            alt={content.imageAlt}
            src={content.imageSrc}
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {content.heading}
          </h2>
          <p className="mb-8 leading-relaxed text-start">
            {content.description.split("\n").map((line, index) => (
              <span key={index}>
                {line.trim()}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
