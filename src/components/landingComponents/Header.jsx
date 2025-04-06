import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { headerStyles } from "../../assets/styles/styles";
import { headerAnimations } from "../../assets/animations/animations";
import logo from "../../assets/images/logo.png";
import decorativeOrangeColor from "../../assets/images/decorative-orange-color.png";

function Header() {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage the courses dropdown toggle
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  // State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  // Ref to detect clicks outside the courses dropdown
  const coursesDropdownRef = useRef(null);
  // React Router's location object to track the current route
  const location = useLocation();

  // Navigation items for the header
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses", hasDropdown: true },
    { name: "About us", path: "/#aboutus" },
    { name: "Login", path: "/signin" },
    { name: "Contact Us", path: "/#footer", isHighlighted: true },
  ];

  // Dropdown items for the "Courses" menu
  const courseItems = [
    { name: "Python", path: "/courses/python" },
    { name: "Math", path: "/courses/math" },
    { name: "Robotics", path: "/courses/robotics" },
    { name: "ML", path: "/courses/ml" },
  ];

  // Effect to handle scroll events and update the `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle clicks outside the courses dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        coursesDropdownRef.current &&
        !coursesDropdownRef.current.contains(event.target)
      ) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle navigation clicks for smooth scrolling to sections
  const handleNavClick = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        setIsCoursesOpen(false);
      }
    }
  };

  // Toggle the courses dropdown menu
  const handleCoursesToggle = (e) => {
    e.preventDefault();
    setIsCoursesOpen(!isCoursesOpen);
  };

  // Handle hover effect for dropdown links
  const handleDropdownHover = (e) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const hoverEffect = link.querySelector(".hover-effect");

    if (hoverEffect) {
      hoverEffect.style.transition = "none";
      hoverEffect.style.width = "0";
      void hoverEffect.offsetWidth;
      const mouseX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, mouseX / rect.width));
      const delay = percentage * 0.2;
      hoverEffect.style.transition = `width 0.5s ease ${delay}s`;
      hoverEffect.style.width = "100%";
    }
  };

  // Handle mouse leave for dropdown links
  const handleDropdownLeave = (e) => {
    const hoverEffect = e.currentTarget.querySelector(".hover-effect");
    if (hoverEffect) {
      hoverEffect.style.transition = "width 0.3s ease";
      hoverEffect.style.width = "0";
    }
  };

  return (
    <motion.header {...headerAnimations.header} className={headerStyles.header}>
      <div className={headerStyles.container}>
        {/* Logo Section */}
        <div className={headerStyles.logoContainer}>
          <Link to="/" className={headerStyles.logoLink}>
            <motion.img
              src={logo}
              alt="CodeQuest Logo"
              {...headerAnimations.logo}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={headerStyles.desktopNav}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              {...headerAnimations.navItem}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={headerStyles.navItem}
              ref={item.hasDropdown ? coursesDropdownRef : null}
            >
              {item.hasDropdown ? (
                <>
                  {/* Dropdown Link */}
                  <Link
                    to={item.path}
                    onClick={handleCoursesToggle}
                    className={`${headerStyles.navLink} ${
                      isCoursesOpen || item.isHighlighted
                        ? headerStyles.navLinkHighlighted
                        : ""
                    }`}
                  >
                    <span className={headerStyles.navLinkContent}>
                      {item.name} <MdKeyboardArrowDown />
                    </span>
                    <span className={headerStyles.hoverEffect}></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {(isCoursesOpen || isMenuOpen) && (
                    <motion.ul
                      {...headerAnimations.dropdown}
                      className={headerStyles.dropdownMenu}
                    >
                      {courseItems.map((course) => (
                        <li
                          key={course.name}
                          className={headerStyles.dropdownItem}
                        >
                          <Link
                            to={course.path}
                            className={headerStyles.dropdownLink}
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <span className={headerStyles.dropdownLinkText}>
                              {course.name}
                            </span>
                            <span
                              className={headerStyles.dropdownHoverEffect}
                            ></span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </>
              ) : (
                // Regular Navigation Link
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`${headerStyles.navLink} ${
                    item.isHighlighted ? headerStyles.navLinkHighlighted : ""
                  }`}
                >
                  <span className={headerStyles.navLinkContent}>
                    {item.name}
                  </span>
                  <span className={headerStyles.hoverEffect}></span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className={headerStyles.mobileMenuButton}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={headerStyles.hamburgerButton}
          >
            <svg
              className={headerStyles.hamburgerIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          {...headerAnimations.mobileMenu}
          className={headerStyles.mobileMenu}
        >
          <div className={headerStyles.mobileMenuContainer}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                {...headerAnimations.navItem}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={headerStyles.mobileMenuItem}
              >
                {item.hasDropdown ? (
                  <>
                    {/* Mobile Dropdown Button */}
                    <button
                      className={`${headerStyles.mobileDropdownButton} ${
                        isCoursesOpen ? "bg-[#2d2dff]" : ""
                      }`}
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    >
                      <span className={headerStyles.mobileDropdownContent}>
                        {item.name} <MdKeyboardArrowDown />
                      </span>
                      <span className={headerStyles.hoverEffect}></span>
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isCoursesOpen && (
                      <motion.ul
                        {...headerAnimations.dropdown}
                        className={headerStyles.mobileDropdownMenu}
                      >
                        {courseItems.map((course) => (
                          <li key={course.name}>
                            <Link
                              to={course.path}
                              className={headerStyles.mobileDropdownLink}
                            >
                              <span
                                className={headerStyles.mobileDropdownLinkText}
                              >
                                {course.name}
                              </span>
                              <span className={headerStyles.hoverEffect}></span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  // Mobile Navigation Link
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={headerStyles.mobileNavLink}
                  >
                    <span className={headerStyles.mobileNavLinkText}>
                      {item.name}
                    </span>
                    <span className={headerStyles.hoverEffect}></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Decorative Element */}
      {!isMenuOpen && !isScrolled && (
        <motion.div
          {...headerAnimations.decorative}
          className={headerStyles.decorativeContainer}
        >
          <img
            src={decorativeOrangeColor}
            alt="Decorative orange drip"
            className={headerStyles.decorativeImage}
          />
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
