import React from 'react';
import OrderConfirmation from './Confirm';
import OrderReceipt from './OrderReceipt';

const Final = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between max-w-8xl mx-auto p-4 md:p-6 md:space-y-0">
      {/* Left side component with left margin */}
      <div className="w-full md:w-1/2 ml-4 md:ml-0">
        <OrderConfirmation />
      </div>

      {/* Right side component with right margin */}
      <div className="w-full md:w-1/2 mr-4 md:mr-0 mt-6 md:mt-0">
        <OrderReceipt />
      </div>
    </div>
  );
};

export default Final;
