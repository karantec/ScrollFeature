import React, { useEffect, useState, useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "./ui/ToggleGroup";

const EmailList = ({ onSelectEmail, selectedEmailId }) => {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("https://assignmentssde-1-2.onrender.com/mails/get");
        if (!response.ok) {
          throw new Error("Failed to fetch emails");
        }
        const data = await response.json();
        setEmails(data);
        setFilteredEmails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredEmails(emails);
    } else if (filter === "unread") {
      setFilteredEmails(emails.filter((email) => !email.read));
    }
  }, [filter, emails]);

  // Toggle Read/Unread Status
  const toggleReadStatus = async (emailId, currentStatus) => {
    try {
      const response = await fetch(`https://assignmentssde-1-2.onrender.com/mails/update/${emailId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentStatus }), // Toggle read status
      });

      if (!response.ok) {
        throw new Error("Failed to update email status");
      }

      // Update local state after successful backend update
      setEmails((prevEmails) =>
        prevEmails.map((email) =>
          email.id === emailId ? { ...email, read: !currentStatus } : email
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative h-screen border-r flex flex-col">
      <div className="flex items-center gap-4 p-4 border-b">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <ToggleGroup type="single" defaultValue="all">
          <ToggleGroupItem value="all">All mail</ToggleGroupItem>
          <ToggleGroupItem value="unread">Unread</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ScrollArea ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        {loading && <p className="text-center">Loading emails...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && filteredEmails.length === 0 && (
          <p className="text-center text-gray-500">No emails found.</p>
        )}

        <div className="space-y-4 w-full">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              className={`p-4 rounded-lg cursor-pointer border shadow-md ${
                email.read ? "bg-gray-100" : "bg-white"
              } ${selectedEmailId === email.id ? "border-primary" : "hover:bg-secondary/10"}`}
              onClick={() => {
                toggleReadStatus(email.id, email.read);
                onSelectEmail(email);
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {email.sender.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium truncate">{email.sender}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</span>
                  </div>
                  <p className={`text-sm font-medium truncate ${email.read ? "text-gray-500" : "text-black"}`}>
                    {email.subject}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">{email.preview}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {email.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmailList;
