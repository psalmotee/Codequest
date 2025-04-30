"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Number Ninjas",
    progress: 27,
    color: "#4C3AFF", // Purple
  },
  {
    title: "ML Explorers",
    progress: 53,
    color: "#3B82F6", // Blue
  },
  {
    title: "Build & Play",
    progress: 17,
    color: "#10B981", // Green
  },
  {
    title: "Math Missions",
    progress: 75,
    color: "#6366F1", // Indigo
  },
];

const StillWorkingOn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-5 rounded-2xl shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Still Working On
      </h3>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {course.title}
            </span>

            {/* Circular Progress Indicator */}
            <div className="relative w-10 h-10">
              {/* Background circle */}
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />

                {/* Progress circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke={course.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${course.progress} ${
                    100 - course.progress
                  }`}
                  strokeDashoffset="25"
                  transform="rotate(-90 18 18)"
                />
              </svg>

              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium">{course.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StillWorkingOn;
