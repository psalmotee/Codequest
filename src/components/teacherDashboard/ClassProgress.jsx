"use client";

import { useState } from "react";

const classes = [
  { id: 1, name: "Class A", progress: 85 },
  { id: 2, name: "Class B", progress: 72 },
  { id: 3, name: "Class C", progress: 65 },
  { id: 4, name: "Class D", progress: 58 },
  { id: 5, name: "Class E", progress: 45 },
];

const ClassProgress = () => {
  const [classList] = useState(classes);

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white p-5 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Class Progress</h3>
      </div>
      <div className="space-y-4">
        {classList.map((cls) => (
          <div key={cls.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{cls.name}</span>
            </div>
            <div className="flex items-center">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mr-3">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${cls.progress}%` }}
                ></div>
              </div>
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-10 h-10 transform -rotate-90"
                >
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    strokeDasharray={`${cls.progress}, 100`}
                  />
                </svg>
                <span className="absolute text-xs font-medium">
                  {cls.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassProgress;
