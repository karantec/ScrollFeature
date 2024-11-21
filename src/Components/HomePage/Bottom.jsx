import React from "react";
import { FaPlane, FaUndo, FaHeadphones, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div
      className="bg-beige py-6 flex flex-wrap justify-center items-center border-t border-gray-200 mx-0"
      style={{ backgroundImage: "url('maskback.png')" }}
    >
      <div className="flex flex-col items-center text-center p-4 w-full sm:w-auto sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <FaPlane className="text-2xl text-gray-700" />
        <p className="text-sm font-medium text-gray-700 mt-2">Free Tracked Delivery</p>
      </div>
      <div className="flex flex-col items-center text-center p-4 w-full sm:w-auto sm:px-6 md:px-8 lg:px-10 xl:px-12 border-l border-gray-300">
        <FaUndo className="text-2xl text-gray-700" />
        <p className="text-sm font-medium text-gray-700 mt-2">Quick Returns and Exchanges</p>
      </div>
      <div className="flex flex-col items-center text-center p-4 w-full sm:w-auto sm:px-6 md:px-8 lg:px-10 xl:px-12 border-l border-gray-300">
        <FaHeadphones className="text-2xl text-gray-700" />
        <p className="text-sm font-medium text-gray-700 mt-2">24/7 Customer Service</p>
      </div>
      <div className="flex flex-col items-center text-center p-4 w-full sm:w-auto sm:px-6 md:px-8 lg:px-10 xl:px-12 border-l border-gray-300">
        <FaShieldAlt className="text-2xl text-gray-700" />
        <p className="text-sm font-medium text-gray-700 mt-2">100% Secure Payment</p>
      </div>
    </div>
  );
};

export default Features;
