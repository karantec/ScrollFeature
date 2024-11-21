import React from 'react';
import { FaHeart, FaSearch, FaShareAlt } from 'react-icons/fa';

const products = [
  {
    id: 1,
    image: 'pr1.png',
    name: 'Diamond Crystal Stud',
    price: '₹3,000',
    originalPrice: '₹5,000',
    discount: '50% OFF',
    isNew: true,
  },
  {
    id: 2,
    image: 'pr2.png',
    name: 'Diamond Crystal Stud',
    price: '₹3,000',
    originalPrice: '₹5,000',
    discount: '50% OFF',
  },
  {
    id: 3,
    image: 'pr3.png',
    name: 'Diamond Crystal Stud',
    price: '₹3,000',
    originalPrice: '₹5,000',
    discount: '50% OFF',
  },
  {
    id: 4,
    image: 'pr4.png',
    name: 'Diamond Crystal Stud',
    price: '₹3,000',
    originalPrice: '₹5,000',
    discount: '50% OFF',
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative p-4 rounded-lg group hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
          NEW
        </div>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Hover Icons */}
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
          <FaHeart className="text-gray-600 text-lg" />
        </div>
        <div className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
          <FaSearch className="text-gray-600 text-lg" />
        </div>
        <div className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
          <FaShareAlt className="text-gray-600 text-lg" />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-sm text-gray-800 font-semibold">{product.name}</h3>
        <div className="flex items-center justify-center space-x-2 mt-1">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <span className="line-through text-gray-400">{product.originalPrice}</span>
          <span className="text-orange-600 text-sm font-semibold">{product.discount}</span>
        </div>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
