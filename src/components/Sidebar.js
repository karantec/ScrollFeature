import React, { useState, useRef } from "react";
import { 
  Clock, Archive, Send, File, Trash2, Users, ShoppingCart, Mail, Inbox, Star
} from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [isExpanded, setIsExpanded] = useState(true);
  const isResizing = useRef(false);

  const sidebarItems = [
    { icon: <Inbox size={18} />, label: "Inbox", count: 128 },
    { icon: <File size={18} />, label: "Drafts", count: 9 },
    { icon: <Send size={18} />, label: "Sent", count: null },
    { icon: <Star size={18} />, label: "Junk", count: 23 },
    { icon: <Trash2 size={18} />, label: "Trash", count: null },
    { icon: <Archive size={18} />, label: "Archive", count: null },
    { icon: <Users size={18} />, label: "Social", count: 972 },
    { icon: <Clock size={18} />, label: "Updates", count: 342 },
    { icon: <Users size={18} />, label: "Forums", count: 128 },
    { icon: <ShoppingCart size={18} />, label: "Shopping", count: 8 },
    { icon: <Mail size={18} />, label: "Promotions", count: 21 },
  ];

  // Start resizing
  const handleMouseDown = (e) => {
    isResizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Resize in real-time
  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    let newWidth = e.clientX;
    if (newWidth < 64) newWidth = 64; // Min width
    if (newWidth > 400) newWidth = 400; // Max width
    setSidebarWidth(newWidth);
    setIsExpanded(newWidth > 120);
  };

  // Stop resizing
  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className="h-full border-r bg-white shadow-md flex flex-col transition-all duration-200 relative"
        style={{ width: `${sidebarWidth}px` }}
      >
        {/* Profile Section (Fixing the Blinking Effect) */}
        <div
          className={`flex items-center gap-2 p-4 border-b transition-opacity duration-200 ${
            isExpanded ? "opacity-100" : "opacity-0 overflow-hidden"
          }`}
        >
          <img src="/api/placeholder/32/32" alt="User" className="rounded-full" />
          <span className="font-medium">Alicia Koch</span>
        </div>

        {/* Sidebar Items */}
        <div className="space-y-1 p-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={index === 0 ? "secondary" : "ghost"}
              className={`w-full justify-start transition-all duration-300 p-2`}
            >
              <span className="flex items-center gap-3">
                {item.icon}
                {isExpanded && sidebarWidth > 120 && item.label}
              </span>
              {isExpanded && sidebarWidth > 120 && item.count && (
                <span className="text-sm text-muted-foreground ml-auto">{item.count}</span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Resizable Divider (Draggable Bar) */}
      <div
        className="w-2 cursor-ew-resize bg-gray-300 hover:bg-gray-500"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Sidebar;
