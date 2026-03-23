import { motion } from "framer-motion";
import SpotlightCard from "../components/SpotlightCard";
import { technicalSkills, softSkills } from "../constants/Index";

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative c-space section-spacing scroll-mt-24"
    >
      <h2 className="text-heading font-bold tracking-tight text-left mb-20">
        Skills
      </h2>

      {/* Technical Skills */}
      <div className="mb-24">
        <h3 className="text-2xl font-semibold mb-10 text-neutral-300 text-center">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="w-full mx-auto"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardAnimation}
            >
              <SpotlightCard>
                <h4 className="text-lg font-semibold mb-5 text-white text-center">
                  {category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700 text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-10 text-neutral-300 text-center">
          Soft Skills
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className="w-full mx-auto"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardAnimation}
            >
              <SpotlightCard>
                <p className="text-neutral-200 font-medium text-center">
                  {skill}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;