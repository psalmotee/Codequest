import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { enrollAnimations, enrollStyles } from "../../assets/styles/animations";

function EnrollSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={enrollStyles.section}>
      <div className={enrollStyles.container}>
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
          animate={isInView ? enrollAnimations.button.animate : {}}
          transition={enrollAnimations.button.transition}
          whileHover={enrollAnimations.button.whileHover}
        
          >
          <Link
            to="/select-account"
            className={enrollStyles.button}
          >
            <span className={enrollStyles.buttonHover}></span>
            <span className={enrollStyles.buttonText}>Enroll here</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default EnrollSection;
