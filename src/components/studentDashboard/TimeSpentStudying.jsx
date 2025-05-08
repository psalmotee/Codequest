"use client";

import { useState } from "react";

const TimeSpentStudying = () => {
  const [data] = useState([
    { day: "Mon", hours: 8.5, color: "#1DBC1A" }, // Green
    { day: "Tue", hours: 4.8, color: "#E2CF1C" }, // Yellow
    { day: "Wed", hours: 4.5, color: "#E2CF1C" }, // Yellow
    { day: "Thu", hours: 6.0, color: "#1DBC1A" }, // Green
    { day: "Fri", hours: 2.0, color: "#BC1A1A" }, // Red
    { day: "Sat", hours: 4.2, color: "#E2CF1C" }, // Yellow
    { day: "Sun", hours: 0.8, color: "#BC1A1A" }, // Red
  ]);

  const maxHours = Math.max(...data.map((item) => item.hours));

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-4 rounded-2xl shadow-sm w-full max-w-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-800">
          Time Spent Studying
        </h3>
        <span className="text-xs text-gray-400 cursor-pointer">More...</span>
      </div>

      <div className="flex justify-between items-end h-40 px-1">
        {data.map((item, index) => {
          const heightPercent = (item.hours / maxHours) * 100;

          return (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Bar wrapper with gray background */}
              <div className="relative w-2 bg-gray-200 h-32 rounded-full overflow-hidden flex items-end">
                <div
                  className="absolute bottom-0 w-full"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: item.color,
                    borderRadius: "9999px",
                  }}
                />
              </div>
              <div className="mt-2 text-xs text-gray-500">{item.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSpentStudying;
