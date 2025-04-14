import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { heroStyles } from "../../assets/styles/styles";
import { heroAnimations } from "../../assets/animations/animations";
import heroImg from "../../assets/images/hero-img.png";
import aboutUsImg from "../../assets/images/AboutUs-img.png";
import teacherImg from "../../assets/images/teacher-img.png";
import parentImg from "../../assets/images/parent-img.png";

function HeroSection() {
  // State to track the current image index for the slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to be used in the slideshow
  const images = [heroImg, aboutUsImg, teacherImg, parentImg];

  // Ref to track the visibility of the section
  const ref = useRef(null);

  // Hook to determine if the section is in view
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  // Effect to handle automatic image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Hook to get the navigate function
  const navigate = useNavigate();

  // Function to handle the register button click
  const registerButton = () => {
    navigate("/select-account"); // Navigate to the Select Account page
  };

  return (
    <section ref={ref} className={heroStyles.section}>
      <div className={heroStyles.container}>
        {/* Animated text content */}
        <motion.div
          initial={heroAnimations.textContent.initial}
          animate={isInView ? heroAnimations.textContent.animate : {}}
          transition={heroAnimations.textContent.transition}
        >
          <div className={heroStyles.contentContainer}>
            <div className={heroStyles.headingContainer}>
              {/* Typewriter effect for dynamic headings */}
              <h1 className={heroStyles.heading}>
                <Typewriter
                  words={[
                    "Where Young Minds Build Big Ideas!",
                    "Unlock the World of Coding!",
                    "Make Learning Fun and Engaging!",
                  ]}
                  loop={true}
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </h1>
            </div>
            {/* Description text */}
            <p className={heroStyles.description}>
              Dive into the world of technology and innovation with hands-on
              activities designed for young learners!
            </p>

            {/* Register button with hover animation */}
            <motion.button
              whileHover={heroAnimations.button.whileHover}
              className={heroStyles.button}
              onClick={registerButton}
            >
              <span className={heroStyles.buttonText}>Register Now</span>
              <span className={heroStyles.buttonHover}></span>
            </motion.button>
          </div>
        </motion.div>

        {/* Animated image section for larger screens */}
        <motion.div
          className="md:w-1/2 hidden md:block"
          initial={heroAnimations.imageSection.initial}
          animate={isInView ? heroAnimations.imageSection.animate : {}}
          transition={heroAnimations.imageSection.transition}
        >
          <div className={heroStyles.imageContainer}>
            {/* Slideshow image */}
            <img
              src={images[currentImageIndex]}
              className={heroStyles.image}
              alt="Educational content"
            />
          </div>
        </motion.div>
      </div>

      {/* Background image for smaller screens */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow image"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
}

export default HeroSection;
