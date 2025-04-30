"use client";

import { motion } from "framer-motion";

const WelcomeBanner = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-blue-600 text-white p-4 md:p-6 rounded-lg flex items-center justify-between"
    >
      {/* Text Content */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-1">
          Welcome Back, {name}
        </h2>
        <p className="text-sm text-blue-100">
          10 new students have been assigned to your class.
          <br />
          If any should be excluded, please get in touch with the Head Teacher.
        </p>
      </div>

      {/* Illustration */}
      <div className="hidden md:block">
        <img
          src="/images/teacher-illustration.png"
          alt="Teacher illustration"
          className="h-32"
        />
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
