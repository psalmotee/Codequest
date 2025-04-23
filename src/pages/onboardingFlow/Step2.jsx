"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import MyStery from "../../assets/images/Mystery box-bro.png";
import { stepStyles } from "../../assets//styles/styles";
import {
  onboardingAnimations
} from "../../assets/animations/animations";

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname } = location.state || { nickname: "Explorer" };

  const [age, setAge] = useState("");

  const handleAgeChange = (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, "");
    setAge(value);
  };

  const handleNext = () => {
    if (!age) {
      toast.error("Please enter your age.");
      return;
    }

    const ageNum = Number.parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 100) {
      toast.error("Please enter a valid age between 5 and 100.");
      return;
    }

    // Navigate to step 3 with both nickname and age
    navigate("../step3", {
      state: {
        nickname,
        age: ageNum,
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
          <img src={MyStery} alt="Mystery Box" className={stepStyles.image} />
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
              className={stepStyles.progressFill("50%")}
              style={{ width: "50%" }}
            />
          </div>

          <h2 className={stepStyles.heading}>How old are you?</h2>
          <p className={stepStyles.paragraph}>
            This helps us choose the perfect level for your missions!
          </p>

          <form action="">
            <input
              type="text"
              placeholder="Enter your age here"
              value={age}
              onChange={handleAgeChange}
              className={stepStyles.input}
              maxLength={3}
            />
            <p className={stepStyles.ageHint}>
              (Please enter a number between 5 and 100)
            </p>
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

export default Step2;
