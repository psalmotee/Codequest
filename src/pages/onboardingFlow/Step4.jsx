"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import CodingAmico from "../../assets/images/Coding-amico.png";
import { stepStyles } from "../../assets//styles/styles";
import {
  onboardingAnimations,
  topicHoverAnimation
} from "../../assets/animations/animations";

const Step4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname, age, learningTopic } = location.state || {
    nickname: "Explorer",
    age: 0,
    learningTopic: "",
  };

  const [codingExperience, setCodingExperience] = useState("");

  const handleExperienceSelect = (experience) => {
    setCodingExperience(experience);
  };

  const handleNext = () => {
    if (!codingExperience) {
      toast.error("Please select your coding experience.");
      return;
    }

    // Navigate to dashboard or final step
    toast.success("Onboarding complete! Welcome to CodeQuest!");
    navigate("../final", {
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
      className={stepStyles.container}
    >
      {/* Left Side Illustration */}
      <motion.div
        {...onboardingAnimations.leftContent}
        className={stepStyles.imageContainer}
      >
        <div className={stepStyles.imageWrapper}>
          <img
            src={CodingAmico}
            alt="Coding on laptop"
            className={stepStyles.image}
          />
        </div>
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        {...onboardingAnimations.rightContent}
        className={stepStyles.formContainer}
      >
        <div className={stepStyles.formWrapper}>
          {/* Progress Bar */}
          <div className={stepStyles.progressBar}>
            <div
              className={stepStyles.progressFill("100%")}
              style={{ width: "100%" }}
            />
          </div>

          <h2 className={stepStyles.heading}>
            Have you done any coding before?
          </h2>

          <div className={stepStyles.topicButtonsContainer}>
            {["Never tried", "A bit", "I've built stuff!"].map(
              (option) => (
                <motion.div
                  key={option}
                  {...topicHoverAnimation.button}
                >
                  <motion.button
                    onClick={() => handleExperienceSelect(option)}
                    className={stepStyles.topicButton(
                      codingExperience === option
                    )}
                  >
                    {option}
                  </motion.button>
                </motion.div>
              )
            )}
          </div>

          <motion.button
            {...onboardingAnimations.button}
            onClick={handleNext}
            className={stepStyles.button}
          >
            <span className={stepStyles.buttonText}>Next</span>
            <span className={stepStyles.buttonHover}></span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Step4;
