import { motion } from "framer-motion";
import { parentsAnimations, parentsStyles } from "../../assets/styles/animations";
import parentImg from "../../assets/images/parent-img.png";

function ParentsSection() {
  return (
    <section className={parentsStyles.section}>
      <div className={parentsStyles.container}>
        <motion.div
          initial={parentsAnimations.container.initial}
          whileInView={parentsAnimations.container.animate}
          viewport={{ once: true }}
          transition={parentsAnimations.container.transition}
          className={parentsStyles.wrapper}
        >
          {/* Text Content */}
          <motion.div
            initial={parentsAnimations.textContent.initial}
            whileInView={parentsAnimations.textContent.animate}
            transition={parentsAnimations.textContent.transition}
            className={parentsStyles.contentContainer}
          >
            <motion.div
              initial={parentsAnimations.label.initial}
              whileInView={parentsAnimations.label.animate}
              transition={parentsAnimations.label.transition}
              className="inline-block"
            >
              <span className={parentsStyles.label}>For Parents</span>
            </motion.div>

            <h2 className={parentsStyles.heading}>
              We know that parents want the best for their children's education,
              and CodeQuest offers a safe, secure, and educational environment
              where kids can explore and learn.
            </h2>

            <ul className={parentsStyles.list}>
              <li>
                <span className={parentsStyles.listItemBold}>
                  Develops Critical Skills:
                </span>{" "}
                CodeQuest helps kids build important skills such as
                problem-solving, logical thinking, and creativity—all of which
                are crucial in today's tech-driven world.
              </li>
              <li>
                <span className={parentsStyles.listItemBold}>
                  Fosters a Growth Mindset:
                </span>{" "}
                The app encourages kids to tackle challenges, learn from their
                mistakes, and celebrate their achievements, promoting a growth
                mindset and resilience.
              </li>
              <li>
                <span className={parentsStyles.listItemBold}>
                  Prepares for the Future:
                </span>{" "}
                With coding being an essential skill in many careers, CodeQuest
                prepares kids for future opportunities in technology and STEM
                fields.
              </li>
              <li>
                <span className={parentsStyles.listItemBold}>
                  Promotes Independent Learning:
                </span>{" "}
                By offering step-by-step tutorials and hints, CodeQuest allows
                kids to learn at their own pace and build independence in their
                learning journey.
              </li>
            </ul>

            <motion.button
              whileHover={parentsAnimations.button.whileHover}
              className={parentsStyles.button}
            >
              <span className={parentsStyles.buttonHover}></span>
              <span className={parentsStyles.buttonText}>Read More</span>
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={parentsAnimations.imageSection.initial}
            whileInView={parentsAnimations.imageSection.animate}
            transition={parentsAnimations.imageSection.transition}
            className={parentsStyles.imageContainer}
          >
            <motion.img
              src={parentImg}
              alt="Parent and child learning together"
              className={parentsStyles.image}
              whileHover={parentsAnimations.image.whileHover}
              transition={parentsAnimations.image.transition}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ParentsSection;
