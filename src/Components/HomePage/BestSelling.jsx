import React from "react";

const products = [
  {
    id: 1,
    image: "https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694",
    title: "Diamond Cristial Stud",
    price: "₹3,000",
    originalPrice: "₹5,000",
    discount: "50% OFF",
    isNew: true,
  },
  {
    id: 2,
    image: "https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694",
    title: "Diamond Cristial Stud",
    price: "₹3,000",
    originalPrice: "₹5,000",
    discount: "50% OFF",
    isNew: false,
  },
  {
    id: 3,
    image: "https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694",
    title: "Diamond Cristial Stud",
    price: "₹3,000",
    originalPrice: "₹5,000",
    discount: "50% OFF",
    isNew: false,
  },
  {
    id: 4,
    image: "https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694",
    title: "Diamond Cristial Stud",
    price: "₹3,000",
    originalPrice: "₹5,000",
    discount: "50% OFF",
    isNew: false,
  },
];

const BestSellingProducts = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-600">
          Best Selling Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative flex flex-col items-center text-center"
          >
            {/* Badge for NEW */}
            {product.isNew && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            )}

            {/* Product Image */}
            <div className="h-40 sm:h-48 md:h-56  flex items-center justify-center w-full">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain max-h-full w-full"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                {product.title}
              </h3>
              <p className="text-xs md:text-sm line-through text-gray-500">
                {product.originalPrice}
              </p>
              <p className="text-sm md:text-lg font-bold text-orange-600">
                {product.price}
              </p>
              <p className="text-xs text-green-500 font-medium">
                {product.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
