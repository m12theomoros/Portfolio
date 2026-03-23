import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing scroll-mt-24">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
      md:auto-rows-auto mt-12">

      {/* Grid 1 */}
        <div className="relative flex items-center md:items-end 
        grid-default-color grid-1 min-h-[470px] md:min-h-0">

          {/* Image */}
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
            md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />

          {/* Text + Button Container */}
          <div className="z-10 flex flex-col gap-4">
            <p className="headtext font-sans font-semibold">
              Hi, I'm Michael Yilak
            </p>
            <p className="subtext font-sans font-semibold leading-relaxed">
              Full-Stack Web Developer focused on designing and building secure, 
              scalable web apps and SaaS solutions with AI/ML integration for 
              startups and enterprise clients. Skilled in React, Node.js, Next.js, 
              TailwindCSS, PERN & MERN stacks, and cloud services. Built 2+ 
              full-stack projects solving problems in finance and agriculture, 
              improving user efficiency by up to 30% in simulations. Passionate 
              about innovation, real-world problem solving, and creating 
              high-performance software solutions in collaborative and 
              impact-driven teams.
            </p>

            {/* Resume Button */}
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center mt-3 px-4 py-2 text-sm font-medium text-white 
              bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md
              transition-all duration-300 transform hover:-translate-y-1 
              hover:scale-105"
            >
              Resume
            </a>
          </div>
            <div className="absolute inset-0 pointer-events-none 
            bg-gradient-to-b from-transparent to-indigo" />
        </div>

      {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="relative flex items-center
          justify-center 
          w-full h-full">
            <p className="flex items-end text-4xl sm:text-5xl text-gray-500">
              My Engineering Process
            </p>
            <Card
              style={{ rotate: "50deg", top: "30%", left: "20%" }}
              text="① Problem Understanding"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="② System Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "65deg", bottom: "30%", left: "70%" }}
              text="③ Implementation"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "55%", left: "0%" }}
              text="④ Testing & Optimization"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "5%", left: "38%" }}
              text="⑤ Feedback & Iteration"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "16deg", top: "70%", left: "70%" }}
              image="assets/logos/code-brackets.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/magnifying-glass.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "21deg", top: "30%", left: "45%" }}
              image="assets/logos/stacked-squares.svg"
              containerRef={grid2Container}
            /> 
          </div>
        </div>
       
      {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%] ">
            <p className="headtext font-semibold font-sans text-xl 
            md:text-2xl tracking-wide">
                Time Zone
            </p>
            <p className=" subtext text-sm md:text-base text-gray-300 
            leading-snug">
                I’m based in Addis Ababa, Ethiopia and open to remote roles worldwide.  
                Delivering high-impact softwares for real-world challenges.
            </p>
          </div>
          <figure className="absolute left-[33%] top-[0%] sm:top-[1%] 
          md:top-[10%] ">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4"><CopyEmailButton/></div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext font-semibold font-sans">Tech Stacks</p>
            <p className="subtext leading-relaxed">
              I work with a variety of languages, frameworks, and tools that 
              allow me to build secure, robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full 
          start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

     </div>
    </section>
  );
};

export default About;