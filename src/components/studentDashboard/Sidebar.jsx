"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBook,
  FaProjectDiagram,
  FaGamepad,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";


const navLinks = [
  { name: "Home", icon: <FaHome /> },
  { name: "Courses", icon: <FaBook /> },
  { name: "Projects", icon: <FaProjectDiagram /> },
  { name: "Gamification", icon: <FaGamepad /> },
  { name: "Community", icon: <FaUsers /> },
  { name: "Settings", icon: <FaCog /> },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");

   return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="h-full w-64 bg-white px-6 py-8 shadow-lg flex flex-col justify-between"
    >
      <div>
        {/* Nav Links */}
        <nav className="space-y-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => setActiveLink(link.name)}
              className={`flex items-center gap-4 font-medium text-lg transition-all duration-200 py-2 ${
                activeLink === link.name
                  ? "px-8 bg-[#FFF8F1] border-l-4 border-l-[#2D2DFF] shadow-md rounded-r-md text-[#2D2DFF]"
                  : "text-gray-700 hover:text-[#2D2DFF] rounded-r-lg"
              }`}
            >
              <span
                className={`text-xl ${
                  activeLink === link.name ? "text-[#2D2DFF]" : ""
                }`}
              >
                {link.icon}
              </span>
              {link.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div className="mt-auto pt-8">
        <button className="flex items-center gap-3 text-red-600 hover:scale-105 transition-transform text-lg font-semibold">
          <FaSignOutAlt className="text-xl" />
          Sign out
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;