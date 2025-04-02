import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { heroAnimations, heroStyles } from "../../assets/styles/animations";
import heroImg from "../../assets/images/hero-img.png";
import aboutUsImg from "../../assets/images/AboutUs-img.png";
import teacherImg from "../../assets/images/teacher-img.png";
import parentImg from "../../assets/images/parent-img.png";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImg, aboutUsImg, teacherImg, parentImg];
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section ref={ref} className={heroStyles.section}>
      <div className={heroStyles.container}>
        <motion.div
          initial={heroAnimations.textContent.initial}
          animate={isInView ? heroAnimations.textContent.animate : {}}
          transition={heroAnimations.textContent.transition}
        >
          <div className={heroStyles.contentContainer}>
            <div className={heroStyles.headingContainer}>
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
            <p className={heroStyles.description}>
              Dive into the world of technology and innovation with hands-on
              activities designed for young learners!
            </p>

            <motion.button
              // initial={heroAnimations.button.initial}
              // animate={isInView ? heroAnimations.button.animate : {}}
              // transition={heroAnimations.button.transition}
              whileHover={heroAnimations.button.whileHover}
              className={heroStyles.button}

            >
              <span className={heroStyles.buttonText}>Register Now</span>
              <span className={heroStyles.buttonHover}></span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 hidden md:block"
          initial={heroAnimations.imageSection.initial}
          animate={isInView ? heroAnimations.imageSection.animate : {}}
          transition={heroAnimations.imageSection.transition}
        >
          <div className={heroStyles.imageContainer}>
            <img
              src={images[currentImageIndex]}
              className={heroStyles.image}
              alt="Educational content"
            />
          </div>
        </motion.div>
      </div>

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
