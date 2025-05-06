import { motion } from 'framer-motion';
import BannerImage from '/images/BannerImage.png'

const WelcomeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#2D2DFFCC] text-white p-6 rounded-2xl flex items-center justify-between shadow-md"
    >
      {/* Text Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome Back, Jayy One
        </h2>
        <p className="text-sm md:text-base">
          You're <span className="font-semibold">60%</span> done this
          week—awesome work!
          <br />
          Keep going, you're almost there!
        </p>
      </div>

      {/* Illustration */}
      <div className="hidden md:block w-[150px]">
        <img
          src= {BannerImage} 
          alt="Studying illustration"
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
