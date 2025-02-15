// components/EmailContent.jsx
import React from 'react';

import { Archive, Trash2, MoreVertical, Reply, Forward } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

const EmailContent = ({ email }) => {
  if (!email) return (
    <div className="flex-1 p-8 flex items-center justify-center text-muted-foreground">
      Select an email to view its content
    </div>
  );

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="border-b p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{email.subject}</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {email.sender.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">{email.sender}</h3>
                <p className="text-sm text-muted-foreground">{`To: ${email.to}`}</p>
              </div>
              <span className="text-sm text-muted-foreground">{email.time}</span>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-6">
        <div className="prose max-w-none">
          {email.content}
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Button variant="secondary">
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="ghost">
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;