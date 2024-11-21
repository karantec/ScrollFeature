import React from 'react';

const ProductDetails = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Description Section */}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      
      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 whitespace-nowrap">Model</td>
              <td className="px-4 py-2 text-gray-600">#8786867</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 whitespace-nowrap">Style</td>
              <td className="px-4 py-2 text-gray-600">Classic style</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 whitespace-nowrap">Certificate</td>
              <td className="px-4 py-2 text-gray-600">ISO-888921212</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 whitespace-nowrap">Size</td>
              <td className="px-4 py-2 text-gray-600">34mm x 450mm x 19mm</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-gray-700 whitespace-nowrap">Memory</td>
              <td className="px-4 py-2 text-gray-600">36GB RAM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
