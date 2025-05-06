import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const thisWeekData = [
  { day: "Mon", Present: 75, Absent: 25 },
  { day: "Tue", Present: 80, Absent: 20 },
  { day: "Wed", Present: 57, Absent: 43 },
  { day: "Thu", Present: 70, Absent: 30 },
  { day: "Fri", Present: 55, Absent: 45 },
];

const pastWeekData = [
  { day: "Mon", Present: 70, Absent: 30 },
  { day: "Tue", Present: 75, Absent: 25 },
  { day: "Wed", Present: 55, Absent: 45 },
  { day: "Thur", Present: 65, Absent: 35 },
  { day: "Fri", Present: 45, Absent: 45 },
];

const AttendanceChart = () => {
  const [data, setData] = useState(thisWeekData); // Default to 'thisWeekData'
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("This week");

  const periods = ["This week", "Last week", "2 weeks ago", "3 weeks ago"];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectPeriod = (period) => {
    setSelectedPeriod(period);
    setShowDropdown(false);

    // Update data based on selected period
    if (period === "This week") {
      setData(thisWeekData);
    } else if (period === "Last week") {
      setData(pastWeekData);
    } else if (period === "2 weeks ago") {
      setData(pastWeekData); // Update with the actual data for two weeks ago
    } else if (period === "3 weeks ago") {
      setData(pastWeekData); // Update with the actual data for three weeks ago
    }
  };

  return (
    <motion.div
      className="p-4 rounded-xl bg-[#fff8f0] shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Attendance</h3>
        <div className="relative z-50">
          <button
            onClick={toggleDropdown}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            {selectedPeriod}
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {periods.map((period, index) => (
                <button
                  key={index}
                  onClick={() => selectPeriod(period)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 text-sm mb-2">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span> Present
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span> Absent
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} barGap={12}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            ticks={[0, 25, 50, 75, 100]}
            domain={[0, 100]}
          />
          <Tooltip />
          <Bar
            dataKey="Absent"
            stackId="a"
            fill="#fb923c"
            barSize={10}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="Present"
            stackId="a"
            fill="#3b82f6"
            barSize={10}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AttendanceChart;
