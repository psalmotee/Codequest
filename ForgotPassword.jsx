import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { forgotPasswordStyles } from "../assets/styles/styles";
import forgotPasswordIllustration from "../assets/images/ForgotPasswordImage.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const transitionBase = {
  duration: 0.8,
  ease: [0.42, 0, 0.58, 1],
};

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const ref = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);
  const backLinkRef = useRef(null);

  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
  const isImgInView = useInView(imgRef, { triggerOnce: true, threshold: 0.3 });
  const isFormInView = useInView(formRef, { triggerOnce: true, threshold: 0.3 });
  const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.3 });
  const isBackLinkInView = useInView(backLinkRef, { triggerOnce: true, threshold: 0.3 });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    console.log("Password reset email sent to:", email);
    toast.success("Check your inbox!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setEmail("");
    setIsDisabled(true);
    setCountdown(30);
    setSuccessMessage("A password reset link has been sent to your email.");
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    } else {
      setIsDisabled(false);
      setSuccessMessage("");
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <motion.div
      ref={ref}
      className={forgotPasswordStyles.container}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        ref={imgRef}
        src={forgotPasswordIllustration}
        alt="Forgot Password Illustration"
        className={forgotPasswordStyles.illustration}
        initial={fadeInUp.initial}
        animate={isImgInView ? fadeInUp.animate : {}}
        transition={{ ...transitionBase, delay: 0.1 }}
      />

      <motion.div
        ref={textRef}
        initial={fadeInUp.initial}
        animate={isTextInView ? fadeInUp.animate : {}}
        transition={{ ...transitionBase, delay: 0.2 }}
      >
        <h2 className={forgotPasswordStyles.heading}>Forgot Password</h2>
      </motion.div>

      <motion.form
        ref={formRef}
        className={forgotPasswordStyles.form}
        onSubmit={handleSubmit}
        initial={fadeInUp.initial}
        animate={isFormInView ? fadeInUp.animate : {}}
        transition={{ ...transitionBase, delay: 0.3 }}
      >
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className={forgotPasswordStyles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {email && (
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setEmail("")}
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        {successMessage && (
          <p className="text-green-600 text-sm text-center mt-2">{successMessage}</p>
        )}

        <button
          type="submit"
          className={`${forgotPasswordStyles.button} ${
            isDisabled ? "cursor-not-allowed bg-gray-400" : ""
          }`}
          disabled={isDisabled}
        >
          <span className={forgotPasswordStyles.buttonText}>
            {isDisabled ? `Resend in ${countdown}s` : "Reset Password"}
          </span>
          <span className={forgotPasswordStyles.buttonHover}></span>
        </button>
      </motion.form>

      <motion.p
        ref={backLinkRef}
        className={forgotPasswordStyles.backLink}
        initial={fadeInUp.initial}
        animate={isBackLinkInView ? fadeInUp.animate : {}}
        transition={{ ...transitionBase, delay: 0.4 }}
      >
        <span className={forgotPasswordStyles.backLinkIcon}>
          <FaArrowLeft />
        </span>
        Go back to{" "}
        <Link to="/signin" className={forgotPasswordStyles.backLinkText}>
          Sign In
        </Link>
      </motion.p>
    </motion.div>
  );
}

export default ForgotPassword;
