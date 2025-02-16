import React from "react";
import { Archive, Trash2, Clock, ChevronLeft, ChevronRight, RotateCw, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/ToggleGroup";


const Header = () => {
  return (
    <div className="border-b p-3 flex items-center justify-between bg-white shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-4 ">
        {/* User Dropdown */}
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Alicia Koch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alicia">Alicia Koch</SelectItem>
            <SelectItem value="john">John Doe</SelectItem>
          </SelectContent>
        </Select>
        </div>
        <div className="flex items-center gap-4 mr-52 ">
        {/* Inbox Title */}
        <h2 className="text-lg font-semibold">Inbox</h2>

        {/* Toggle Button for Mail Filtering */}
        <ToggleGroup type="single" defaultValue="all">
          <ToggleGroupItem value="all">All mail</ToggleGroupItem>
          <ToggleGroupItem value="unread">Unread</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ">
        {/* Mail Action Icons */}
        <Button variant="ghost" size="icon">
          <Archive className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Clock className="h-4 w-4" />
        </Button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300" />

        {/* Navigation Icons */}
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <RotateCw className="h-4 w-4" />
        </Button>

        {/* More Options */}
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
