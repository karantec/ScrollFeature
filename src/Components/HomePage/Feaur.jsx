import React from "react";

const FeatureProducts = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600">Feature Products</h2>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Banner Section (Responsive Width) */}
        <div
          className="w-full lg:w-1/3 p-6 rounded-lg flex flex-col justify-between items-start bg-cover bg-center relative h-72 sm:h-96"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s')",
          }}
        >
          {/* Overlay to darken background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Banner Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">New Collection</h3>
            <p className="text-lg sm:text-xl font-serif italic text-white">Jewelry</p>
            <p className="text-sm mt-4 text-white">With Love</p>
            <a
              href="read.png"
              className="mt-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition inline-block"
            >
              Visit Now
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="h-40 sm:h-48 bg-gray-100 flex items-center justify-center">
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
