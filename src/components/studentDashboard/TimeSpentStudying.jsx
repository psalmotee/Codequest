import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TimeSpentStudying = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Hours Studied',
        data: [1.5, 2, 1, 3.5, 2.5, 4, 2],
        backgroundColor: '#4C3AFF',
        borderRadius: 6,
        categoryPercentage: 0.6, // Reduce width of entire group
        barPercentage: 0.7,      // Reduce width of each bar inside the group
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Makes it more flexible in a responsive layout
    scales: {
      y: {
        ticks: {
          stepSize: 1,
          color: '#6B7280',
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <motion.div
      className="bg-white p-5 rounded-2xl shadow-md w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Time Spent Studying</h3>
      <div className="relative h-[200px] sm:h-[240px] md:h-[280px]">
        <Bar data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default TimeSpentStudying;
