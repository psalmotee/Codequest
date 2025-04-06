import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { teachersStyles } from "../../assets/styles/styles";
import { teachersAnimations } from "../../assets/animations/animations";
import teacherImg from "../../assets/images/teacher-img.png";

function TeachersSection() {
  //  Teach With CodeQuest Button function: Handles navigation to the Select Account page
  const TeachWithCodeQuestButton = () => {
    const navigate = useNavigate();
    navigate("/select-account"); // Navigate to the Select Account page
  };

  // TeachersSection component: Displays a section targeted at teachers, showcasing the benefits of using CodeQuest.
  return (
    <section className={teachersStyles.section}>
      <div className={teachersStyles.container}>
        {/* Wrapper for the entire animated content */}
        <motion.div
          initial={teachersAnimations.container.initial}
          whileInView={teachersAnimations.container.animate}
          viewport={{ once: true }}
          transition={teachersAnimations.container.transition}
          className={teachersStyles.wrapper}
        >
          {/* Image Section */}
          <motion.div
            initial={teachersAnimations.imageSection.initial}
            whileInView={teachersAnimations.imageSection.animate}
            transition={teachersAnimations.imageSection.transition}
            className={teachersStyles.imageContainer}
          >
            {/* Teacher image with hover animation */}
            <motion.img
              src={teacherImg}
              alt="Teacher instructing students"
              className={teachersStyles.image}
              whileHover={teachersAnimations.image.whileHover}
              transition={teachersAnimations.image.transition}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={teachersAnimations.textContent.initial}
            whileInView={teachersAnimations.textContent.animate}
            transition={teachersAnimations.textContent.transition}
            className={teachersStyles.contentContainer}
          >
            {/* Label for the section */}
            <motion.div
              initial={teachersAnimations.label.initial}
              whileInView={teachersAnimations.label.animate}
              transition={teachersAnimations.label.transition}
              className="inline-block"
            >
              <span className={teachersStyles.label}>For Teachers</span>
            </motion.div>

            {/* Heading describing the benefits of CodeQuest for teachers */}
            <h2 className={teachersStyles.heading}>
              CodeQuest empowers teachers to deliver a rich, interactive STEM
              curriculum that fosters curiosity, critical thinking, and
              collaboration among students.
            </h2>

            {/* Paragraph explaining how teachers can track student progress */}
            <p className={teachersStyles.paragraph}>
              Teachers can see which tasks have been completed, track
              milestones, and identify areas where a student might need
              additional help.
            </p>

            {/* Paragraph explaining how data helps teachers personalize lessons */}
            <p className={teachersStyles.paragraph}>
              This data helps teachers tailor their lessons and provide
              personalized guidance to students who may need extra support.
            </p>

            {/* Call-to-action button for teachers */}
            <motion.button
              whileHover={teachersAnimations.button.whileHover}
              className={teachersStyles.button}
              onClick={TeachWithCodeQuestButton}
            >
              <span className={teachersStyles.buttonHover}></span>
              <span className={teachersStyles.buttonText}>
                Teach with CodeQuest
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeachersSection;
