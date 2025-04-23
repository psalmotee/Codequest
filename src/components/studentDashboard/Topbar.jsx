import { motion } from 'framer-motion';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-sm"
    >
      {/* Search Bar */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Type something fun to explore!"
          className="w-full px-4 py-2 rounded-full bg-[#FFF6F2] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-blue-500 text-xl">
          <FaEnvelope />
        </button>
        <button className="text-gray-600 hover:text-blue-500 text-xl">
          <FaBell />
        </button>
        <div className="flex items-center gap-3">
          <img
            src="/images/StudentProfile.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700 font-semibold">Jayy One</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
