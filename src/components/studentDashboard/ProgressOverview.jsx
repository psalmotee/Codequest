import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressOverview = () => {
  const percentage = 60;

  return (
    <div
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Your Progress</h3>
        <select className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="w-32 h-32 mx-auto mt-10">
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#2D2DFF",
            trailColor: "#E5E7EB",
          })}
        >
          <div className="text-center mt-2">
            <p className="text-xl font-bold text-[#2D2DFF]">{percentage}%</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProgressOverview;
