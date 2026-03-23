import { FlipWords } from "./Flipwords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
  "PERN & MERN Stacks",
  "Secure Modern Web Apps",
  "Applied AI & ML",
  "Scalable Web Solutions"
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left 
      rounded-3xl bg-clip-text">

        {/* Desktop View */}

  <div className="flex-col hidden md:flex c-space">
          <motion.h1 
          className="text-5xl font-bold text-white"
          variants = {variants}
          initial= "hidden"
          animate= "visible"
          transition={{ delay: 1 }}
          >
                Hi I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500
              to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
                    Michael
              </span>
          </motion.h1>
  <div className="flex flex-col items-start mt-4">
        <motion.p 
        className="text-5xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.3 }}
        >
            Full-Stack Web Developer <br /> Focused On
        </motion.p>
    <motion.div 
      className="mt-2"
      variants = {variants}
      initial= "hidden"
      animate= "visible"
      transition={{ delay: 1.5 }}
    >
      <FlipWords
        words={words}
        className="font-black text-white text-6xl md:text-7xl"
      />
    </motion.div>

    <motion.p 
    className="text-2xl font-medium text-neutral-300 mt-3"
    variants = {variants}
    initial= "hidden"
    animate= "visible"
    transition={{ delay: 1.8 }}
    >
        Building secure & innovative solutions for real-world problems 🚀⚡
    </motion.p>

      {/* CTA Button to scroll to About Me section */}
    <div className="mt-6 flex justify-center">
      <motion.button
        variants = {variants}
        initial= "hidden"
        animate= "visible"
        transition={{ delay: 2 }}
        onClick={() => {
          const nextSection = document.querySelector("#about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth", block: "start"  });
        }
      }}
        className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-500
      text-white font-semibold rounded-lg shadow-lg transform transition-all 
        duration-300 hover:scale-105 hover:shadow-2xl active:scale-95
        active:shadow-inner"
      >
        About Me
      </motion.button>
    </div>
  </div>
  </div> 

          {/* Mobile View */}

         <div className="flex flex-col md:hidden items-center c-space px-4">
        <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-white text-center"
        variants = {variants}
        initial= "hidden"
        animate= "visible"
        transition={{ delay: 1 }}
        >
          Hi I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 
          bg-clip-text text-transparent animate-gradient-x">
            Michael
          </span>
        </motion.h1>
        <div className="flex flex-col items-center mt-4">
          <motion.p 
          className="text-3xl sm:text-5xl font-medium text-neutral-300 text-center"
          variants = {variants}
          initial= "hidden"
          animate= "visible"
          transition={{ delay: 1.3 }}
          >
            Full-Stack Web Developer <br /> Focused On
          </motion.p>
          <motion.div 
          className="mt-2"
          variants = {variants}
          initial= "hidden"
          animate= "visible"
          transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-4xl sm:text-6xl text-center"
            />
          </motion.div>

          <motion.p 
          className="text-xl sm:text-2xl font-medium text-neutral-300 mt-3 text-center"
          variants = {variants}
          initial= "hidden"
          animate= "visible"
          transition={{ delay: 1.8 }}
          >
            Building secure & innovative solutions for real-world problems 🚀⚡
          </motion.p>
          <div className="mt-6 flex justify-center">
            <motion.button
            variants = {variants}
            initial= "hidden"
            animate= "visible"
            transition={{ delay: 2 }}
              onClick={() => {
                const nextSection = document.querySelector("#about");
                if (nextSection) nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-500
              text-white font-semibold rounded-lg shadow-lg transform transition-all 
              duration-300 hover:scale-105 hover:shadow-2xl active:scale-95
              active:shadow-inner"
            >
              About Me
            </motion.button>
          </div>
        </div>
      </div>
</div>
  );
}

export default HeroText