import React, { useState } from 'react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample images for thumbnails
  const images = [
    '270.png',
    '271.png',
    '271.png',
    '271.png',
    '271.png',
  ];

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 flex flex-col md:flex-row space-y-8 mt-8 md:space-y-0 md:space-x-8">
      {/* Left section: Thumbnail and Main Image */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 object-cover border ${selectedImage === index ? 'border-orange-500' : 'border-gray-300'} cursor-pointer`}
            />
          ))}
        </div>
        
        {/* Main Image */}
        <div className="flex-1 mt-4 md:mt-0">
          <img src={images[selectedImage]} alt="Product" className="w-full h-full object-cover border-2 border-blue-300" />
        </div>
      </div>

      {/* Right section: Product Info */}
      <div className="flex-1 space-y-4">
        <div>
          <p className="text-gray-600 text-sm">SKU: AGDJSAJG4515</p>
          <h1 className="text-xl md:text-2xl font-semibold">Large Charlotte Hoops</h1>
          <div className="flex items-center space-x-2">
            <span className="text-orange-600 text-xl md:text-2xl font-bold">₹3,000</span>
            <span className="text-gray-500 line-through">₹5,000</span>
            <span className="text-orange-500 font-semibold">(50% Off)</span>
          </div>
          <p className="text-gray-500 text-sm">Inclusive of all taxes, Free Shipping</p>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Size Selector */}
        <div className="space-y-2">
          <label className="font-semibold">SIZE: 2.4</label>
          <select className="w-full border-gray-300 rounded-md p-2">
            <option>Choose an option</option>
            <option>2.4</option>
            <option>2.6</option>
            <option>2.8</option>
          </select>
        </div>

        {/* Quantity Selector and Add to Cart Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 font-bold text-gray-600"
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 font-bold text-gray-600"
            >
              +
            </button>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
            ADD TO CART
          </button>

          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md w-full md:w-auto">
            ❤️
          </button>
        </div>

        {/* Buy Now Button */}
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold">
          BUY NOW
        </button>
        
      </div>
      
    </div>
  );
};

export default ProductDetail;
