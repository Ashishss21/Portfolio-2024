import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        minWidth: "400px",
        maxWidth: "90vw",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #232631",
        borderTop: "7px solid transparent",
        borderBottom: "7px solid transparent",
      }}
      date={experience.date}
      dateClassName="text-white font-semibold text-[16px]"
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        border: "3px solid rgba(255, 255, 255, 0.1)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className="mb-6">
        <h3 className='text-white text-[22px] font-bold mb-2 leading-tight'>
          {experience.title}
        </h3>
        <p className='text-secondary text-[16px] font-semibold mb-1'>
          {experience.company_name}
        </p>
        <div className="w-16 h-1 bg-tertiary rounded-full mt-3"></div>
      </div>

      <div className='space-y-4'>
        {experience.points.map((point, index) => (
          <div
            key={`experience-point-${index}`}
            className='flex items-start space-x-3 group'
          >
            <div className='flex-shrink-0 w-2 h-2 bg-tertiary rounded-full mt-2 group-hover:bg-white transition-colors duration-300'></div>
            <p className='text-white-100 text-[15px] leading-relaxed tracking-wide flex-1'>
              {point}
            </p>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div className="max-w-6xl mx-auto w-full">
          <VerticalTimeline lineColor="#232631">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
