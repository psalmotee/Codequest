"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import OuterSpace from "../../assets/images/Outer space-pana.png";
import { toast } from "react-toastify";
import { stepStyles } from "../../assets//styles/styles";
import {
  onboardingAnimations
} from "../../assets/animations/animations";

const Step1 = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const handleNext = (e) => {
    if (!nickname.trim()) {
      toast.error("Please enter your name or nickname.");
      return;
    }

    if (/[^a-zA-Z0-9\s]/.test(nickname)) {
      toast.error(
        "Special characters are not allowed in the name or nickname."
      );
      return;
    }
    // Prevent default form submission behavior
    e.preventDefault();
    navigate("../step2", { state: { nickname } });
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
            src={OuterSpace}
            alt="Alien in a spaceship"
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
              className={stepStyles.progressFill("25%")}
              style={{ width: "25%" }}
            />
          </div>

          <h2 className={stepStyles.heading}>What's your name or nickname?</h2>
          <p className={stepStyles.paragraph}>
            We'll use this to personalize your journey!
          </p>
          <form
            action=""
          >
            <input
              type="text"
              placeholder="Enter your name or nickname here"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className={stepStyles.input}
            />

            <motion.button
              {...onboardingAnimations.button}
              onClick={handleNext}
              className={stepStyles.button}
            >
              <span className={stepStyles.buttonText}>Next</span>
              <span className={stepStyles.buttonHover}></span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Step1;
