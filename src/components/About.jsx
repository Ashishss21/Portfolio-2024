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
        DevOps Engineer & AWS Cloud Engineer with 1 year of hands-on experience in designing, deploying, and maintaining scalable, secure cloud solutions on Amazon Web Services (AWS). Proficient in automating infrastructure using Infrastructure as Code (IaC) tools like CloudFormation and Terraform, and building robust CI/CD pipelines to streamline application delivery and operational efficiency. Skilled in monitoring, logging, and optimizing system performance for high availability and resilience.
        <br className="sm:block hidden" /><br className="sm:block hidden" />
        Experienced in developing full-stack applications using JavaScript, Node.js, and React, with a keen focus on integrating cloud-native practices. Passionate about modern DevOps culture, containerization (Docker), and orchestration (Kubernetes). Also adept at leveraging Generative AI services via Amazon Bedrock to embed intelligent capabilities into cloud solutions. Thrive in agile, fast-paced environments, solving complex problems through automation, collaboration, and continuous improvement.
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
