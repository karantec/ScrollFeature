// components/Header.jsx
import React from 'react';

import { Archive, Trash2, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Input
            placeholder="Search"
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Clock className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;