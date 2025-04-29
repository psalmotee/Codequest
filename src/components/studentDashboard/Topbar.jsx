import { motion } from 'framer-motion';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed top-0 left-0 w-full h-20 bg-white flex items-center justify-between px-4 md:px-6 shadow z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3 w-40 md:w-64">
        <img
          src="/images/CodeQuestLogo.png"
          alt="CodeQuest Logo"
          className="h-8 md:h-10"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-2 hidden sm:block">
        <input
          type="text"
          placeholder="Type something fun to explore!"
          className="w-full px-4 py-2 rounded-full bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm md:text-base"
        />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="text-gray-600 hover:text-blue-500 text-lg md:text-xl">
          <FaEnvelope />
        </button>
        <button className="text-gray-600 hover:text-blue-500 text-lg md:text-xl">
          <FaBell />
        </button>
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/images/StudentProfile.png"
            alt="User Avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <span className="hidden md:inline-block text-gray-700 font-semibold text-sm md:text-base">
            Jayy One
          </span>
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
