"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const attendanceData = [
  { day: "Mon", present: 90, absent: 10 },
  { day: "Tue", present: 85, absent: 15 },
  { day: "Wed", present: 75, absent: 25 },
  { day: "Thu", present: 80, absent: 20 },
  { day: "Fri", present: 70, absent: 30 },
];

const AttendanceChart = () => {
  const [data] = useState(attendanceData);
  const maxValue = 100; // Maximum possible value for scaling

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-5 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Attendance</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          This week
        </button>
      </div>

      <div className="h-64 flex flex-col">
        {/* Chart Legend */}
        <div className="flex items-center justify-end mb-2 space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-sm mr-1"></div>
            <span className="text-xs">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded-sm mr-1"></div>
            <span className="text-xs">Absent</span>
          </div>
        </div>

        {/* Y-axis labels */}
        <div className="flex flex-1">
          <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {/* Chart bars */}
          <div className="flex-1 flex items-end justify-between">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                {/* Stacked bars */}
                <div className="w-full flex justify-center mb-1">
                  <div className="w-8 flex flex-col">
                    {/* Present bar */}
                    <div
                      className="w-full bg-blue-600 rounded-t"
                      style={{ height: `${(item.present / maxValue) * 180}px` }}
                    ></div>
                    {/* Absent bar */}
                    <div
                      className="w-full bg-amber-500"
                      style={{ height: `${(item.absent / maxValue) * 180}px` }}
                    ></div>
                  </div>
                </div>

                {/* X-axis label */}
                <span className="text-xs text-gray-500">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AttendanceChart;
