"use client";

// Sample data — replace or map through your actual API later
const classes = [
  {
    title: "Basic AI concepts",
    date: "Tomorrow",
    time: "12:00 - 1:00",
    img: "/images/AiImage.png", 
  },
  {
    title: "patterns",
    date: "12 April",
    time: "3:00 - 4:30",
    img: "/images/PatternsImage.png",
  },
  {
    title: "Robotics",
    date: "13 April",
    time: "1:00 - 2:00",
    img: "/images/RoboticsImage.png",
  },
  {
    title: "Maths",
    date: "14 April",
    time: "2:00 - 5:00",
    img: "/images/MathsImage.png",
  },
];

const UpcomingClasses = () => {
  return (
    <div
      className="bg-{#fff} rounded-2xl p-4 shadow-sm border border-gray-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Up Coming classes</h3>

      <div className="space-y-4">
        {classes.map((cls, index) => (
          <button key={index} className="flex items-center gap-3">
            <img
              src={cls.img}
              alt={cls.title}
              className="w-12 h-12 object-cover rounded-md"
            />
            <div className="flex flex-col text-xs text-gray-700">
              <span className="font-medium">{cls.title}</span>
              <span className="text-gray-500">{cls.date}</span>
              <span>{cls.time}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;
