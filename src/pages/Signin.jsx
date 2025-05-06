import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Illustration from "/images/SigninImage.png";
import GoogleImage from "/images/GoogleImage.png";
import { motion, useInView } from "framer-motion";
import { signStyles, signinStyles, signBtnStyles } from "../assets/styles/styles";
import { signinAnimations } from "../assets/animations/animations";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const illustrationRef = useRef(null);
  const formRef = useRef(null);
  const isIllustrationInView = useInView(illustrationRef, {
    triggerOnce: true,
    threshold: 0.3,
  });
  const isFormInView = useInView(formRef, {
    triggerOnce: true,
    threshold: 0.3,
  });

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Check your details and try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "light",
      });
      return;
    }

    console.log("Sign-in successful", formData);

    toast.success("Sign-in successful! 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "colored",
    });
  };

  return (
    <div className={signStyles.container}>
      {/* Left Side - Illustration */}
      <motion.div
        ref={illustrationRef}
        className={signStyles.illustrationContainer}
        initial={signinAnimations.illustration.initial}
        animate={
          isIllustrationInView ? signinAnimations.illustration.animate : {}
        }
        transition={signinAnimations.illustration.transition}
      >
        <img
          src={Illustration}
          alt="Illustration"
          className={signStyles.illustrationImage}
        />
      </motion.div>

      {/* Right Side - Sign-In Form */}
      <motion.div
        ref={formRef}
        className={signStyles.formContainer}
        initial={signinAnimations.formContainer.initial}
        animate={isFormInView ? signinAnimations.formContainer.animate : {}}
        transition={signinAnimations.formContainer.transition}
      >
        <motion.h2
          className={signStyles.heading}
          initial={signinAnimations.heading.initial}
          animate={isFormInView ? signinAnimations.heading.animate : {}}
          transition={signinAnimations.heading.transition}
        >
          Welcome back, champ!
        </motion.h2>
        <motion.p
          className={signStyles.subHeading}
          initial={signinAnimations.subHeading.initial}
          animate={isFormInView ? signinAnimations.subHeading.animate : {}}
          transition={signinAnimations.subHeading.transition}
        >
          Let's get back to the adventure!
        </motion.p>

        <form className={signStyles.form} onSubmit={handleSubmit}>
          <div className={signStyles.inputGroup}>
            <label className={signStyles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={signStyles.input}
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className={signStyles.errorText}>{errors.email}</p>
            )}
          </div>

          <div className={signStyles.inputGroup}>
            <label className={signStyles.label}>Password</label>
            <div className={signStyles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className={signStyles.passwordInput}
                autoComplete="current-password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className={signStyles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className={signStyles.errorText}>{errors.password}</p>
            )}
          </div>

          <div className={signinStyles.rememberMeContainer}>
            <label className={signinStyles.rememberMeLabel}>
              <input type="checkbox" className={signinStyles.checkbox} />
              Remember me
            </label>
            <Link to="/forgot-password" className={signinStyles.forgotPassword}>
              Forgot Password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className={signBtnStyles.button}
            {...signinAnimations.button}
          >
            <span className={signBtnStyles.buttonText}>Sign In</span>
            <span className={signBtnStyles.buttonHover}></span>
          </motion.button>

          <motion.button
            className={signStyles.googleButton}
            {...signinAnimations.button}
          >
            <img
              src={GoogleImage}
              alt="Google"
              className={signStyles.googleLogo}
            />
            Sign in with Google
          </motion.button>
        </form>

        <motion.p
          className={signStyles.signText}
          initial={signinAnimations.signupText.initial}
          animate={isFormInView ? signinAnimations.signupText.animate : {}}
          transition={signinAnimations.signupText.transition}
        >
          Don't have an account?{" "}
          <Link to="/select-account" className={signStyles.signLink}>
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SignIn;
