"use client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CarImage from "../../assets/images/Starman-bro.png";
import { onboardingStyles } from "../../assets//styles/styles";
import { onboardingAnimations } from "../../assets/animations/animations";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("step1");
  };

  return (
    <motion.div
      {...onboardingAnimations.container}
      className={onboardingStyles.container}
    >
      <motion.div
        {...onboardingAnimations.imageContainer}
        className={onboardingStyles.imageContainer}
      >
        <div className={onboardingStyles.imageWrapper}>
          <img
            src={CarImage}
            alt="Car & Planet Illustration"
            className={onboardingStyles.image}
          />
        </div>
      </motion.div>

      {/* Right Side Illustration */}
      <motion.div
        {...onboardingAnimations.textContainer}
        className={onboardingStyles.textContainer}
      >
        <h1 className={onboardingStyles.heading}>Welcome to CodeQuest</h1>
        <p className={onboardingStyles.paragraph}>
          Ready for an awesome STEM adventure? <br />
          Let's set up your journey in just a few quick steps!
        </p>

        <motion.button
          {...onboardingAnimations.button}
          className={onboardingStyles.button}
          onClick={handleStart}
        >
          <span className={onboardingStyles.buttonText}>START</span>
          <span className={onboardingStyles.buttonHover}></span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Onboarding;
