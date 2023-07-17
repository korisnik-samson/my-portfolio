import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"

const aboutMe = "I'm a Software & Data Engineering Student currently at Singidunum University in Serbia" +
    "with voluntary experience in Web Development and Software development using Javascript and frameworks like React," +
    " Angular and Node.JS, aside from which are my other skills like programming in C++, Java and Python. I'm a quick" +
    " learner who collaborates closely  with clients to create efficient, scalable, and user-friendly applications that " +
    "helps solve real-world problems. You won't regret hiring me!";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div options={{ max:45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px]
                py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
}

const About = () => {
    return (
        <React.Fragment>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)}
                      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                {aboutMe}
            </motion.p>
            <div className="text-white mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default SectionWrapper(About, "about");