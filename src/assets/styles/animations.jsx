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

export const headerStyles = {
  header: `fixed top-0 left-0 w-full z-50 bg-[#FF8721]`,
  container: `container px-4 mx-auto flex items-center justify-between`,
  logoContainer: `flex items-center w-1/2 md:w-1/4 lg:w-1/5`,
  logoLink: `flex items-center`,
  desktopNav: `hidden lg:flex space-x-4 text-white`,
  navItem: `relative group`,
  navLink: `font-medium py-2 px-4 relative over-hidden rounded-md transition duration-300 flex items-center gap-2`,
  navLinkHighlighted: `bg-[#2d2dff]`,
  navLinkContent: `relative flex items-center z-10`,
  hoverEffect: `absolute left-0 top-0 h-full w-0 bg-[#1212d6] transition-all duration-500 group-hover:w-full`,
  dropdownMenu: `absolute left-0 top-full bg-white text-gray-900 shadow-md rounded-md w-48 py-2 z-50`,
  dropdownItem: `group/item`,
  dropdownLink: `block px-4 py-2 relative over-hidden rounded-md transition duration-500`,
  dropdownLinkText: `relative z-10 text-gray-900 group-hover/item:text-white`,
  dropdownHoverEffect: `hover-effect absolute left-0 top-0 h-full w-0 bg-[#1212d6] transition-all`,
  mobileMenuButton: `lg:hidden`,
  hamburgerButton: `text-white focus:outline-none`,
  hamburgerIcon: `h-8 w-8 md:h-10 md:w-10`,
  mobileMenu: `lg:hidden bg-[#FF8721] py-4 absolute top-full w-full shadow-md`,
  mobileMenuContainer: `container mx-auto flex flex-col items-center space-y-3`,
  mobileMenuItem: `w-full text-center`,
  mobileDropdownButton: `w-48 py-2 px-6 text-white text-lg font-medium relative inline-block group rounded-md`,
  mobileDropdownContent: `relative z-10 flex items-center gap-1`,
  mobileDropdownMenu: `bg-white text-gray-900 shadow-md rounded-md w-44 py-2 mt-2 mx-auto`,
  mobileDropdownLink: `block px-4 py-2 relative over-hidden rounded-md transition duration-500`,
  mobileDropdownLinkText: `relative z-10`,
  mobileNavLink: `w-48 py-2 px-6 text-white text-lg font-medium relative inline-block group rounded-md`,
  mobileNavLinkText: `relative z-10`,
  decorativeContainer: `absolute bottom-1 left-0 translate-y-full z-0 w-full over-hidden`,
  decorativeImage: `w-full h-auto object-cover pointer-events-none`,
};

