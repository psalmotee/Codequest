import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Illustration from "../assets/images/SelectAccountImage.png";

const SelectAccount = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const handleAccountSelection = (accountType) => {
    navigate("/signup", { state: { role: accountType } });
  };

  return (
    <div ref={ref} className="flex h-screen">
      {/* Left Side - Illustration Only (Hidden at 500px) */}
      <motion.div
        className="hidden md:flex w-1/2 items-center justify-center bg-orange-500"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <img
          src={Illustration}
          alt="Illustration"
          className="w-3/4 h-auto object-contain"
        />
      </motion.div>

      {/* Right Side - Account Selection */}
      <motion.div
        className="w-full md:w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center px-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Choose an account type to start with!
        </motion.h2>

        <div className="space-y-4 w-3/4">
          {["Student", "Teacher", "Class Code", "Parents", "Admin"].map((type, index) => (
            <motion.button
              key={type}
              className="w-full bg-white text-black font-semibold py-3 rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAccountSelection(type)} // Navigate to Signup
              transition={{ duration: 0.3 }}
            >
              {type}
            </motion.button>
          ))}
        </div>

        {/* Sign-in link */}
        <motion.p
          className="mt-6 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Already have an account?{" "}
          <Link to="/signin" className="text-red-400 font-semibold hover:underline">
            Sign In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SelectAccount;
