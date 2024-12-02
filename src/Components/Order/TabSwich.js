import React, { useState } from "react";
import ShoppingCart from "./Cart";
import SecureCheckout from "./Summar";
import Final from "./Final";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Shopping Cart");

  const tabs = [
    { name: "Shopping Cart", count: 2, content: <div className="mt-10"><ShoppingCart/></div> },
    { name: "Checkout", content: <div><SecureCheckout/></div> },
    { name: "Order Confirmation", content: <div><Final/></div> },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name); // Set the active tab
  };

  return (
    <div className="mt-12">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6 text-gray-700 text-lg mb-4 mt-12">
  {tabs.map((tab) => (
    <button
      key={tab.name}
      onClick={() => handleTabClick(tab)}
      className={`relative pb-2 text-center ${
        activeTab === tab.name ? "font-bold text-black" : "text-gray-500"
      }`}
    >
      {tab.name}
      {tab.count && ` (${tab.count})`}
      {activeTab === tab.name && (
        <span className="absolute left-0 right-0 h-[2px] bg-orange-500 bottom-0"></span>
      )}
    </button>
  ))}
</div>


      {/* Tab Content */}
      <div className="p-4 border border-gray-300 rounded-lg">
        {tabs.find((tab) => tab.name === activeTab)?.content || (
          <div>No Content Available</div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;
