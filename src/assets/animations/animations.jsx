export const headerAnimations = {
  header: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  logo: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  navItem: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  dropdown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  mobileMenu: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  },
  decorative: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.6 },
  },
};

export const heroAnimations = {
  textContent: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
  imageSection: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export const featureAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  card: (index) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

export const aboutAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  imageSection: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
  textContent: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
  label: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.6 },
  },
  image: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
};

export const parentsAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  imageSection: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
  textContent: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
  label: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.6 },
  },
  image: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
};

export const teachersAnimations = {
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  imageSection: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
  textContent: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
  label: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.6 },
  },
  image: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
};

export const newsletterAnimations = {
  label: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.6 },
  },
  description: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.6 },
  },
  form: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.8, duration: 0.6 },
  },
  input: {
    whileHover: { scale: 1.02 },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
};

export const enrollAnimations = {
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.6 },
  },
  button: {
    whileHover: { scale: 1.05 },
  },
};

export const footerAnimations = {
  decorative: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
  },
  container: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
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
