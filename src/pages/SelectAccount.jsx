import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { signStyles, selectAccountStyles } from "../assets/styles/styles";
import { selectAccountAnimations } from "../assets/animations/animations";
import Illustration from "/images/SelectAccountImage.png";

const SelectAccount = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const handleAccountSelection = (accountType) => {
    navigate("/signup", { state: { role: accountType } });
  };

  return (
    <div ref={ref} className={signStyles.container}>
      {/* Left Side - Illustration Only (Hidden at 500px) */}
      <motion.div
        className={signStyles.illustrationContainer}
        initial={selectAccountAnimations.illustrationContainer.initial}
        animate={isInView ? selectAccountAnimations.illustrationContainer.animate : {}}
        transition={selectAccountAnimations.illustrationContainer.transition}
      >
        <img
          src={Illustration}
          alt="Illustration"
          className={signStyles.illustrationImage}
        />
      </motion.div>

      {/* Right Side - Account Selection */}
      <motion.div
        className={selectAccountStyles.formContainer}
        initial={selectAccountAnimations.formContainer.initial}
        animate={isInView ? selectAccountAnimations.formContainer.animate : {}}
        transition={selectAccountAnimations.formContainer.transition}
      >
        <motion.h2
          className={selectAccountStyles.heading}
          initial={selectAccountAnimations.heading.initial}
          animate={isInView ? selectAccountAnimations.heading.animate : {}}
          transition={selectAccountAnimations.heading.transition}
        >
          Choose an account type to start with!
        </motion.h2>

        <div className={selectAccountStyles.buttonContainer}>
          {["Student", "Teacher", "Class Code", "Parents", "Admin"].map(
            (type, index) => (
              <motion.button
                key={type}
                className={selectAccountStyles.button}
                whileHover={selectAccountAnimations.button(index).whileHover}
                whileTap={selectAccountAnimations.button(index).whileTap}
                onClick={() => handleAccountSelection(type)}
                initial={selectAccountAnimations.button(index).initial}
                animate={
                  isInView ? selectAccountAnimations.button(index).animate : {}
                }
                transition={selectAccountAnimations.button(index).transition}
              >
                {type}
              </motion.button>
            )
          )}
        </div>

        {/* Sign-in link */}
        <motion.p
          className={selectAccountStyles.signInText}
          initial={selectAccountAnimations.signInText.initial}
          animate={isInView ? selectAccountAnimations.signInText.animate : {}}
          transition={selectAccountAnimations.signInText.transition}
        >
          Already have an account?{" "}
          <Link to="/signin" className={selectAccountStyles.signInlink}>
            Sign In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SelectAccount;
