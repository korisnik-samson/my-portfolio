import React from 'react'
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, logo } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion.js";

const workDescription = "Following projects showcases my skills and experience through\n" +
    "real-world examples of my work. Each project is briefly described with\n" +
    "links to code repositories and live demos in it. It reflects my\n" +
    "ability to solve complex problems, work with different technologies,\n" +
    "and manage projects effectively.";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, weblink}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
                    <div className="absolute inset-0 justify-end m-3 card-img_hover">
                        {/*GITHUB IMAGE URL*/}
                        <div onClick={() => window.open(source_code_link)}
                             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                        {/*LIVE APP URL*/}
                        <div onClick={() => window.open(weblink)}
                             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={logo} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[17px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
}

const Works = () => {
    return (
        <React.Fragment>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Work so far</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    {workDescription}
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default SectionWrapper(Works, "")