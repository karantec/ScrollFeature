import React from "react";

const CartTotal = () => {
  // Sample data for totals
  const subtotal = 6000;
  const gst = 250;
  const shipping = 50;
  const discount = -50;
  const total = subtotal + gst + shipping + discount;

  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg  mt-10 shadow-lg ml-auto">
      <div className="bg-red-800 text-white text-lg font-bold p-4 rounded-t-lg">
        Cart Total
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span className="font-bold">₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Gst 18%</span>
          <span className="font-bold">₹{gst.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span className="font-bold">₹{shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Discount</span>
          <span className="font-bold text-orange-500">₹{discount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-xl font-bold border-t border-gray-300 pt-4">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
