import React from "react";

const FeatureProducts = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-orange-600">Feature Products</h2>
      </div>

      {/* Main Section */}
      <div className="flex justify-center items-start gap-8">
        {/* Banner Section (30% width) */}
        <div
          className="w-full md:w-1/3 p-6 rounded-lg flex flex-col justify-between items-start bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s')",
              
          }}
        >
          {/* Overlay to darken background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          <h3 className="text-4xl font-bold text-white mb-4 z-10">New Collection</h3>
          <p className="text-xl font-serif italic text-white z-10">Jewelry</p>
          <p className="text-sm mt-4 text-white z-10">With Love</p>
          <a
            href="read.png"
            className="mt-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition z-10"
          >
            Visit Now
          </a>
        </div>

        {/* Product Grid (70% width) */}
        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s"
                  alt={`Product ${index + 1}`}
                  className="object-contain max-h-full"
                />
              </div>
              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold">Diamond Crystal Stud</h3>
                <p className="text-sm line-through text-gray-500">₹5,000</p>
                <p className="text-lg font-bold text-orange-600">₹3,000</p>
                <p className="text-xs text-green-500 font-medium">50% OFF</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
