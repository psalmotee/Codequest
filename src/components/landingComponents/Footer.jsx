import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { footerStyles } from "../../assets/styles/styles";
import { footerAnimations } from "../../assets/animations/animations";
import decorativeFooter from "../../assets/images/decorative-footer.png";
import logoFooter from "../../assets/images/logo-footer.png";

function Footer() {
  // Create a reference to the footer element
  const ref = useRef(null);

  // Check if the footer is in view using framer-motion's useInView hook
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <footer ref={ref} className={footerStyles.footer} id="footer">
      {/* Decorative footer image */}
      <div className={footerStyles.decorativeContainer}>
        <motion.img
          src={decorativeFooter}
          alt="Decorative orange drip"
          className={footerStyles.decorativeImage}
          style={{ marginBottom: "-1px" }}
          initial={footerAnimations.decorative.initial}
          animate={isInView ? footerAnimations.decorative.animate : {}}
          transition={footerAnimations.decorative.transition}
        />
      </div>

      {/* Main footer content */}
      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.innerContainer}>
          <motion.div
            className={footerStyles.contentWrapper}
            initial={footerAnimations.container.initial}
            animate={isInView ? footerAnimations.container.animate : {}}
            transition={footerAnimations.container.transition}
          >
            {/* Logo section */}
            <div className={footerStyles.section}>
              <motion.img
                src={logoFooter}
                alt="CodeQuest logo"
                animate={isInView ? footerAnimations.logo.animate : {}}
                transition={footerAnimations.logo.transition}
              />
            </div>

            {/* Social media links section */}
            <div className={footerStyles.section}>
              <h3 className={footerStyles.sectionTitle}>Follow Us</h3>
              <div className={footerStyles.socialContainer}>
                {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram].map(
                  (Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={footerAnimations.socialIcon.whileHover}
                      transition={footerAnimations.socialIcon.transition}
                      className={footerStyles.socialLink}
                    >
                      <Icon />
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* Useful links section */}
            <div className={footerStyles.section}>
              <h3 className={footerStyles.sectionTitle}>Useful Links</h3>
              <ul className={footerStyles.linksList}>
                {["FAQs", "News", "Updates"].map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={footerAnimations.link.whileHover}
                    transition={footerAnimations.link.transition}
                    className={footerStyles.linkItem}
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div className={footerStyles.section}>
              <h3 className={footerStyles.sectionTitle}>Contact</h3>
              <p className="text-sm">
                Email:{" "}
                <a
                  href="mailto:Codequest@gmail.com"
                  className={footerStyles.emailLink}
                >
                  {" "}
                  Codequest@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Copyright section */}
          <div className={footerStyles.copyright}>
            CodeQuest &copy; {new Date().getFullYear()}, All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
