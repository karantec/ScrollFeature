import React, { useState } from "react";

const ProductGrid1 = () => {
  const [priceRange, setPriceRange] = useState(24000);

  const categories = ["Bracelets", "Earrings", "Necklaces", "Shop Earrings", "Wedding & Bridal"];
  const products = [
    {
      id: 1,
      name: "Diamond Crystal Stud",
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
      image: "p1.png",
    },
    {
      id: 2,
      name: "Diamond Crystal Stud",
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
      image: "p2.png",
    },
    {
      id: 3,
      name: "Diamond Crystal Stud",
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
      image: "p3.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      {/* Sidebar for Categories and Filters */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            {categories.map((category, index) => (
              <li key={index} className="hover:text-black cursor-pointer">{category}</li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Price</h2>
          <div>
            <label className="text-gray-600">Range: ₹0 - ₹{priceRange}</label>
            <input
              type="range"
              min="0"
              max="24000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full mt-2"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full md:w-3/4">
        {/* Top Section with sorting and item count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
          <span className="text-sm text-gray-600">Showing 1–12 of 29 item(s)</span>
          <div className="flex items-center space-x-2">
            <button className="border rounded p-2 hover:bg-gray-100">🔲</button>
            <select className="border rounded p-2 text-sm">
              <option>Default Sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 relative">
              {/* Product Image */}
              <div className="relative mb-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">New</span>
                {/* Wishlist and Compare Buttons */}
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">💖</button>
                  <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">🔄</button>
                  <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">🔍</button>
                </div>
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-medium">{product.name}</h3>
              <div className="text-gray-600 flex items-center space-x-2">
                <span className="text-lg font-semibold text-black">{product.price}</span>
                <span className="line-through text-sm">{product.originalPrice}</span>
                <span className="text-orange-500 text-sm font-semibold">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid1;
