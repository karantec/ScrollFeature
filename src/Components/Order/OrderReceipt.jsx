import React from 'react';

function OrderReceipt() {
  return (
    <div className="max-w-md w-full mx-auto bg-[#ca4837e6] text-white rounded-lg relative p-4 md:p-6 shadow-lg">
      {/* Top Border */}
      <div className="absolute -top-3 w-full h-2 bg-gray-300 rounded-t-lg"></div>

      {/* Order Summary Header */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Order Summary</h2>

      {/* Order Details */}
      <div className="flex flex-col md:flex-row justify-between text-sm border-b border-gray-400 pb-4 mb-4">
        <div className="mb-2 md:mb-0">
          <span className="text-gray-300">Date</span>
          <p className="font-medium">02 Oct 2023</p>
        </div>
        <div className="mb-2 md:mb-0">
          <span className="text-gray-300">Order Number</span>
          <p className="font-medium">0215-451512152</p>
        </div>
        <div>
          <span className="text-gray-300">Payment Method</span>
          <p className="font-medium">Cash</p>
        </div>
      </div>

      {/* Item List */}
      <div className="space-y-4 mb-4 text-sm">
        <div className="flex justify-between">
          <div>
            <p>Size: 12</p>
            <p>Qty: 01</p>
          </div>
          <p>₹3,000</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Size: 12</p>
            <p>Qty: 01</p>
          </div>
          <p>₹3,000</p>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="text-sm border-t border-gray-400 pt-4 mb-4 space-y-2">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>₹3,000</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>₹500</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>₹50</p>
        </div>
      </div>

      {/* Order Total */}
      <div className="flex justify-between font-semibold text-lg">
        <p>Order Total</p>
        <p>₹3,550</p>
      </div>

      {/* Bottom Border Design */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-4 bg-white">
        <div className="h-full w-full bg-[#4b2e2a] flex items-center justify-between">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="w-4 h-4 bg-white rotate-45"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderReceipt;
