// Animations for various components in the application
// These animations are defined using the Framer Motion library
// and are used to create smooth transitions and effects for different UI elements.
// Each animation is defined as an object with initial, animate, and transition properties
// to control the animation behavior.
// The animations are categorized based on the components they are used in, such as header, hero, features, etc.
// The animations include effects like fading in, scaling up, and moving elements in different directions.
// The animations are reusable and can be applied to different components throughout the application.
//
// The animations are designed to enhance the user experience by providing visual feedback and engaging interactions.
// The animations are defined in a modular way, allowing for easy updates and maintenance in the future.

// To use install "npm install framer-motion" in your project
// and import the necessary components from "framer-motion" in your React components.
// import { motion, useInView  } from "framer-motion";

// This is shared animation properties for FadeIn and Scale animations
const sharedAnimations = {
  fadeInUp: { opacity: 1, y: 0 },
  fadeInLeft: { opacity: 1, x: 0 },
  fadeInRight: { opacity: 1, x: 0 },
  scaleUp: { scale: 1 },
};

// Animation properties for the share button
// This includes hover and tap effects to enhance user interaction
const shareButtonAnimations = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Common transition properties for animations
// This includes duration and delay settings for different animations
const commonTransitions = {
  fadeInUp: { duration: 0.8 },
  fadeInUpShort: { duration: 0.6 },
  fadeInUpWithDelay: { duration: 0.5, delay: 0.6 },
};

// Reusable animation rules
const fadeInUpAnimation = sharedAnimations.fadeInUp;
const fadeInLeftAnimation = sharedAnimations.fadeInLeft;
const fadeInRightAnimation = sharedAnimations.fadeInRight;
const scaleUpAnimation = sharedAnimations.scaleUp;

export const headerAnimations = {
  header: {
    initial: { y: -100, opacity: 0 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  logo: {
    initial: { scale: 0 },
    animate: scaleUpAnimation,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  navItem: {
    initial: { opacity: 0, x: -20 },
    animate: fadeInLeftAnimation,
  },
  dropdown: {
    initial: { opacity: 0, y: -10 },
    animate: fadeInUpAnimation,
    transition: commonTransitions.fadeInUpShort,
  },
  mobileMenu: {
    initial: { opacity: 0, y: -20 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.4 },
  },
  decorative: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: commonTransitions.fadeInUpWithDelay,
  },
};

export const heroAnimations = {
  textContent: {
    initial: { opacity: 0, x: -50 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
  imageSection: {
    initial: { opacity: 0, x: 50 },
    animate: fadeInRightAnimation,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export const featureAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: commonTransitions.fadeInUp,
  },
  card: (index) => ({
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
  slide: {
    animate: { x: ["0%", "-30%", "0%"] },
    transition: { repeat: Infinity, duration: 100, ease: "linear" },
  },
};

export const aboutAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  imageSection: {
    initial: { x: -50, opacity: 0 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
  textContent: {
    initial: { x: 50, opacity: 0 },
    animate: fadeInRightAnimation,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
  label: {
    initial: { opacity: 0, y: -10 },
    animate: fadeInUpAnimation,
    transition: commonTransitions.fadeInUpWithDelay,
  },
  image: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

// share Animations with "About Us" section
export const parentsAnimations = aboutAnimations;

// share Animations with "About Us" section
export const teachersAnimations = aboutAnimations;

export const newsletterAnimations = {
  label: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: commonTransitions.fadeInUpShort,
  },
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.2, duration: 0.6 },
  },
  description: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.4, duration: 0.6 },
  },
  form: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.8, duration: 0.6 },
  },
  input: {
    whileHover: { scale: 1.02 },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

export const enrollAnimations = {
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.3, duration: 0.6 },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

export const footerAnimations = {
  decorative: {
    initial: { y: -50, opacity: 0 },
    animate: fadeInUpAnimation,
    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
  },
  container: {
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  logo: {
    animate: { y: [0, -5, 0] },
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  socialIcon: {
    whileHover: {
      scale: 1.2,
      textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    },
    transition: { type: "spring", stiffness: 300 },
  },
  link: {
    whileHover: { y: -3, color: "#2d2dff" },
    transition: { type: "spring", stiffness: 200 },
  },
};

export const selectAccountAnimations = {
  illustrationContainer: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  formContainer: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  },
  button: () => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  }),
  signInText: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.9 },
  },
};

export const signupAnimations = {
  illustration: {
    initial: { opacity: 0, x: -50 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.6 },
  },
  formContainer: {
    initial: { opacity: 0, x: 50 },
    animate: fadeInRightAnimation,
    transition: { duration: 0.6 },
  },
  heading: {
    initial: { opacity: 0, y: -10 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.2 },
  },
  subHeading: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
  },
  form: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 },
  },
  signInText: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.7 },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

export const signinAnimations = {
  illustration: {
    initial: { opacity: 0, x: -50 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  formContainer: {
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  heading: {
    initial: { opacity: 0, y: -20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.2 },
  },
  subHeading: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 },
  },
  signupText: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.6 },
  },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

export const verifyEmailAnimations = {
  illustration: {
    initial: { opacity: 0, y: -20 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.6 },
  },
  heading: {
    initial: { opacity: 0, y: -10 },
    animate: fadeInUpAnimation,
    transition: { delay: 0.2, duration: 0.5 },
  },
  emailText: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4, duration: 0.5 },
  },
  description: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.6, duration: 0.5 },
  },
  verifyButton: {
    initial: { opacity: 0, y: 10 },
    animate: fadeInUpAnimation,
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
  resendButton: {
    initial: { opacity: 0, y: 10 },
    animate: fadeInUpAnimation,
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};

export const forgotPasswordAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  illustration: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  form: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  },
};

// Onboarding page animations
export const onboardingAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
  leftContent: {
    initial: { opacity: 0, x: -40 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.8 },
  },
  rightContent: {
    initial: { opacity: 0, x: 40 },
    animate: fadeInRightAnimation,
    transition: { duration: 0.8 },
  },
  imageContainer: {
    initial: { opacity: 0, x: 40 },
    animate: fadeInRightAnimation,
    transition: { duration: 0.8 },
  },
  textContainer: {
    initial: { opacity: 0, x: -40 },
    animate: fadeInLeftAnimation,
    transition: { duration: 0.8 },
  },
  completedContainer: {
    initial: { opacity: 0, y: 20 },
    animate: fadeInUpAnimation,
    transition: { duration: 0.6, delay: 0.2 },
  },
  rocketAnimation: {
    initial: { opacity: 0, y: 50 },
    animate: fadeInUpAnimation,
    transition: {
      duration: 0.8,
      delay: 0.4,
      type: "spring",
      stiffness: 100,
    },
  },
  progressBar: {
    initial: { width: "0%" },
    animate: { width: "100%" },
    transition: { duration: 0.5 },
  },
  progressFill: (width) => ({
    initial: { width: "0%" },
    animate: { width },
    transition: { duration: 0.5 },
  }),
};

// Topic hover animation for Step3
export const topicHoverAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { type: "easeInOut", duration: 0.5 },
  button: {
    whileHover: shareButtonAnimations.whileHover,
    whileTap: shareButtonAnimations.whileTap,
  },
};
