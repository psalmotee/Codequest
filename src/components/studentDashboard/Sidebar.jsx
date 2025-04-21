import { motion } from 'framer-motion';
import { FaHome, FaBook, FaProjectDiagram, FaGamepad, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'Courses', icon: <FaBook /> },
  { name: 'Projects', icon: <FaProjectDiagram /> },
  { name: 'Gamification', icon: <FaGamepad /> },
  { name: 'Community', icon: <FaUsers /> },
  { name: 'Settings', icon: <FaCog /> },
];

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
      className="min-h-screen w-64 bg-[#FFF6F2] px-6 py-8 shadow-lg flex flex-col justify-between"
    >
      <div>
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600 mb-12">
          Code<span className="text-blue-600">Quest</span>
        </h1>

        {/* Nav Links */}
        <nav className="space-y-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="flex items-center gap-4 text-gray-700 hover:text-blue-600 font-medium text-lg transition-all duration-200"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div className="mt-8">
        <button className="flex items-center gap-3 text-red-600 hover:scale-105 transition-transform text-lg font-semibold">
          <FaSignOutAlt className="text-xl" />
          Sign out
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
