"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LearningCuate from "../../assets/images/Learning-cuate.png";
import { toast } from "react-toastify";
import { stepStyles } from "../../assets//styles/styles";
import {
  onboardingAnimations,
  topicHoverAnimation
} from "../../assets/animations/animations";

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname, age } = location.state || {
    nickname: "Explorer",
    age: [],
  };

  const [selectedTopic, setSelectedTopic] = useState("");
  const [hoveredTopic, setHoveredTopic] = useState("");

  const learningTopics = [
    { name: "Python", code: "print('Hello, Python!')" },
    { name: "Math", code: "E = mc^2" },
    { name: "Robotics", code: "robot.move_forward()" },
    { name: "Machine Language", code: "101010101010" },
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleNext = () => {
    if (selectedTopic) {
      toast.success(
        `Awesome! You're all set to start learning ${selectedTopic}!`
      );
      navigate("../step4", {
        state: { nickname, age, learningTopic: selectedTopic },
      });
    } else {
      toast.error("Please select what you're most excited to learn.");
    }
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
            src={LearningCuate}
            alt="Person learning with a book"
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
              className={stepStyles.progressFill("75%")}
              style={{ width: "75%" }}
            />
          </div>

          <h2 className={stepStyles.heading}>
            What are you most excited to learn?
          </h2>

          <div className={stepStyles.topicButtonsContainer}>
            {learningTopics.map((topic) => (
              <div
                key={topic.name}
                onMouseEnter={() => setHoveredTopic(topic.name)}
                onMouseLeave={() => setHoveredTopic("")}
              >
                <motion.button
                  {...topicHoverAnimation.button}
                  onClick={() => handleTopicSelect(topic.name)}
                  className={stepStyles.topicButton(
                    selectedTopic === topic.name
                  )}
                >
                  {topic.name}
                </motion.button>
                {hoveredTopic === topic.name && (
                  <motion.div
                    {...topicHoverAnimation}
                    className={stepStyles.topicHint}
                  >
                    <code>{topic.code}</code>
                  </motion.div>
                )}
              </div>
            ))}
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

export default Step3;
