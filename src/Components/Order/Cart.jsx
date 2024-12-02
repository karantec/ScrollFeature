import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "DIAMOND CRYSTAL STUD", price: 3000, quantity: 2 },
    { id: 2, name: "DIAMOND CRYSTAL STUD", price: 3000, quantity: 2 },
    { id: 3, name: "DIAMOND CRYSTAL STUD", price: 3000, quantity: 2 },
    { id: 4, name: "DIAMOND CRYSTAL STUD", price: 3000, quantity: 2 },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotals = () => {
    const subtotal = getSubtotal();
    const tax = Math.round(subtotal * 0.1); // 10% tax
    const shipping = 50; // Flat shipping rate
    const discount = 75; // Fixed discount
    const total = subtotal + tax + shipping - discount;

    return { subtotal, tax, shipping, discount, total };
  };

  const totals = calculateTotals();

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 space-y-6">
      {/* Shopping Cart Section */}
      <div className="p-4 bg-white rounded-lg shadow w-full">
        <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
        <div className="overflow-x-auto">
          {/* Shopping Cart Table */}
          <table className="w-full text-left border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Subtotal</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={`https://via.placeholder.com/50`}
                      alt={item.name}
                      className="w-12 h-12 rounded mr-2"
                    />
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className="py-2 px-4">₹{item.price}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 border rounded-l bg-gray-200"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-t border-b"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 border rounded-r bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4">₹{item.price * item.quantity}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer Buttons */}
        <div className="flex flex-wrap justify-between items-center mt-4">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border rounded p-2 w-full sm:w-auto"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              APPLY
            </button>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded w-full sm:w-auto">
            UPDATE CART
          </button>
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="flex flex-col sm:flex-row-reverse sm:justify-between bg-gray-100 min-h-screen p-4  sm:space-y-0 sm:space-x-6">
  {/* Cart Total Section */}
  <div className="p-4 bg-white rounded-lg shadow w-full sm:w-1/3">
    <h2 className="text-lg font-bold bg-orange-500 text-white px-4 py-2 rounded-t">
      Cart Total
    </h2>
    <div className="bg-gray-50 p-4">
      <div className="flex justify-between py-2">
        <span>Subtotal</span>
        <span>₹{totals.subtotal}</span>
      </div>
      <div className="flex justify-between py-2">
        <span>Tax (10%)</span>
        <span>₹{totals.tax}</span>
      </div>
      <div className="flex justify-between py-2">
        <span>Shipping</span>
        <span>₹{totals.shipping}</span>
      </div>
      <div className="flex justify-between py-2 text-red-500">
        <span>Discount</span>
        <span>-₹{totals.discount}</span>
      </div>
      <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{totals.total}</span>
      </div>
    </div>
    <Link to='/checkout'><button className="bg-orange-500 text-white px-4 py-2 w-full mt-4 rounded">
      PROCEED TO CHECKOUT
    </button></Link>
  </div>

  {/* Shopping Cart Section */}
 
</div>

    </div>
  );
};

export default ShoppingCart;
