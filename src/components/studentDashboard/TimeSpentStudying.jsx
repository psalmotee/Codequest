"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TimeSpentStudying = () => {
  const [data] = useState([
    { day: "Mon", hours: 12.5, color: "#4ade80" }, // Green
    { day: "Tue", hours: 9.8, color: "#facc15" }, // Yellow
    { day: "Wed", hours: 3.2, color: "#4ade80" }, // Green
    { day: "Thu", hours: 2.7, color: "#facc15" }, // Yellow
    { day: "Fri", hours: 1.5, color: "#f87171" }, // Red
    { day: "Sat", hours: 0.8, color: "#f87171" }, // Red
    { day: "Sun", hours: 0.5, color: "#f87171" }, // Red
  ]);

  // Find the maximum value for scaling
  const maxHours = Math.max(...data.map((item) => item.hours));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-5 rounded-2xl shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-6 text-gray-800">
        Time Spent Studying
      </h3>

      <div className="flex items-end justify-between h-48 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Bar */}
            <div
              className="w-6 rounded-t-md transition-all duration-500 ease-in-out"
              style={{
                height: `${(item.hours / maxHours) * 100}%`,
                backgroundColor: item.color,
                minHeight: "4px",
              }}
            />

            {/* Day label */}
            <div className="mt-2 text-xs text-gray-500">{item.day}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeSpentStudying;
