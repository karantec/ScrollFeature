import React, { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EmailList from "./components/EmailList";
import EmailContent from "./components/EmailContent";

const App = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emailListWidth, setEmailListWidth] = useState(400); // Default width of Email List
  const isResizing = useRef(false);

  // Mouse Down Event (Start Resizing)
  const handleMouseDown = () => {
    isResizing.current = true;
  };

  // Mouse Move Event (Resize the middle panel)
  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = e.clientX - 250; // Sidebar is 250px fixed
    if (newWidth >= 300 && newWidth <= window.innerWidth - 300) { 
      setEmailListWidth(newWidth);
    }
  };

  // Mouse Up Event (Stop Resizing)
  const handleMouseUp = () => {
    isResizing.current = false;
  };

  // Attach Listeners
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Email List (Resizable) */}
      <div className="relative bg-gray-100 shadow-md" style={{ width: `${emailListWidth}px` }}>
        <EmailList onSelectEmail={setSelectedEmail} selectedEmailId={selectedEmail?.id} />
        {/* Drag Handle */}
        <div
          className="absolute top-0 right-0 w-2 h-full cursor-ew-resize bg-gray-300 hover:bg-gray-500 transition"
          onMouseDown={handleMouseDown}
        />
      </div>

      {/* Email Content (Dynamic Width) */}
      <div className="flex-1 bg-white shadow-md">
        <EmailContent email={selectedEmail} />
      </div>
    </div>
  );
};

export default App;
