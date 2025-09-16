'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  const navLinks = [
    { name: "Home", link: "/" },
    {
      name: "Committees",
      submenu: true,
      subLinks: [
        { name: "Organizing Committee", link: "/committee/organizing" },
        { name: "International Advisory", link: "/committee/international-advisory" },
        { name: "National Advisory", link: "/committee/national-advisory" },
        { name: "Technical Committee", link: "/committee/technical" },
        { name: "Student Volunteer", link: "/committee/student-volunteers" },
      ],
    },
    { name: "Keynote/Guest Speaker", link: "/speakers" },
    {
      name: "Paper Submission", 
      submenu: true,
      subLinks: [
        { name: "Instruction for Authors", link: "/submission/instruction" },
        { name: "Call for Papers", link: "/submission/call-for-papers" },
        { name: "Important Dates", link: "/submission/important-dates" },
        { name: "Publication", link: "/submission/publication" },
        { name: "Registration", link: "/submission/registration" },
        { name: "Submission Form", link: "/submission/submission-form" },]
    },
    { name: "Call For Sponsors", link: "#" },
    { name: "Venue", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdownOpen({});
  };

  return (
    <header className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <img
            src="/amity-logo.png"
            alt="Amity University Rajasthan"
            className="w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          {navLinks.map((item, i) =>
            item.submenu ? (
              <div key={i} className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-[#FFCC00] transition-colors duration-200">
                  {item.name}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <div
                  className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg 
                  opacity-0 invisible scale-95 transform transition-all duration-200 ease-in-out 
                  group-hover:opacity-100 group-hover:visible group-hover:scale-100 z-50"
                >
                  <div className="py-1">
                    {item.subLinks.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.link}
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#FFCC00] transition-colors duration-150"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={i}
                href={item.link}
                className="font-medium text-gray-800 hover:text-[#FFCC00] transition-colors duration-200 
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#FFCC00] 
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 hover:bg-gray-100 rounded transition-colors duration-150"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((item, i) =>
              item.submenu ? (
                <div key={i}>
                  <button
                    onClick={() => toggleMobileDropdown(i)}
                    className="w-full text-left py-3 font-medium text-gray-800 flex justify-between items-center hover:text-[#FFCC00] transition-colors duration-150"
                  >
                    {item.name}
                    {mobileDropdownOpen[i] ? (
                      <ChevronUp size={16} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-500" />
                    )}
                  </button>
                  {mobileDropdownOpen[i] && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.subLinks.map((subItem, j) => (
                        <Link
                          key={j}
                          href={subItem.link}
                          onClick={closeMobileMenu}
                          className="block py-2 px-3 text-sm text-gray-600 hover:text-[#FFCC00] hover:bg-blue-50 rounded transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  href={item.link}
                  onClick={closeMobileMenu}
                  className="block py-3 font-medium text-gray-800 hover:text-[#FFCC00] transition-colors duration-150"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar 