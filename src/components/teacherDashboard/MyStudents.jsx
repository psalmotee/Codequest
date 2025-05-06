"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Ellipse46 from "/images/Ellipse-46.png";
import Ellipse47 from "/images/Ellipse-47.png";
import Ellipse49 from "/images/Ellipse-49.png";
import Jayy from "/images/jayy.png";

const students = [
  {
    id: 1,
    name: "Temitope Balogun",
    progress: 92,
    avatar: Ellipse46,
  },
  {
    id: 2,
    name: "Grace Okonkwo",
    progress: 88,
    avatar: Ellipse47,
  },
  {
    id: 3,
    name: "Jumoke Olatunji",
    progress: 73,
    avatar: Ellipse49,
  },
  {
    id: 4,
    name: "Joseph Ajayi",
    progress: 60,
    avatar: Jayy,
  },
  {
    id: 5,
    name: "Samuel Adeyemi",
    progress: 85,
    avatar: Ellipse46,
  },
  {
    id: 6,
    name: "Chinwe Eze",
    progress: 78,
    avatar: Ellipse47,
  },
  {
    id: 7,
    name: "Adebayo Akin",
    progress: 90,
    avatar: Ellipse49,
  },
  {
    id: 8,
    name: "Ngozi Nwosu",
    progress: 65,
    avatar: Jayy,
  },
  {
    id: 9,
    name: "Tunde Alabi",
    progress: 80,
    avatar: Ellipse46,
  },
  {
    id: 10,
    name: "Amaka Obi",
    progress: 70,
    avatar: Ellipse47,
  },
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
      <div
        className="space-y-4 max-h-64 overflow-y-auto"
      >
        {studentList.map((student) => (
          <div key={student.id} className="flex items-center space-x-4">
            <img
              src={student.avatar}
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
