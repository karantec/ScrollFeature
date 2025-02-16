import React from "react";
import { cn } from "../../lib/util";

export const ToggleGroup = ({ children, type = "single", defaultValue, onChange }) => {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { type, defaultValue, onChange })
      )}
    </div>
  );
};

export const ToggleGroupItem = ({ value, type, defaultValue, onChange, children }) => {
  const isActive = defaultValue === value;

  return (
    <button
      onClick={() => onChange?.(value)}
      className={cn(
        "px-4 py-1 text-sm",
        isActive ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"
      )}
    >
      {children}
    </button>
  );
};
