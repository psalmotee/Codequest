"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const students = [
  {
    id: 1,
    name: "Temitope Badejo",
    progress: 92,
    avatar: "/images/student1.png",
  },
  {
    id: 2,
    name: "Grace Okonkwo",
    progress: 88,
    avatar: "/images/student2.png",
  },
  {
    id: 3,
    name: "Amoke Olatunji",
    progress: 73,
    avatar: "/images/student3.png",
  },
  { id: 4, name: "Joseph Koiki", progress: 90, avatar: "/images/student4.png" },
];

const MyStudents = () => {
  const [studentList] = useState(students);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-5 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">My Students</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {studentList.map((student) => (
          <div key={student.id} className="flex items-center space-x-4">
            <img
              src={student.avatar || "/placeholder.svg"}
              alt={student.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{student.name}</span>
                <span className="text-sm font-medium">{student.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyStudents;
