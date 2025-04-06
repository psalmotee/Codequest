import { motion } from "framer-motion";
import { aboutStyles } from "../../assets/styles/styles";
import { aboutAnimations } from "../../assets/animations/animations";
import aboutUsImg from "../../assets/images/AboutUs-img.png";
import { useNavigate } from "react-router-dom";

function AboutUsSection() {
  
// JoinUsButton function: Handles navigation to the Select Account page
const joinUsButton = (navigate) => {
  navigate("/select-account"); // Navigate to the Select Account page
};

// AboutUsSection component: Displays the "About Us" section of the landing page
  const navigate = useNavigate();
  return (
    <section className={aboutStyles.section} id="aboutus">
      <div className={aboutStyles.container}>
        {/* Main container with animation */}
        <motion.div
          initial={aboutAnimations.container.initial}
          whileInView={aboutAnimations.container.animate}
          viewport={{ once: true }}
          transition={aboutAnimations.container.transition}
          className={aboutStyles.wrapper}
        >
          {/* Image Section */}
          <motion.div
            initial={aboutAnimations.imageSection.initial}
            whileInView={aboutAnimations.imageSection.animate}
            transition={aboutAnimations.imageSection.transition}
            className={aboutStyles.imageContainer}
          >
            {/* About Us Image */}
            <motion.img
              src={aboutUsImg}
              alt="Kids learning to code"
              className={aboutStyles.image}
              whileHover={aboutAnimations.image.whileHover}
              transition={aboutAnimations.image.transition}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={aboutAnimations.textContent.initial}
            whileInView={aboutAnimations.textContent.animate}
            transition={aboutAnimations.textContent.transition}
            className={aboutStyles.contentContainer}
          >
            {/* Label Section */}
            <motion.div
              initial={aboutAnimations.label.initial}
              whileInView={aboutAnimations.label.animate}
              transition={aboutAnimations.label.transition}
              className="inline-block"
            >
              <span className={aboutStyles.label}>About Us</span>
            </motion.div>

            {/* Heading */}
            <h2 className={aboutStyles.heading}>
              CodeQuest is an interactive, kid-friendly platform where young
              learners can dive into the world of coding, robotics, math, and
              more.
            </h2>

            {/* Paragraph 1 */}
            <p className={aboutStyles.paragraph}>
              At CodeQuest, we're on a mission to make learning coding and STEM
              subjects as fun and exciting as possible! Our platform is designed
              to spark the curiosity of young minds and inspire them to explore
              the fascinating world of Science, Technology, Engineering, and
              Math.
            </p>

            {/* Paragraph 2 */}
            <p className={aboutStyles.paragraph}>
              Imagine a place where coding feels like an epic adventure, where
              problem-solving is a treasure hunt, and every lesson brings new
              opportunities for creativity and discovery. That's CodeQuest.
            </p>

            {/* Join Us Button */}
            <motion.button
              whileHover={aboutAnimations.button.whileHover}
              onClick={() => joinUsButton(navigate)}
            >
              <span className={aboutStyles.buttonHover}></span>
              <span className={aboutStyles.buttonText}>Join Us</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsSection;
