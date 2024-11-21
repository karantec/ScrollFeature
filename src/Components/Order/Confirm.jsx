import React from 'react';

function OrderConfirmation() {
  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-6 bg-white ">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
        Thanks for your purchase
      </h2>
      <p className="text-gray-600 text-sm mb-6 text-center md:text-left">
        Your order will be processed within 2 working days. We will notify you by email once your order has been shipped.
      </p>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
        Billing Address
      </h3>
      
      <div className="space-y-2 text-gray-700 text-sm">
        <div className="flex flex-col md:flex-row">
          <span className="w-24 font-medium">Name:</span>
          <span>Jony</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <span className="w-24 font-medium">Address:</span>
          <span>E-24, Uttam Nagar Om Vihar<br />New Delhi - 110059</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <span className="w-24 font-medium">Phone:</span>
          <span>9999999999</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <span className="w-24 font-medium">Email:</span>
          <span>itsmejony@gmail.com</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
        Track Your Order
      </button>
    </div>
  );
}

export default OrderConfirmation;
