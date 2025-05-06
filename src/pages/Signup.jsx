import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import Illustration from "/images/SignupImage.png";
import GoogleLogo from "/images/GoogleImage.png";
import { signStyles, signBtnStyles } from "../assets/styles/styles";
import { signupAnimations } from "../assets/animations/animations";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
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

    toast.success("Signup successful! 🎉 Redirecting to verify email...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/verify-email", { state: { email: formData.email } });
    }, 2000);
  };

  return (
    <div className={signStyles.container}>
      {/* Left Side - Illustration */}
      <motion.div
        className={signStyles.illustrationContainer}
        {...signupAnimations.illustration}
      >
        <img
          src={Illustration}
          alt="Illustration"
          className={signStyles.illustrationImage}
        />
      </motion.div>

      {/* Right Side - Signup Form */}
      <motion.div
        className={signStyles.formContainer}
        {...signupAnimations.formContainer}
      >
        <motion.h2 className={signStyles.heading} {...signupAnimations.heading}>
          Welcome to the fun!
        </motion.h2>

        <motion.p
          className={signStyles.subHeading}
          {...signupAnimations.subHeading}
        >
          Let's get started and have an awesome time.
        </motion.p>

        <motion.form
          className={signStyles.form}
          onSubmit={handleSubmit}
          {...signupAnimations.form}
        >
          {/* Full Name */}
          <div className={signStyles.inputGroup}>
            <label className={signStyles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={signStyles.input}
              autoComplete="name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            {errors.fullName && (
              <p className={signStyles.errorText}>{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
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

          {/* Password */}
          <div className={signStyles.inputGroup}>
            <label className={signStyles.label}>Password</label>
            <div className={signStyles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className={signStyles.passwordInput}
                autoComplete="new-password"
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

          {/* Signup Button */}
          <motion.button
            type="submit"
            className={signBtnStyles.button}
            {...signupAnimations.button}
          >
            <span className={signBtnStyles.buttonText}>Sign Up</span>
            <span className={signBtnStyles.buttonHover}></span>
          </motion.button>

          {/* Google Signup Button */}
          <motion.button
            className={signStyles.googleButton}
            {...signupAnimations.button}
          >
            <img
              src={GoogleLogo}
              alt="Google"
              className={signStyles.googleLogo}
            />
            Sign up with Google
          </motion.button>
        </motion.form>

        {/* Already have an account? */}
        <motion.p
          className={signStyles.signText}
          {...signupAnimations.signInText}
        >
          Already have an account?{" "}
          <Link to="/signin" className={signStyles.signLink}>
            Sign In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
