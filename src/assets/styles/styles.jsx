// This file contains the styles for the components in the application.
// It uses Tailwind CSS classes to style the components and are responsive and adapt to different screen sizes using Tailwind's responsive utilities.
// The styles are organized into different sections for better readability and maintainability.
// Each section contains styles for a specific component or group of components.
// The styles are also organized into shared styles for reusability across different components.

// The styles are exported as objects, which can be imported and used in the respective components.
// The shared styles are defined at the top and then used in the respective component styles.
//
//
//
// 
// 

// This is the shared styles for the container used in multiple sections
const sharedContainerStyles = `container mx-auto px-4`;

// This is the shared button styles for the Hero, About, Parents, and Teachers, Newsltters, Enroll, SignIn, SignUp, Verify email, Forgot Password sections
const sharedButtonStyles = `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-md shadow-md transition duration-300 cursor-pointer group`;
const sharedButtonHoverStyles = `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`;
const sharedButtonTextStyles = `relative z-10`;

export const headerStyles = {
  header: `fixed top-0 left-0 w-full z-50 bg-[#FF8721]`,
  container: `${sharedContainerStyles} flex items-center justify-between`,
  logoContainer: `flex items-center w-1/2 md:w-1/4 lg:w-1/5`,
  logoLink: `flex items-center`,
  desktopNav: `hidden lg:flex space-x-4 text-white`,
  navItem: `relative group`,
  navLink: `font-medium py-1 px-3 relative overflow-hidden rounded-md transition duration-300 flex items-center gap-2`,
  navLinkHighlighted: `bg-[#2d2dff]`,
  navLinkContent: `relative flex items-center z-10`,
  hoverEffect: `absolute left-0 top-0 h-full w-0 bg-[#1212d6] transition-all duration-500 group-hover:w-full`,
  dropdownMenu: `absolute left-0 top-full bg-white text-gray-900 shadow-md rounded-md w-35 py-2 z-50`,
  dropdownItem: `group/item`,
  dropdownLink: `block py-1 text-center relative overflow-hidden rounded-md transition duration-500`,
  dropdownLinkText: `relative z-10 text-gray-900 group-hover/item:text-white`,
  dropdownHoverEffect: `hover-effect absolute left-0 top-0 h-full w-0 bg-[#1212d6] transition-all`,
  mobileMenuButton: `lg:hidden`,
  hamburgerButton: `text-white focus:outline-none`,
  hamburgerIcon: `h-8 w-8 md:h-10 md:w-10 hover:text-[#2d2dff] transition duration-300`,
  mobileMenu: `lg:hidden bg-[#FF8721] py-2 absolute top-full w-full shadow-md overflow-x-hidden`,
  mobileMenuContainer: `container mx-auto flex flex-col items-center md:space-y-4`,
  mobileMenuItem: `w-full text-center`,
  mobileDropdownButton: `w-35 py-2 px-2 text-white text-lg font-medium relative overflow-hidden inline-block group rounded-md transition-colors duration-300`,
  mobileDropdownContent: `relative z-10 flex items-center gap-1 justify-center`,
  mobileDropdownMenu: `bg-white text-gray-900 shadow-md rounded-md w-40 py-2 mt-2 mx-auto border border-gray-200`,
  mobileDropdownLink: `block py-2 relative overflow-hidden rounded-md transition duration-500 hover:bg-gray-50 group`,
  mobileDropdownLinkText: `relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300`,
  mobileNavLink: `w-35 py-2 text-white text-lg font-medium relative overflow-hidden inline-block group rounded-md transition-colors duration-300`,
  mobileNavLinkText: `relative z-10`,
  decorativeContainer: `absolute bottom-1 left-0 translate-y-full z-0 w-full overflow-hidden`,
  decorativeImage: `w-full h-auto object-cover pointer-events-none`,
};

