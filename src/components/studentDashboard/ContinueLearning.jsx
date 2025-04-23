import { motion } from 'framer-motion';

const continueCourses = [
  {
    id: 1,
    title: 'Geometry & shapes',
    progress: 66,
    image: 'images/GeometryImage.png', // Replace with your image
  },
  {
    id: 2,
    title: 'Intro to Python',
    progress: 38,
    image: '/images/PythonImage.png',
  },
];

const ContinueLearning = () => {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Continue Learning</h3>
        <button className="text-sm text-blue-500 hover:underline">View all</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {continueCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
          >
            <div className="h-36 w-full overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-semibold text-gray-700">{course.title}</h4>
              <span className="text-xs text-gray-500">{course.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <button className="w-full text-center text-sm font-medium text-blue-600 border border-blue-600 rounded-lg py-1.5 hover:bg-blue-50 transition">
              Continue
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContinueLearning;
