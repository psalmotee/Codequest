import { motion } from "framer-motion";
import { teachersAnimations, teachersStyles } from "../../assets/styles/animations";
import teacherImg from "../../assets/images/teacher-img.png";

function TeachersSection() {
  return (
    <section className={teachersStyles.section}>
      <div className={teachersStyles.container}>
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
            <motion.img
              src={teacherImg}
              alt="Teacher instructing students"
              className={teachersStyles.image}
              whileHover={teachersAnimations.image.whileHover}
              transition={teachersAnimations.image.transition}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={teachersAnimations.textContent.initial}
            whileInView={teachersAnimations.textContent.animate}
            transition={teachersAnimations.textContent.transition}
            className={teachersStyles.contentContainer}
          >
            <motion.div
              initial={teachersAnimations.label.initial}
              whileInView={teachersAnimations.label.animate}
              transition={teachersAnimations.label.transition}
              className="inline-block"
            >
              <span className={teachersStyles.label}>For Teachers</span>
            </motion.div>

            <h2 className={teachersStyles.heading}>
              CodeQuest empowers teachers to deliver a rich, interactive STEM
              curriculum that fosters curiosity, critical thinking, and
              collaboration among students.
            </h2>

            <p className={teachersStyles.paragraph}>
              Teachers can see which tasks have been completed, track
              milestones, and identify areas where a student might need
              additional help.
            </p>

            <p className={teachersStyles.paragraph}>
              This data helps teachers tailor their lessons and provide
              personalized guidance to students who may need extra support.
            </p>

            <motion.button
              whileHover={teachersAnimations.button.whileHover}
              className={teachersStyles.button}
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
