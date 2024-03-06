import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-lg shadow-lg overflow-hidden border-2 h-70"
    >
      <div className="w-full h-40 object-cover flex items-center justify-center">
        <img src={icon} alt="web-development" className="w-16 h-16"/>
      </div>
      <div className="p-4 bg-white h-[90px] dark:bg-gray-900">
        <h3 className="text-gray-800 dark:text-white text-lg font-bold">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I'm a MERN Stack Developer with a passion for machine learning.
        My focus is on building seamless, user-friendly applications by
        combining frontend and backend technologies. With a solid foundation in
        front-end development and experience in building scalable applications
        using MERN Stack, I'm eager to explore the intersection of web
        development and AI. While my journey into machine learning is still in
        its early stages, my curiosity and dedication drive me to continuously
        learn and grow in this dynamic field.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
