// components/EmailList.jsx
import React, { useRef } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button'; // Import your button component

const EmailList = ({ onSelectEmail, selectedEmailId }) => {
  const emails = [
    {
      id: 1,
      sender: 'William Smith',
      to: 'me@example.com',
      subject: 'Meeting Tomorrow',
      preview: "Hi, let's have a meeting tomorrow to discuss the project...",
      time: 'Oct 22, 2023, 9:00:00 AM',
      tags: ['work'],
      content: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William"
    },
    {
      id: 2,
      sender: 'David Lee',
      to: 'me@example.com',
      subject: 'New Project Ideas',
      preview: 'I have an exciting new project idea to discuss with you...',
      time: 'about 2 years ago',
      tags: ['meeting', 'work', 'important'],
      content: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown significant growth potential..."
    },
  
      {
        id: 2,
        sender: 'David Lee',
        to: 'me@example.com',
        subject: 'New Project Ideas',
        preview: 'I have an exciting new project idea to discuss with you...',
        time: 'about 2 years ago',
        tags: ['meeting', 'work', 'important'],
        content: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown significant growth potential..."
      },
  ];

  const scrollRef = useRef(null);

  // Function to scroll smoothly from top to bottom
  
  return (
    <div className="relative h-screen border-r flex flex-col">
      {/* Scrollable Area */}
      <ScrollArea ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 w-full">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`bg-white shadow-md p-4 rounded-lg cursor-pointer border ${
                selectedEmailId === email.id ? 'border-primary bg-secondary/10' : 'hover:bg-secondary/10'
              }`}
              onClick={() => onSelectEmail(email)}
            >
              {/* Sender Avatar */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {email.sender.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  {/* Sender & Time */}
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium truncate">{email.sender}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {email.time}
                    </span>
                  </div>

                  {/* Subject & Preview */}
                  <p className="text-sm font-medium truncate">{email.subject}</p>
                  <p className="text-sm text-muted-foreground truncate">{email.preview}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {email.tags.map((tag) => (
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

      {/* Scroll to Bottom Button */}
      
    </div>
  );
};

export default EmailList;
