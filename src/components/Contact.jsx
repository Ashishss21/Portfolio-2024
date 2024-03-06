import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { socials } from "../constants";
import { email, instagram, linkedin, twitter } from "../assets";

const Contact = ({name, icon, link}) => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.div
          variants={fadeIn("", "spring", 0.5, 0.75)}
          className="bg-black-200 p-10 rounded-3xl inline-block items-center w-full"
        >
          <div className="mt-1 flex flex-wrap">
            <p className="text-white tracking-wider p-4 w-16 h-16">
              <a href="https://www.linkedin.com/in/ashish-sengar212/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
            </p>
            <p className="text-white tracking-wider p-4 w-16 h-16">
              <a href="mailto:ashish.sengar2106@gmail.com" target="_blank"><img src={email} alt="linkedin"/></a>
            </p>
            <p className="text-white tracking-wider p-4 w-16 h-16">
              <a href="#"><img src={twitter} alt="linkedin"/></a>
            </p>
            <p className="text-white tracking-wider p-4 w-16 h-16">
              <a href="#"><img src={instagram} alt="linkedin"/></a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
