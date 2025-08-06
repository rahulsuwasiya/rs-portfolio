import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { webimage1, webimage2, webimage3, webimage4 } from "../../assets";

const projects = [
  {
    name: "Recipe Finder",
    year: "July2025",
    align: "right",
    image: webimage1,
    link: "#",
  },
  {
    name: "AI Gym Trainer",
    year: "March2025",
    align: "left",
    image: webimage2,
    link: "#",
  },
  {
    name: "PrimeCars",
    year: "Jan2024",
    align: "right",
    image: webimage3,
    link: "#",
  },
  {
    name: "Hostel Management System",
    year: "July2023",
    align: "left",
    image: webimage4,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
