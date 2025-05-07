"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBell, FaEnvelope } from "react-icons/fa";

const Topbar = ({ toggleSidebar, sidebarOpen, darkMode = false }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`w-full flex items-center justify-between px-4 py-3 shadow-sm ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        {/* Menu Toggle - Only visible on tablet and below */}
        <button
          onClick={toggleSidebar}
          className={`lg:hidden p-2 rounded-md focus:outline-none ${
            darkMode
              ? "text-white hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Logo - Only visible on large screens */}
        <div className="hidden lg:block">
          <Link to="/student-dashboard">
            <img src="/images/Logo-R-B.png" alt="CodeQuest" className="h-8" />
          </Link>
        </div>
      </div>

      {/* Search Bar - Responsive width */}
      <div className="flex-1 max-w-md mx-2">
        <div className="relative">
          <svg
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className={`w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "border-gray-200 text-gray-800"
            }`}
          />
        </div>
      </div>

      {/* Icons and Profile - Compact on mobile */}
      <div className="flex items-center gap-1 md:gap-4">
        <button
          className={`p-1 md:p-2 rounded-full ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
        >
          <FaEnvelope
            className={`h-4 w-4 md:h-5 md:w-5 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          />
        </button>
        <button
          className={`p-1 md:p-2 rounded-full ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
        >
          <FaBell
            className={`h-4 w-4 md:h-5 md:w-5 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          />
        </button>

        {/* Profile Link - Navigates to Student Profile */}
        <Link
          to="/student-dashboard/student-profile"
          className={`flex items-center gap-2 p-1 rounded-full transition-colors ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
          }`}
        >
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              src="/images/jayy.png"
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className={`text-sm font-medium hidden md:block ${
              darkMode ? "text-white" : ""
            }`}
          >
            Jayy One
          </span>
        </Link>
      </div>
    </motion.header>
  );
};

export default Topbar;
