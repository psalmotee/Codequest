"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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
  { name: "Home", icon: <FaHome />, path: "/student-dashboard" },
  { name: "Courses", icon: <FaBook />, path: "/student-dashboard/courses" },
  {
    name: "Projects",
    icon: <FaProjectDiagram />,
    path: "/student-dashboard/projects",
  },
  {
    name: "Gamification",
    icon: <FaGamepad />,
    path: "/student-dashboard/gamification",
  },
  {
    name: "Community",
    icon: <FaUsers />,
    path: "/student-dashboard/community",
  },
  { name: "Settings", icon: <FaCog />, path: "/student-dashboard/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  // Determine active link based on current path
  const getActiveLink = () => {
    const currentPath = location.pathname;

    // Check if we're on the dashboard home
    if (currentPath === "/student-dashboard") {
      return "Home";
    }

    // Find which nav link matches the current path
    const activeLink = navLinks.find(
      (link) =>
        currentPath.startsWith(link.path) && link.path !== "/student-dashboard"
    );

    return activeLink ? activeLink.name : "Home";
  };

  const [activeLink, setActiveLink] = useState(getActiveLink());

  // Update active link when location changes
  useState(() => {
    setActiveLink(getActiveLink());
  }, [location]);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="h-full w-64 bg-white px-6 py-8 shadow-lg flex flex-col justify-between rounded-r-2xl"
    >
      <div>
        {/* Nav Links */}
        <nav className="space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center gap-4 font-medium text-lg transition-all duration-200 py-2 ${
                activeLink === link.name
                  ? "px-8 bg-[#FFF8F1] border-l-4 border-l-[#2D2DFF] shadow-md rounded-r-full text-[#2D2DFF]"
                  : "text-gray-700 hover:text-[#2D2DFF] rounded-r-lg"
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              <span
                className={`text-xl ${
                  activeLink === link.name ? "text-[#2D2DFF]" : ""
                }`}
              >
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div className="mt-auto pt-8">
        <Link
          to="/signin"
          className="flex items-center gap-3 text-red-600 hover:scale-105 transition-transform text-lg font-semibold"
        >
          <FaSignOutAlt className="text-xl" />
          Sign out
        </Link>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
