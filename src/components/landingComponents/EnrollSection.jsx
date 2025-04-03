import { Link } from "react-router-dom"; 
import { motion } from "framer-motion"; 
import { useRef } from "react";
import { useInView } from "framer-motion"; 
import { enrollStyles } from "../../assets/styles/styles";
import { enrollAnimations } from "../../assets/animations/animations"; 

function EnrollSection() {
  const ref = useRef(null); // Creating a reference for the section element
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 }); // Checking if the section is in view with a threshold of 30%

  return (
    <section ref={ref} className={enrollStyles.section}>
      {" "}
      {/* Section container with styles */}
      <div className={enrollStyles.container}>
        {" "}
        {/* Inner container for content */}
        <motion.h2
          initial={enrollAnimations.heading.initial} 
          animate={isInView ? enrollAnimations.heading.animate : {}} 
          transition={enrollAnimations.heading.transition} 
          className={enrollStyles.heading} 
        >
          Are you interested in joining CodeQuest?
        </motion.h2>
        <motion.div
          initial={enrollAnimations.button.initial} 
          animate={isInView ? enrollAnimations.button.animate : {}} button
          whileHover={enrollAnimations.button.whileHover}
        >
          <Link
            to="/select-account"
            className={enrollStyles.button}
          >
            <span className={enrollStyles.buttonHover}></span>{" "}
            {/* Hover effect for the button */}
            <span className={enrollStyles.buttonText}>Enroll here</span>{" "}
            {/* Button text */}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default EnrollSection;