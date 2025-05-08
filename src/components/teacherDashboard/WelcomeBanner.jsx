"use client";

import teacherWelcome from "/images/Lesson-amico.png";


const WelcomeBanner = ({ name }) => {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#2D2DFFCC] text-white p-4 md:p-6 rounded-lg flex items-center justify-between"
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
        <img src={teacherWelcome} alt="Teacher illustration" className="h-32" />
      </div>
    </div>
  );
};

export default WelcomeBanner;