export const heroAnimations = {
  textContent: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  button: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.6 },
  },
  imageSection: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export const heroStyles = {
  button: `relative over-hidden bg-[#2d2dff] text-white font-bold py-1 px-3 rounded-[10px] shadow-md transition duration-300 group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-300 group-hover:w-full`,
  imageContainer: `relative w-full max-w-2xl md:h-60 lg:h-90 over-hidden rounded-[256px] transition-transform duration-500 transform hover:scale-105`,
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

export const featureStyles = {
  section: `relative w-full over-hidden`,
  container: `container mx-auto px-4 relative z-10`,
  heading: `text-center font-bold text-2xl md:text-3xl mb-10`,
  grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto`,
  card: `bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105`,
  iconContainer: (color) =>
    `${color} text-white p-2 w-12 h-12 flex items-center justify-center rounded-md`,
  icon: `w-6 h-6`,
  title: `text-lg font-semibold mt-4`,
  divider: `block mt-2 w-10 h-1 bg-blue-500`,
  description: `text-gray-600 mt-2 text-sm`,
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

export const aboutStyles = {
  section: `md:py-20 py-12`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-5 md:gap-20 flex flex-col lg:flex-row h-full max-w-7xl mx-auto lg:min-h-[400px]`,
  imageContainer: `flex-1 lg:basis-1/2 md:w-130 md:mx-auto`,
  image: `rounded-lg shadow-xl w-full h-full object-center`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-lg md:text-l font-semibold text-gray-900`,
  paragraph: `text-[400] text-gray-600`,
  button: `relative over-hidden bg-[#2D2DFF] text-white font-bold py-2 px-2 rounded-[10px] shadow-md transition duration-300 w-30 group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
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

export const parentsStyles = {
  section: `md:py-20`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-5 md:gap-20 flex flex-col lg:flex-row h-full max-w-7xl mx-auto lg:min-h-[400px]`,
  imageContainer: `flex-1 lg:basis-1/2 md:w-130 md:mx-auto order-first lg:order-last`,
  image: `rounded-lg shadow-xl w-full h-full object-center`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-lg md:text-l font-semibold text-gray-900`,
  list: `text-gray-600 mt-4 space-y-4 text-sm`,
  listItemBold: `font-bold`,
  button: `relative over-hidden bg-[#2D2DFF] text-white font-bold py-2 px-6 rounded-[10px] shadow-md transition duration-300 w-40 group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
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

export const teachersStyles = {
  section: `py-12 md:py-20`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-5 md:gap-20 flex flex-col lg:flex-row h-full max-w-7xl mx-auto lg:min-h-[400px]`,
  imageContainer: `flex-1 lg:basis-1/2 md:w-130 md:mx-auto`,
  image: `rounded-lg shadow-xl w-full h-full object-center`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-lg md:text-l font-semibold text-gray-900`,
  paragraph: `text-[400] text-gray-600`,
  button: `relative over-hidden bg-[#2D2DFF] text-white font-bold py-2 px-6 rounded-[10px] shadow-md transition duration-300 w-60 group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
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

export const newsletterStyles = {
  section: `bg-[#FFE7D3] py-12`,
  container: `container mx-auto text-center px-4`,
  label: `text-md text-[#2D2DFF] font-bold`,
  heading: `text-2xl md:text-2xl font-bold text-gray-900 mt-2`,
  description: `text-gray-600 mt-2 text-md max-w-2xl mx-auto`,
  formWrapper: `mt-6 flex justify-center w-1/2 md:w-1/2 mx-auto`,
  formContainer: `flex w-full max-w-md align-items-center justify-center`,
  input: `p-3 flex-grow bg-white border border-[#2D2DFF] rounded-l-md focus:outline-none focus:border-[#2D2DFF]/50 hover:border-[#1212d6] transition duration-300`,
  button: `relative over-hidde bg-[#2D2DFF] text-white font-semibold px-5 py-3 rounded-r-md transition duration-300 group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
};

export const enrollAnimations = {
  heading: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.6 },
  },
  button: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.5, duration: 0.4 },
  },
};

export const enrollStyles = {
  section: `py-16 mt-12 text-center`,
  container: `container mx-auto px-4`,
  heading: `text-3xl text-[#2D2DFF] font-bold mb-6`,
  button: `relative inline-block px-6 py-2 font-bold text-white rounded-[10px] shadow-md bg-[#2d2dff] over-hidden group transition duration-300`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
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

export const footerStyles = {
  footer: `relative w-full text-black md:mt-12`,
  decorativeContainer: `w-full absolute top-0 left-0 -translate-y-full z-10`,
  decorativeImage: `w-full h-auto object-cover`,
  mainContainer: `bg-[#FF8721] mx-auto pt-8 md:pt-16 pb-8 w-full`,
  innerContainer: `container mx-auto px-6`,
  contentWrapper: `flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left relative`,
  section: `mb-6 md:mb-0`,
  sectionTitle: `font-semibold mb-2 md:mb-0`,
  socialContainer: `flex space-x-6 mb-6 md:mb-0`,
  socialLink: `text-black text-xl hover:text-[#2d2dff]`,
  linksList: `text-sm space-y-1`,
  linkItem: `cursor-pointer`,
  emailLink: `hover:text-[#2d2dff]`,
  copyright: `text-center text-sm mt-8`,
};
