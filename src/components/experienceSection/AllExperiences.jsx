import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Oasis Infobyte",
    date: "2023",
    responsibilities: [
       "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
    "Collaborated with designers to enhance UI/UX consistency.",
    
    ],
  },
  {
    job: "Full Stack Developer",
    company: "D4X Technology",
    date: "2025",
    responsibilities: [
       "Built and maintained full-stack applications using React and Spring Boot.",
    "Designed RESTful APIs and integrated front-end with backend services.",
    "Managed version control and deployment workflows using Git and GitHub.",
    ],
  },
  {
    job: "MCA Student",
    company: "VESIT",
    date: "2024 - Present",
    responsibilities: [
      "Engaged in hands-on projects using JavaScript, React, and Spring Boot.",
    "Collaborated on group assignments and coding challenges.",
    "Built academic and personal portfolio projects using modern web technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
