import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  forgotPasswordStyles,
} from "../assets/styles/styles";
import { forgotPasswordAnimations } from "../assets/animations/animations";
import forgotPasswordIllustration from "../assets/images/ForgotPasswordImage.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


function ForgotPassword() {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);

  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
  const isImgInView = useInView(imgRef, { triggerOnce: true, threshold: 0.3 });
  const isFormInView = useInView(formRef, {
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className={forgotPasswordStyles.container}
      initial={forgotPasswordAnimations.container.initial}
      animate={isInView ? forgotPasswordAnimations.container.animate : {}}
      transition={forgotPasswordAnimations.container.transition}
    >
      <motion.img
        ref={imgRef}
        src={forgotPasswordIllustration}
        alt="Forgot Password Illustration"
        className={forgotPasswordStyles.illustration}
        initial={forgotPasswordAnimations.illustration.initial}
        animate={
          isImgInView ? forgotPasswordAnimations.illustration.animate : {}
        }
        transition={forgotPasswordAnimations.illustration.transition}
      />

      <motion.form
        ref={formRef}
        className={forgotPasswordStyles.form}
        initial={forgotPasswordAnimations.form.initial}
        animate={isFormInView ? forgotPasswordAnimations.form.animate : {}}
        transition={forgotPasswordAnimations.form.transition}
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit logic
        }}
      >
        <h2 className={forgotPasswordStyles.heading}>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className={forgotPasswordStyles.input}
          required
        />
        <button type="submit" className={forgotPasswordStyles.button}>
          <span className={forgotPasswordStyles.buttonText}>
            Reset Password
          </span>
          <span className={forgotPasswordStyles.buttonHover}></span>
        </button>
      </motion.form>
      <p className={forgotPasswordStyles.backLink}>
        <span className={forgotPasswordStyles.backLinkIcon}>
          <FaArrowLeft />
        </span>
        Go back to{" "}
        <Link to="/signin" className={forgotPasswordStyles.backLinkText}>
          Sign In
        </Link>
      </p>
    </motion.div>
  );
}

export default ForgotPassword;
