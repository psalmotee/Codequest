"use client";

import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import RocketRafiki from "../../assets/images/Rocket-rafiki.png";
import { completedStyles } from "../../assets//styles/styles";
import { onboardingAnimations } from "../../assets/animations/animations";

const CompletedOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname, age, learningTopic, codingExperience } = location.state || {
    nickname: "Explorer",
    age: 0,
    learningTopic: "",
    codingExperience: "",
  };

  useEffect(() => {
    // Trigger confetti when component mounts
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleStartMission = () => {
    // Navigate to the first mission or dashboard
    navigate("/sudent-dashboard", {
      state: {
        nickname,
        age,
        learningTopic,
        codingExperience,
      },
    });
  };

  return (
    <motion.div
      {...onboardingAnimations.container}
      className={completedStyles.container}
    >
      {/* Left Side Content */}
      <motion.div
        {...onboardingAnimations.completedContainer}
        className={completedStyles.textContainer}
      >
        <h1 className={completedStyles.heading}>
          You're ready to blast off, {nickname}!
        </h1>
        <p className={completedStyles.paragraph}>
          Time to jump into CodeQuest!
        </p>

        <motion.button
          {...onboardingAnimations.button}
          onClick={handleStartMission}
          className={completedStyles.button}
        >
          <span className={completedStyles.buttonText}>
            Start My First Mission
          </span>
          <span className={completedStyles.buttonHover}></span>
        </motion.button>
      </motion.div>

      {/* Right Side Illustration */}
      <motion.div
        {...onboardingAnimations.rocketAnimation}
        className={completedStyles.imageContainer}
      >
        <div className={completedStyles.imageWrapper}>
          <img
            src={RocketRafiki || "/placeholder.svg"}
            alt="Astronaut on rocket"
            className={completedStyles.image}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompletedOnboarding;
