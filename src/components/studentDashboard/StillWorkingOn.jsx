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
      className="bg-white p-5 rounded-2xl shadow-md w-full"
    >
      <h3 className="text-xl font-semibold mb-5 text-gray-900">Still Working On</h3>

      <div className="flex flex-col space-y-6 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col">
              <p className="text-base font-medium text-gray-800">{course.title}</p>
              <p className="text-sm text-gray-500">{course.chapter}</p>
            </div>

            {/* Circular Progress Ring */}
            <div className="relative w-12 h-12">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-[#4C3AFF]"
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset={`${100 - course.progress}`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">
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
