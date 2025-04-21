import { motion } from "framer-motion";

const courses = [
  { title: "Number Ninjas", chapter: "Chapter 2", progress: 27 },
  { title: "ML Explorers", chapter: "Chapter 4", progress: 53 },
  { title: "Build & Play", chapter: "Level 1", progress: 17 },
  { title: "Math Missions", chapter: "Level 7", progress: 75 },
];

const StillWorkingOn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/2"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Still Working On</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm"
          >
            <div>
              <p className="font-medium text-sm text-gray-700">{course.title}</p>
              <p className="text-xs text-gray-500">{course.chapter}</p>
            </div>

            {/* Circular progress ring */}
            <div className="relative w-12 h-12">
              <svg className="w-full h-full">
                <circle
                  className="text-gray-200"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r="18"
                  cx="24"
                  cy="24"
                />
                <circle
                  className="text-[#4C3AFF]"
                  strokeWidth="4"
                  strokeDasharray="113.1"
                  strokeDashoffset={`${113.1 - (113.1 * course.progress) / 100}`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="18"
                  cx="24"
                  cy="24"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                {course.progress}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StillWorkingOn;
