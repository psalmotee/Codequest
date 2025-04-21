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
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
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
      className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Time Spent Studying</h3>
      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default TimeSpentStudying;
