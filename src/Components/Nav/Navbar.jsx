import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link

  // Links data array
  const navLinks = [
    { name: "What's New", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/productlist" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
   
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  // Function to handle link clicks
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div>
      {/* Top bar */}
      <div className="bg-[#6E3000] text-white text-center py-1 text-sm">
        Free express worldwide shipping. Subscribe to discover
      </div>

      {/* Main navigation */}
      <div className="bg-[#E9F1ED] px-8 py-4">
        {/* Search bar (only visible on larger screens) */}
        <div className="hidden md:flex justify-center mb-2">
          <div className="relative w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border border-[#C1C1C1] rounded-lg bg-[#E9F1ED] pl-10 pr-4 py-2 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Navigation bar for desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Centered Navigation Links */}
          <div className="flex justify-center w-full">
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`text-gray-700 ${
                    activeLink === link.name ? "text-yellow-500 font-semibold" : ""
                  } hover:text-yellow-500`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            <a href="#" className="text-gray-700">
              <FaUser className="text-xl" />
            </a>
            <div className="relative">
              <Link  to="/cart" className="text-gray-700">
                <FaHeart className="text-xl" />
              </Link>
              <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <Link to="/checkout" className="text-gray-700">
                <FaShoppingBag className="text-xl" />
              </Link>
              <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </div>
          </div>
        </div>

        {/* Hamburger Icon (only visible on mobile view) */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center w-full">
            <img src="preview.png" alt="Logo" className="h-12 mr-2" />
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="border border-[#C1C1C1] rounded-lg bg-[#E9F1ED] pl-10 pr-4 py-2 w-full focus:outline-none"
              />
            </div>
          </div>
          <FaBars
            className="text-gray-700 ml-4 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#E9F1ED] flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-gray-700 ${
                  activeLink === link.name ? "text-yellow-500 font-semibold" : ""
                } hover:text-yellow-500`}
                onClick={() => {
                  handleLinkClick(link.name);
                  setIsMobileMenuOpen(false); // Close the menu after clicking
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-6 items-center mt-4">
              <a href="#" className="text-gray-700">
                <FaUser className="text-xl" />
              </a>
              <div className="relative">
                <a href="#" className="text-gray-700">
                  <FaHeart className="text-xl" />
                </a>
                <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              <div className="relative">
                <a href="#" className="text-gray-700">
                  <FaShoppingBag className="text-xl" />
                </a>
                <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
