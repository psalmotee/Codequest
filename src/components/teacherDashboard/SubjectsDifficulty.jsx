"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const subjectsData = [
  { name: "Python", value: 40, color: "#FF6384" },
  { name: "C++", value: 20, color: "#36A2EB" },
  { name: "Robotics", value: 30, color: "#FFCE56" },
  { name: "Maths", value: 10, color: "#4BC0C0" },
];

const SubjectsDifficulty = () => {
  const [data] = useState(subjectsData);

  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-5 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Subjects Difficulty</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          View report
        </button>
      </div>

      <div className="flex items-center justify-center h-64">
        {/* Pie Chart */}
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Create pie chart segments */}
            {data.map((item, index) => {
              // Calculate segment positioning
              let cumulativePercent = 0;
              for (let i = 0; i < index; i++) {
                cumulativePercent += (data[i].value / total) * 100;
              }

              const percent = (item.value / total) * 100;
              const startX =
                50 + 40 * Math.cos((2 * Math.PI * cumulativePercent) / 100);
              const startY =
                50 + 40 * Math.sin((2 * Math.PI * cumulativePercent) / 100);
              const endX =
                50 +
                40 *
                  Math.cos((2 * Math.PI * (cumulativePercent + percent)) / 100);
              const endY =
                50 +
                40 *
                  Math.sin((2 * Math.PI * (cumulativePercent + percent)) / 100);

              // Create SVG arc path
              const largeArcFlag = percent > 50 ? 1 : 0;
              const pathData = [
                `M 50 50`,
                `L ${startX} ${startY}`,
                `A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `Z`,
              ].join(" ");

              return <path key={index} d={pathData} fill={item.color} />;
            })}
            {/* Inner circle for donut effect */}
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
        </div>

        {/* Legend */}
        <div className="ml-6 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-sm mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectsDifficulty;
