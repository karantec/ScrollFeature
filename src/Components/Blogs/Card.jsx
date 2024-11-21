import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Make sure you have react-icons installed

const GallerySection = () => {
  // JSON data directly in the file
  const blogData = [
    {
      "author": "Alice Whitten",
      "date": "1 Jan 2023",
      "title": "Bill Walsh leadership lessons",
      "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      "image": "card1.png"
    },
    {
      "author": "Demi WIlkinson ",
      "date": "1 Jan 2023",
      "title": "PM Mental Models",
      "description": "Mental models are simple expressions of complex processes or relationships.",
      "image": "imag22.png"
    },
    {
      "author": "Candice Wu ",
      "date": "1 Jan 2023",
      "title": "What is Wireframing?",
      "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      "image": "image 22.png"
    },
    {
        "author": "Alice Whitten",
        "date": "1 Jan 2023",
        "title": "Bill Walsh leadership lessons",
        "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        "image": "image 23.png"
      },
      {
        "author": "Demi WIlkinson ",
        "date": "1 Jan 2023",
        "title": "PM Mental Models",
        "description": "Mental models are simple expressions of complex processes or relationships.",
        "image": "image 24.png"
      },
      {
        "author": "Candice Wu ",
        "date": "1 Jan 2023",
        "title": "What is Wireframing?",
        "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        "image": "image 25.png"
      },
      
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Related Blogs</h1>
            
          </div>
        </div>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index} className="p-6 rounded-lg ">
              <img className="h-40 w-full object-cover object-center mb-6" src={blog.image} alt={blog.title} />
              <p className='text-red-800 font-bold'>{blog.author} <span className="inline-block h-2 w-2 bg-red-800 rounded-full"></span> {blog.date}</p>
              {/* Title with Arrow */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg text-gray-900 font-medium title-font">{blog.title}</h2>
                <MdOutlineArrowOutward className="text-black text-xl" />
              </div>
              <p className="leading-relaxed text-base">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
