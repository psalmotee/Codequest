import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featureStyles } from "../../assets/styles/styles";
import { featureAnimations } from "../../assets/animations/animations";
import BookOpenText from "/icons/BookOpenText.svg";
import Exam from "/icons/Exam.svg";
import FirstAid from "/icons/FirstAid.svg";
import IdentificationBadge from "/icons/IdentificationBadge.svg";
import decorativeLightOrange from "/images/decorative-light-orange.png";

function FeaturesSection() {
  // Create a reference to the section element
  const ref = useRef(null);

  // Check if the section is in view using the useInView hook
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  // Define the features data to be displayed in the section
  const features = [
    {
      img: BookOpenText,
      title: "Learn Through Play",
      color: "bg-green-500",
      text: "CodeQuest turns learning into an adventure. Kids can complete missions, and play games while developing coding skills.",
    },
    {
      img: Exam,
      title: "Focused Curriculum",
      color: "bg-blue-500",
      text: "CodeQuest covers more than just coding, offering lessons in robotics, math, engineering, and other STEM subjects that prepare kids for the future.",
    },
    {
      img: FirstAid,
      title: "Parent-Approved Safety",
      color: "bg-red-500",
      text: "CodeQuest provides a safe, online space where kids can explore, learn, and interact without worrying about inappropriate content.",
    },
    {
      img: IdentificationBadge,
      title: "Badges & Certificates",
      color: "bg-pink-500",
      text: "Kids can earn badges, trophies, and certificates as they complete challenges and reach milestones, making learning feel like a rewarding adventure.",
    },
  ];

  return (
    <section
      ref={ref} // Attach the ref to the section element
      className={featureStyles.section}
      style={{
        // Dynamically set the background image and styles based on screen width
        backgroundImage:
          window.innerWidth >= 640 ? `url(${decorativeLightOrange})` : "none",
        backgroundColor: window.innerWidth < 640 ? "#FFE7D3" : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: window.innerWidth >= 640 ? "8rem 0" : "2rem 0",
      }}
    >
      <motion.div
        {...featureAnimations.container}
        animate={isInView ? featureAnimations.container.animate : {}}
        className={featureStyles.container}
      >
        <h2 className={featureStyles.heading}>Why choose us</h2>

        <motion.div
          {...featureAnimations.slide}
          className={featureStyles.grid}
        >
          {/* Map through the features array to render each feature card */}
          {features.concat(features).map((feature, index) => (
            <motion.div
              key={index}
              {...featureAnimations.card(index)}
              animate={isInView ? featureAnimations.card(index).animate : {}}
              className={featureStyles.card}
            >
              {/* Feature icon container */}
              <div className={featureStyles.iconContainer(feature.color)}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={featureStyles.icon}
                />
              </div>
              {/* Feature title */}
              <h3 className={featureStyles.title}>{feature.title}</h3>
              <span className={featureStyles.divider}></span>
              {/* Feature description */}
              <p className={featureStyles.description}>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
