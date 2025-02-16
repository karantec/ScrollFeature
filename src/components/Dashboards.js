import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import EmailContent from "./EmailContent";
import { useAuth } from "../AuthContext";
import { Button } from "./ui/button";

import { LogOut } from "lucide-react";

const Dashboards = () => {
  const { logout } = useAuth();
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emailListWidth, setEmailListWidth] = useState(400);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX - 250;
    if (newWidth >= 300 && newWidth <= window.innerWidth - 300) {
      setEmailListWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <Button onClick={logout} className="bg-red-500 text-white flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Custom Header Component */}
      

      <div className="flex flex-grow">
        <Sidebar />

        {/* Email List (Resizable) */}
        <div className="relative bg-white shadow-md" style={{ width: `${emailListWidth}px` }}>
          <EmailList onSelectEmail={setSelectedEmail} selectedEmailId={selectedEmail?.id} />
          <div
            className="absolute top-0 right-0 w-2 h-full cursor-ew-resize bg-gray-300 hover:bg-gray-500 transition"
            onMouseDown={handleMouseDown}
          />
        </div>

        {/* Email Content */}
        <div className="flex-1 bg-white shadow-md">
          <EmailContent email={selectedEmail} />
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
