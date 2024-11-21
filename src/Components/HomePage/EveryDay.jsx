import React from "react";

const EverydayElegance = () => {
  const products = [
    {
      id: 1,
      name: "Diamond Crystal Stud",
      image: "https://www.jewelegance.com/cdn/shop/products/JG-2204-06123.jpg?v=1675567825", // Add actual image URL
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
      isNew: true,
    },
    {
      id: 2,
      name: "Diamond Crystal Stud",
      image: "https://www.jewelegance.com/cdn/shop/products/JG-2204-06123.jpg?v=1675567825", // Add actual image URL
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
    },
    {
      id: 3,
      name: "Diamond Crystal Stud",
      image: "https://www.jewelegance.com/cdn/shop/products/JG-2204-06123.jpg?v=1675567825", // Add actual image URL
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
    },
    {
      id: 4,
      name: "Diamond Crystal Stud",
      image: "https://www.jewelegance.com/cdn/shop/products/JG-2204-06123.jpg?v=1675567825", // Add actual image URL
      price: "₹3,000",
      originalPrice: "₹5,000",
      discount: "50% OFF",
    },
  ];

  return (
    <div className="py-10 bg-white">
      {/* Title Section */}
      <h2 className="text-center text-2xl font-bold mb-2">Everyday Elegance</h2>
      <p className="text-center text-gray-600 mb-6">Discover All Trends</p>

      {/* Product Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md relative"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {/* Action Icons */}
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    ❤️
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    🔄
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-sm line-through text-gray-500 ml-2">
                    {product.originalPrice}
                  </span>
                  <span className="text-sm text-orange-500 ml-auto">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EverydayElegance;
