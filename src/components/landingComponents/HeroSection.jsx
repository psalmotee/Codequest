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
          className={heroStyles.contentContainer}
          initial={heroAnimations.textContent.initial}
          animate={isInView ? heroAnimations.textContent.animate : {}}
          transition={heroAnimations.textContent.transition}
        >
          <div className="min-h-[160px] md:min-h-[130px] lg:min-h-[100px] flex items-center">
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
            initial={heroAnimations.button.initial}
            animate={isInView ? heroAnimations.button.animate : {}}
            transition={heroAnimations.button.transition}
            className={heroStyles.button}
          >
            <span className={heroStyles.buttonText}>Register Now</span>
            <span className={heroStyles.buttonHover}></span>
          </motion.button>
        </motion.div>

        <motion.div
          className={heroStyles.imageContainer}
          initial={heroAnimations.imageSection.initial}
          animate={isInView ? heroAnimations.imageSection.animate : {}}
          transition={heroAnimations.imageSection.transition}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img
              src={images[currentImageIndex]}
              className={heroStyles.image}
              alt="Educational content"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