export const heroStyles = {
  section: `py-16 px-8 relative overflow-hidden mt-5 md:mt-20 lg:mt-40`,
  container: `${sharedContainerStyles} flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12`,
  contentContainer: `w-full max-w-md text-center md:text-left relative z-10`,
  headingContainer: `min-h-[160px] md:min-h-[130px] lg:min-h-[100px] flex items-center overflow-hidden`,
  heading: `text-3xl md:text-4xl font-bold leading-[1.2] inline-block`,
  description: `text-gray-700 text-lg mb-8`,
  button: sharedButtonStyles,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
  imageContainer: `w-full max-w-2xl md:h-60 lg:h-90 relative w-full relative transition-transform duration-500 transform hover:scale-105`,
  image: `w-full h-full object-cover rounded-[256px] shadow-xl`,
};

export const featureStyles = {
  section: `relative w-full overflow-hidden`,
  container: `${sharedContainerStyles} relative z-10`,
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

// This is the shared styles for the About, Parents, and Teachers sections
const sharedSectionStyles = `py-12 md:py-20 overflow-x-hidden`;
const shareWrapperStyles = `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-8 md:gap-20 flex flex-col lg:flex-row max-w-7xl mx-auto`;
const sharedImageContainerStyles = `flex-1 lg:basis-1/2`;
const sharedImageStyles = `rounded-lg shadow-xl w-full h-full object-cover`;
const sharedContentContainerStyles = `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`;
const sharedLabelStyles = `text-[#2D2DFF] text-sm font-medium`;
const sharedHeadingStyles = `text-xl md:text-2xl font-semibold text-gray-900`;
const sharedParagraphStyles = `text-base text-gray-600`;

export const aboutStyles = {
  section: sharedSectionStyles,
  container: sharedContainerStyles,
  wrapper: shareWrapperStyles,
  imageContainer: sharedImageContainerStyles,
  image: sharedImageStyles,
  contentContainer: sharedContentContainerStyles,
  label: sharedLabelStyles,
  heading: sharedHeadingStyles,
  paragraph: sharedParagraphStyles,
  button: `${sharedButtonStyles} w-25`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const parentsStyles = {
  section: `md:py-2 overflow-x-hidden`,
  container: sharedContainerStyles,
  wrapper: shareWrapperStyles,
  imageContainer: `${sharedImageContainerStyles} order-first lg:order-last`,
  image: sharedImageStyles,
  contentContainer: sharedContentContainerStyles,
  label: sharedLabelStyles,
  heading: aboutStyles.heading,
  list: `text-gray-600 mt-4 space-y-4 text-sm md:text-base`,
  listItemBold: `font-bold`,
  button: `${sharedButtonStyles} w-30`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const teachersStyles = {
  section: sharedSectionStyles,
  container: sharedContainerStyles,
  wrapper: shareWrapperStyles,
  imageContainer: sharedImageContainerStyles,
  image: sharedImageStyles,
  contentContainer: sharedContentContainerStyles,
  label: sharedLabelStyles,
  heading: sharedHeadingStyles,
  paragraph: sharedParagraphStyles,
  button: `${sharedButtonStyles} w-55`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const newsletterStyles = {
  section: `bg-[#FFE7D3] py-12 overflow-x-hidden`,
  container: `container mx-auto text-center px-4`,
  label: `text-md text-[#2D2DFF] font-bold`,
  heading: `text-xl md:text-2xl font-bold text-gray-900 mt-2`,
  description: `text-gray-600 mt-2 text-sm md:text-md max-w-2xl mx-auto`,
  formWrapper: `mt-6 flex justify-center w-full md:w-3/4 lg:w-1/2 mx-auto px-4`,
  formContainer: `flex w-full max-w-sm`,
  input: `p-2 flex-grow bg-white border border-[#2D2DFF] w-2/3 rounded-l-md focus:outline-none focus:border-[#2D2DFF]/50 hover:border-[#1212d6] transition duration-300`,
  button: `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-r-md transition duration-300 cursor-pointer group whitespace-nowrap`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const enrollStyles = {
  section: `py-16 md:py-30 md:mt-12 text-center`,
  container: sharedContainerStyles,
  heading: `text-3xl text-[#2D2DFF] font-bold mb-6`,
  button: `${sharedButtonStyles} inline-block`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const footerStyles = {
  footer: `relative w-full text-black md:mt-12`,
  decorativeContainer: `w-full absolute top-0 left-0 -translate-y-full z-10`,
  decorativeImage: `w-full h-auto object-cover`,
  mainContainer: `bg-[#FF8721] mx-auto pt-8 md:pt-16 pb-8 w-full`,
  innerContainer: sharedContainerStyles,
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

// This is the shared styles for the SignIn and SignUp sections
export const signStyles = {
  container: `flex item-center justify-center min-h-screen px-4 md:px-0 bg-white`,
  illustrationContainer: `hidden md:flex w-1/2 items-center justify-center bg-orange-500`,
  illustrationImage: `w-3/4 h-auto object-contain`,
  formContainer: `w-full md:w-1/2 flex flex-col items-center justify-center p-1`,
  heading: `text-2xl md:text-3xl font-bold text-gray-900 text-center`,
  subHeading: `text-gray-500 text-sm mt-1 text-center`,
  form: `mt-4 w-full max-w-sm`,
  inputGroup: `mb-2`,
  label: `block text-gray-700 font-medium mb-1`,
  input: `w-full p-3 border border-[#2D2DFF] focus:outline-none focus:border-[#2D2DFF]/50 rounded-md hover:border-[#1212d6] transition duration-300`,
  passwordContainer: `flex items-center relative`,
  passwordInput: `w-full p-3 border border-[#2D2DFF] focus:outline-none focus:border-[#2D2DFF]/50 rounded-md hover:border-[#1212d6] transition duration-300 pr-10`,
  eyeButton: `absolute right-3 text-gray-500 cursor-pointer`,
  errorText: `text-red-500 text-sm`,
  googleButton: `w-full flex items-center justify-center mt-5 py-3 border border-[#2D2DFF] focus:outline-none focus:border-[#2D2DFF]/50 rounded-md hover:border-[#1212d6] transition duration-300 text-gray-700 hover:bg-gray-100 cursor-pointer`,
  googleLogo: `w-5 h-5 mr-2`,
  signText: `mt-6 text-sm text-gray-600`,
  signLink: `text-blue-600 font-semibold hover:underline`,
};

export const selectAccountStyles = {
  formContainer: `${signStyles.formContainer} bg-[#2D2DFF] p-6`,
  heading: `text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center px-4`,
  buttonContainer: `space-y-4 w-3/4`,
  button: `w-full bg-white text-black font-semibold py-3 rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer`,
  signInText: `mt-6 text-sm text-black`,
  signInlink: `font-semibold hover:underline text-[#ff8721]`,
};

// This is the shared styles for the SignIn and SignUp buttons
export const signBtnStyles = {
  button: `${sharedButtonStyles} w-full py-3 mt-2`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

export const signinStyles = {
  rememberMeContainer: `flex items-center justify-between mb-4 text-sm`,
  rememberMeLabel: `flex items-center text-gray-600`,
  checkbox: `mr-2 cursor-pointer`,
  forgotPassword: `text-blue-600 hover:underline`,
  signInButton: `w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition cursor-pointer`,
};

export const verifyEmailStyles = {
  container: `flex flex-col items-center justify-center h-screen bg-white`,
  illustration: `w-48 mb-6`,
  heading: `text-xl font-semibold text-gray-900`,
  emailText: `text-gray-600 mt-2`,
  description: `text-gray-500 text-center mt-2 px-6`,
  verifyButton: `${sharedButtonStyles} mt-4 px-6 py-3 text-white`,
  verifyButtonHover: `${sharedButtonHoverStyles} bg-[#2D2DFF]`,
  verifyButtonText: sharedButtonTextStyles,
  resendButton: `mt-4 px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition`,
};

export const forgotPasswordStyles = {
  container: `flex flex-col items-center justify-center min-h-screen px-4`,
  illustration: `w-40 mb-6`,
  form: `w-full max-w-sm bg-white p-6 rounded-lg shadow-md`,
  heading: `text-xl font-semibold mb-4`,
  input: `w-full px-4 py-2 border border-[#2D2DFF] focus:outline-none focus:border-[#2D2DFF]/50 rounded-md hover:border-[#1212d6] transition duration-300 mb-4`,
  button: `${sharedButtonStyles} w-full py-3 mt-2`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
  errorText: `text-red-500 text-sm`,
  backLink: `mt-4 text-sm text-gray-600 flex items-center`,
  backLinkIcon: `mr-1 text-[#2D2DFF]`,
  backLinkText: `ml-1 text-blue-600 font-semibold hover:underline`,
  backLinkHover: `hover:text-[#2d2dff]`,
};

// Onboarding styles
export const onboardingStyles = {
  container: `flex flex-col lg:flex-row items-center justify-between h-screen px-8 bg-white`,
  imageContainer: `flex-1 flex items-center justify-center order-1 lg:order-2`,
  image: `w-full`,
  imageWrapper: `w-80 md:w-[500px] transition-transform duration-300 transform hover:scale-105`,
  textContainer: `flex-1 max-w-lg text-center md:text-left order-2 lg:order-1`,
  heading: `text-2xl md:text-4xl text-center font-bold text-gray-900`,
  paragraph: `mt-4 text-gray-600 text-sm md:text-base text-center`,
  button: `${sharedButtonStyles} mt-6 px-10 py-1 flex justify-center mx-auto`,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};

// Step styles
export const stepStyles = {
  container: `${onboardingStyles.container} lg:space-x-60 md:px-24`,
  imageContainer: `hidden md:flex flex-1 items-center justify-center`,
  imageWrapper: `${onboardingStyles.imageWrapper}`,
  image: `${onboardingStyles.image}`,
  formContainer: `flex-1 max-w-lg text-center md:text-left flex flex-col items-center justify-center md:items-start md:justify-start`,
  formWrapper: `w-full max-w-[450px] bg-white rounded-lg p-6 shadow-sm border border-gray-100`,
  progressBar: `w-full h-2 bg-gray-200 rounded-full mb-6`,
  progressFill: () => `h-full bg-blue-600 rounded-full`,
  heading: `text-2xl font-bold text-gray-900 mb-2`,
  paragraph: `text-gray-600 mb-6`,
  form: `w-full flex flex-col items-center justify-centerl`,
  input: `w-full p-3 border border-[#2D2DFF] focus:outline-none focus:border-[#2D2DFF]/50 rounded-md hover:border-[#1212d6] transition duration-300`,
  ageHint: `text-red-500 text-sm mt-2 text-center`,
  button: onboardingStyles.button,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
  topicButtonsContainer: `flex flex-col space-y-3 mb-6 relative`,
  topicButton: (isSelected) =>
    `w-full py-3 px-4 rounded-full border transition-all cursor-pointer ${
      isSelected
        ? "border-[#2D2DFF] bg-blue-50 text-blue-700 cursor-pointer"
        : "border-gray-200 hover:border-[#1212d6] text-gray-700"
    }`,
  topicHint: `absolute left-0 mt-2 w-full bg-gray-100 text-gray-800 text-sm p-3 rounded-lg shadow-lg z-10`,
};

// Completed onboarding styles
export const completedStyles = {
  container: `${onboardingStyles.container} md:px-24`,
  textContainer: `flex-1 max-w-lg flex flex-col items-center justify-center text-center md:text-left`,
  heading: `text-3xl md:text-4xl text-center font-bold text-gray-900 mb-2`,
  paragraph: `text-gray-600 mb-8`,
  imageContainer: `flex-1 flex items-center justify-center mt-8 md:mt-0`,
  imageWrapper: onboardingStyles.wrapper,
  image: onboardingStyles.image,
  button: onboardingStyles.button,
  buttonHover: sharedButtonHoverStyles,
  buttonText: sharedButtonTextStyles,
};