import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { newsletterStyles } from "../../assets/styles/styles";
import { newsletterAnimations } from "../../assets/animations/animations";

// NewsletterSection component handles the display of a newsletter subscription section
function NewsletterSection() {
  const ref = useRef(null); // Reference to the section element
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 }); // Tracks if the section is in view

  return (
    <section ref={ref} className={newsletterStyles.section}>
      <div className={newsletterStyles.container}>
        {/* Animated label for the newsletter */}
        <motion.p
          initial={newsletterAnimations.label.initial}
          animate={isInView ? newsletterAnimations.label.animate : {}}
          transition={newsletterAnimations.label.transition}
          className={newsletterStyles.label}
        >
          Newsletter
        </motion.p>

        {/* Animated heading for the newsletter section */}
        <motion.h2
          initial={newsletterAnimations.heading.initial}
          animate={isInView ? newsletterAnimations.heading.animate : {}}
          transition={newsletterAnimations.heading.transition}
          className={newsletterStyles.heading}
        >
          Unlock Your Child's Coding Adventure
        </motion.h2>

        {/* Animated description for the newsletter */}
        <motion.p
          initial={newsletterAnimations.description.initial}
          animate={isInView ? newsletterAnimations.description.animate : {}}
          transition={newsletterAnimations.description.transition}
          className={newsletterStyles.description}
        >
          Subscribe now and get all the exciting updates about our fun,
          educational app designed to help kids explore coding and STEM.
        </motion.p>

        {/* Animated form for email subscription */}
        <motion.div
          initial={newsletterAnimations.form.initial}
          whileInView={newsletterAnimations.form.animate}
          viewport={{ once: true, amount: 0.2 }}
          transition={newsletterAnimations.form.transition}
          className={newsletterStyles.formWrapper}
        >
          <div className={newsletterStyles.formContainer}>
            {/* Input field for email */}
            <motion.input
              whileHover={newsletterAnimations.input.whileHover}
              className={newsletterStyles.input}
              type="email"
              placeholder="Your Email"
            />

            {/* Subscribe button */}
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
