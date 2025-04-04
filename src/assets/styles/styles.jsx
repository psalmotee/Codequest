export const headerStyles = {
  header: `fixed top-0 left-0 w-full z-50 bg-[#FF8721]`,
  container: `container px-4 mx-auto flex items-center justify-between`,
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
  container: `container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12`,
  contentContainer: `w-full max-w-md text-center md:text-left relative z-10`,
  headingContainer: `min-h-[160px] md:min-h-[130px] lg:min-h-[100px] flex items-center overflow-hidden`,
  heading: `text-3xl md:text-4xl font-bold leading-[1.2] inline-block`,
  description: `text-gray-700 text-lg mb-8`,
  button: `relative overflow-hidden bg-[#2d2dff] text-white font-semibold py-1 px-3 rounded-md shadow-md transition duration-300 cursor-pointer group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
  imageContainer: `w-full max-w-2xl md:h-60 lg:h-90 relative w-full  relative transition-transform duration-500 transform hover:scale-105`,
  image: `w-full h-full object-cover rounded-[256px] shadow-xl`,
};

export const featureStyles = {
  section: `relative w-full overflow-hidden`,
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

export const aboutStyles = {
  section: `py-12 md:py-20 overflow-x-hidden`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-8 md:gap-20 flex flex-col lg:flex-row max-w-7xl mx-auto`,
  imageContainer: `flex-1 lg:basis-1/2`,
  image: `rounded-lg shadow-xl w-full h-full object-cover`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-xl md:text-2xl font-semibold text-gray-900`,
  paragraph: `text-base text-gray-600`,
  button: `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-md shadow-md transition duration-300 w-25 cursor-pointer group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
};

export const parentsStyles = {
  section: `md:py-2 overflow-x-hidden`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-8 md:gap-20 flex flex-col lg:flex-row max-w-7xl mx-auto`,
  imageContainer: `flex-1 lg:basis-1/2 order-first lg:order-last`,
  image: `rounded-lg shadow-xl w-full h-full object-cover`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-xl md:text-2xl font-semibold text-gray-900`,
  list: `text-gray-600 mt-4 space-y-4 text-sm md:text-base`,
  listItemBold: `font-bold`,
  button: `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-md  shadow-md transition duration-300 w-30 cursor-pointer group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
};

export const teachersStyles = {
  section: `py-12 md:py-20 overflow-x-hidden`,
  container: `container mx-auto px-4`,
  wrapper: `bg-[#f1f1f1] shadow-xl rounded-lg px-4 md:px-16 py-12 gap-8 md:gap-20 flex flex-col lg:flex-row max-w-7xl mx-auto`,
  imageContainer: `flex-1 lg:basis-1/2`,
  image: `rounded-lg shadow-xl w-full h-full object-cover`,
  contentContainer: `flex-1 lg:basis-1/2 space-y-4 flex flex-col justify-center`,
  label: `text-[#2D2DFF] text-sm font-medium`,
  heading: `text-xl md:text-2xl font-semibold text-gray-900`,
  paragraph: `text-base text-gray-600`,
  button: `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-md  shadow-md transition duration-300 w-55 cursor-pointer group`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
};

export const newsletterStyles = {
  section: `bg-[#FFE7D3] py-12 overflow-x-hidden`,
  container: `container mx-auto text-center px-4`,
  label: `text-md text-[#2D2DFF] font-bold`,
  heading: `text-xl md:text-2xl font-bold text-gray-900 mt-2`,
  description: `text-gray-600 mt-2 text-sm md:text-md max-w-2xl mx-auto`,
  formWrapper: `mt-6 flex justify-center w-full  md:w-3/4 lg:w-1/2 mx-auto px-4`,
  formContainer: `flex w-full max-w-sm`,
  input: `p-2 flex-grow bg-white border border-[#2D2DFF] w-2/3 rounded-l-md focus:outline-none focus:border-[#2D2DFF]/50 hover:border-[#1212d6] transition duration-300`,
  button: `relative overflow-hidden bg-[#2D2DFF] text-white font-semibold py-1 px-3 rounded-r-md transition duration-300 cursor-pointer group whitespace-nowrap`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
};

export const enrollStyles = {
  section: `py-16 md:py-30 md:mt-12 text-center`,
  container: `container mx-auto px-4`,
  heading: `text-3xl text-[#2D2DFF] font-bold mb-6`,
  button: `relative inline-block font-semibold text-white py-1 px-3 rounded-md  shadow-md bg-[#2d2dff] overflow-hidden group transition duration-300 cursor-pointer`,
  buttonHover: `absolute inset-0 bg-[#1212d6] w-0 transition-all duration-500 ease-out group-hover:w-full`,
  buttonText: `relative z-10`,
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
