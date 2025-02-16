import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Select = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-40 px-3 py-1.5 border rounded-lg flex items-center justify-between bg-white"
      >
        {children[0]}
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && <div className="absolute mt-2 w-full bg-white border rounded-lg shadow">{children[1]}</div>}
    </div>
  );
};

export const SelectTrigger = ({ children }) => <span>{children}</span>;

export const SelectContent = ({ children }) => <div>{children}</div>;

export const SelectItem = ({ value, children, onClick }) => (
  <div
    onClick={() => onClick?.(value)}
    className="p-2 hover:bg-gray-100 cursor-pointer"
  >
    {children}
  </div>
);

export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;
