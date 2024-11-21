import React, { useState, useEffect } from "react";
import CartTotal from "./CartTotal";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch mock cart data
  const fetchCartItems = () => {
    const mockCartData = [
      {
        id: 1,
        name: "Diamond Crystal Stud",
        price: 3000,
        quantity: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s",
      },
      {
        id: 2,
        name: "Gold Necklace",
        price: 50000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s",
      },
      {
        id: 3,
        name: "Platinum Ring",
        price: 25000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4AdXS5rEFubPv8IMiGzyBKoHtGPMv0igIA&s",
      },
    ];

    setCartItems(mockCartData);
    setLoading(false);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle quantity increase
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Handle quantity decrease
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="rounded-lg bg-white">
        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-800 text-white">
                <th className="p-4 border font-sans">Product</th>
                <th className="p-4 border font-sans">Price</th>
                <th className="p-4 border font-sans">Quantity</th>
                <th className="p-4 border font-sans">Subtotal</th>
                <th className="p-4 border font-sans"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeItem={removeItem}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon and Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-2 gap-4 mt-4">
          <CouponSection />
          <ActionButtons />
        </div>

        {/* Total Price */}
        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold">Total: ₹{calculateTotal()}</h2>
        </div>
      </div>

      {/* Cart Total Component */}
      <div className="mt-8">
        <CartTotal />
      </div>
    </div>
  );
};

// CartItem Component
const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <tr className="border-b">
      <td className="p-4 flex items-center space-x-4">
        <img
          src={item.image}
          alt="Product"
          className="w-16 h-16 object-cover"
        />
        <span className="text-sm lg:text-base">{item.name}</span>
      </td>
      <td className="p-4 text-sm lg:text-base">₹{item.price}</td>
      <td className="p-4">
        <div className="flex items-center space-x-2 rounded-md">
          <button
            className="px-2 py-1 bg-gray-300 rounded"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <span className="text-sm lg:text-base">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-300 rounded"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4 text-sm lg:text-base">₹{item.price * item.quantity}</td>
      <td className="p-4">
        <button
          className="text-red-600 text-sm lg:text-base"
          onClick={() => removeItem(item.id)}
        >
          ✖
        </button>
      </td>
    </tr>
  );
};

// Coupon Section Component
const CouponSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Coupon Code"
        className="border p-2 rounded w-full md:w-96"
      />
      <button className="px-4 py-2 bg-orange-500 text-white rounded w-full md:w-auto">
        APPLY
      </button>
    </div>
  );
};

// Action Buttons Component
const ActionButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
      <button className="px-4 py-2 text-black rounded w-full md:w-auto">
        CONTINUE SHOPPING
      </button>
      <button className="px-4 py-2 bg-orange-500 text-white rounded w-full md:w-auto">
        UPDATE CART
      </button>
    </div>
  );
};

export default ShoppingCart;
