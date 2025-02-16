import React, { useState, useRef } from "react";
import { 
  Clock, Archive, Send, File, Trash2, Users, ShoppingCart, Mail, Inbox, Star, LogOut
} from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [isExpanded, setIsExpanded] = useState(true);
  const isResizing = useRef(false);
  const navigate = useNavigate();

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


  const handleMouseDown = (e) => {
    isResizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    let newWidth = e.clientX;
    if (newWidth < 64) newWidth = 64;
    if (newWidth > 400) newWidth = 400;
    setSidebarWidth(newWidth);
    setIsExpanded(newWidth > 120);
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-screen">
      <div
        className="h-full border-r bg-white shadow-md flex flex-col transition-all duration-200 relative"
        style={{ width: `${sidebarWidth}px` }}
      >
       <div className="flex items-center gap-2 p-4 border-b transition-all duration-200">
  <img src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png" 
       alt="User"  
       className="rounded-full h-8 w-8" 
  />
  <span className={`font-medium transition-opacity duration-200 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
    Alicia Koch
  </span>
</div>

        <div className="space-y-1 p-2 flex-1">
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

      <div className="w-2 cursor-ew-resize bg-gray-300 hover:bg-gray-500" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default Sidebar;
