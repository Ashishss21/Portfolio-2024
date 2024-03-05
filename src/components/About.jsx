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
      className="w-full bg-gradient-to-br from-green-400 to-pink-500 p-4 rounded-lg shadow-lg relative overflow-hidden"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white rounded-lg py-8 px-6 min-h-[260px] flex flex-col justify-center items-center space-y-4 relative z-10"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black text-lg font-semibold text-center">
          {title}
        </h3>
      </div>

      {/* Pseudo element for the 3D effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 transform rotate-6 translate-x-6 translate-y-6 rounded-lg z-0"></div>
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
        combining frontend and backend technologies. With a curiosity for
        exploring data science principles, I strive to create solutions that not
        only meet but exceed expectations, driven by a desire to make a positive
        impact through technology.
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
