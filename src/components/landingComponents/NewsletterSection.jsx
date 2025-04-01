import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  newsletterAnimations,
  newsletterStyles,
} from "../../assets/styles/animations";

function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={newsletterStyles.section}>
      <div className={newsletterStyles.container}>
        <motion.p
          initial={newsletterAnimations.label.initial}
          animate={isInView ? newsletterAnimations.label.animate : {}}
          transition={newsletterAnimations.label.transition}
          className={newsletterStyles.label}
        >
          Newsletter
        </motion.p>

        <motion.h2
          initial={newsletterAnimations.heading.initial}
          animate={isInView ? newsletterAnimations.heading.animate : {}}
          transition={newsletterAnimations.heading.transition}
          className={newsletterStyles.heading}
        >
          Unlock Your Child's Coding Adventure
        </motion.h2>

        <motion.p
          initial={newsletterAnimations.description.initial}
          animate={isInView ? newsletterAnimations.description.animate : {}}
          transition={newsletterAnimations.description.transition}
          className={newsletterStyles.description}
        >
          Subscribe now and get all the exciting updates about our fun,
          educational app designed to help kids explore coding and STEM.
        </motion.p>

        <motion.div
          initial={newsletterAnimations.form.initial}
          whileInView={newsletterAnimations.form.animate}
          viewport={{ once: true, amount: 0.2 }}
          transition={newsletterAnimations.form.transition}
          className={newsletterStyles.formWrapper}
        >
          <div className={newsletterStyles.formContainer}>
            <motion.input
              whileHover={newsletterAnimations.input.whileHover}
              className={newsletterStyles.input}
              type="email"
              placeholder="Your Email"
            />

            <motion.button
              whileHover={newsletterAnimations.button.whileHover}
              className={newsletterStyles.button}
            >
              <span className={newsletterStyles.buttonHover}></span>
              <span className={newsletterStyles.buttonText}>Subscribe</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;
