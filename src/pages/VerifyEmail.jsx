import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailIllustration from "/images/VerifyEmailImage.png";
import { verifyEmailStyles } from "../assets/styles/styles";
import { verifyEmailAnimations } from "../assets/animations/animations";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || "your email";
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    const checkVerificationStatus = () => {
      const verified = false; // Replace with actual logic
      if (verified) {
        navigate("/signin");
      }
    };
    checkVerificationStatus();
  }, [navigate]);

  const handleResendEmail = () => {
    setResendLoading(true);
    setTimeout(() => {
      alert("Verification email resent! 📩 Check your inbox.");
      setResendLoading(false);
    }, 2000);
  };

  return (
    <div className={verifyEmailStyles.container}>
      <motion.img
        src={emailIllustration}
        alt="Email Verification"
        className={verifyEmailStyles.illustration}
        {...verifyEmailAnimations.illustration}
      />

      <motion.h2
        className={verifyEmailStyles.heading}
        {...verifyEmailAnimations.heading}
      >
        Please Verify Your Email Address
      </motion.h2>

      <motion.p
        className={verifyEmailStyles.emailText}
        {...verifyEmailAnimations.emailText}
      >
        Verification email sent to: <strong>{userEmail}</strong>
      </motion.p>

      <motion.p
        className={verifyEmailStyles.description}
        {...verifyEmailAnimations.description}
      >
        Click the link we sent to your email to complete the verification and
        get started.
      </motion.p>

      <motion.button
        className={verifyEmailStyles.verifyButton}
        onClick={() => navigate("/signin")}
        {...verifyEmailAnimations.verifyButton}
      >
        <span className={verifyEmailStyles.verifyButtonText}>
          I Have Verified My Email
        </span>
        <span className={verifyEmailStyles.verifyButtonHover}></span>
      </motion.button>

      <motion.button
        className={verifyEmailStyles.resendButton}
        onClick={handleResendEmail}
        disabled={resendLoading}
        whileHover={verifyEmailAnimations.resendButton.whileHover}
        whileTap={verifyEmailAnimations.resendButton}
        {...verifyEmailAnimations.resendButton}
      >
        {resendLoading ? "Resending..." : "Resend Verification Email"}
      </motion.button>
    </div>
  );
};

export default VerifyEmail;
