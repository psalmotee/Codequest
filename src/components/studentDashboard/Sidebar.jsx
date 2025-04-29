import { useState, useEffect } from 'react';
import { FaHome, FaBook, FaProjectDiagram, FaGamepad, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'Courses', icon: <FaBook /> },
  { name: 'Projects', icon: <FaProjectDiagram /> },
  { name: 'Gamification', icon: <FaGamepad /> },
  { name: 'Community', icon: <FaUsers /> },
  { name: 'Settings', icon: <FaCog /> },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
      className={`fixed top-0 left-0 h-screen bg-[#FFF6F2] shadow-lg transition-all duration-300 z-50 ${
        isCollapsed ? 'w-[64px]' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full px-3 py-8 justify-between">
        {/* Nav */}
        <div>
          <div className="mb-12 px-2">
            {isCollapsed ? (
              <span className="text-blue-600 font-bold text-xl">CQ</span>
            ) : (
              <h1 className="text-2xl font-bold text-red-600">
                Code<span className="text-blue-600">Quest</span>
              </h1>
            )}
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-white font-semibold text-base transition-all duration-200"
              >
                <span className="text-2xl">{link.icon}</span>
                {!isCollapsed && <span>{link.name}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Sign Out */}
        <div className="mt-8 px-2">
          <button className="flex items-center gap-3 text-red-600 hover:scale-105 transition-transform font-semibold text-base">
            <FaSignOutAlt className="text-2xl" />
            {!isCollapsed && <span>Sign out</span>}
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
