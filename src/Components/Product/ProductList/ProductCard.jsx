import React from 'react';

const products = [
  { image: 'p1.png', title: 'Gold Pendant', price: 15000, originalPrice: 20000, discount: 25, isNew: true, category: 'Gold' },
  { image: 'p2.png', title: 'Gold Earrings', price: 12000, originalPrice: 16000, discount: 20, category: 'Gold' },
  { image: 'p3.png', title: 'Gold Necklace', price: 50000, originalPrice: 70000, discount: 30, isNew: true, category: 'Gold' },
  { image: 'p1.png', title: 'Diamond Crystal Stud', price: 3000, originalPrice: 6000, discount: 50, category: 'Diamond' },
  { image: 'p2.png', title: 'Platinum Ring', price: 25000, originalPrice: 30000, discount: 15, category: 'Platinum' },
  { image: 'p3.png', title: 'Silver Bracelet', price: 5000, originalPrice: 7000, discount: 20, category: 'Silver' },
  { image: 'p1.png', title: 'Platinum Necklace', price: 80000, originalPrice: 100000, discount: 20, category: 'Platinum' },
  { image: 'p3.png', title: 'Gold Ring', price: 18000, originalPrice: 25000, discount: 28, category: 'Gold' },
];

const ProductCatalog = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="relative border rounded-lg transition-shadow hover:shadow-lg p-4 text-center flex flex-col"
                >
                    {product.isNew && (
                        <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold py-1 px-2 rounded">
                            NEW
                        </span>
                    )}
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{product.title}</h3>
                    
                    {/* Price and Discount Section */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm line-through text-gray-500">₹{product.originalPrice}</span>
                            )}
                        </div>
                        {product.discount && (
                            <p className="text-xs font-medium text-red-500 mt-1">{product.discount}% OFF</p>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    <div className="w-full flex justify-center">
    <button className="bg-yellow-500 w-32 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition">
        Add to Cart
    </button>
</div>

                </div>
            ))}
        </div>
    );
};

export default ProductCatalog;
