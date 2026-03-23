"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import {
  CpuChipIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("ml")) return CpuChipIcon;
    if (t.includes("cyber")) return ShieldCheckIcon;
    if (t.includes("library")) return CodeBracketIcon;
    if (t.includes("freelance")) return BriefcaseIcon;
    if (t.includes("personal")) return LightBulbIcon;
    return CodeBracketIcon;
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => {
          const Icon = getIcon(item.title);

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                
                <div className="h-10 absolute w-10 rounded-full -left-[15px] bg-midnight flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                
                <div className="flex gap-3 md:gap-5 items-start pl-8 md:pl-10">

                  <div className="mt-1 md:mt-2">
                    <Icon
                      className="
                        w-6 h-6 md:w-9 md:h-9
                        text-purple-400
                        transition-all duration-300 ease-out
                        hover:scale-110
                        hover:text-purple-300
                        drop-shadow-[0_0_8px_rgba(168,85,247,0.2)]
                      "
                    />
                  </div>

                  <div className="hidden flex-col gap-1 md:flex">
                    <h3 className="text-lg font-bold text-neutral-300 uppercase tracking-wider">
                      {item.date}
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-neutral-400 leading-tight">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-neutral-500 italic">
                      {item.job}
                    </h4>
                  </div>
                </div>  
              </div>

              <div className="relative pl-12 pr-4 md:pl-4 w-full">

                <div className="block mb-6 text-xl font-bold text-left text-neutral-300 md:hidden">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-neutral-300">{item.job}</h3>
                  </div>
                  <h3 className="text-sm text-neutral-500 font-normal pl-9">
                    {item.date}
                  </h3>
                </div>

                <div className="space-y-4">
                  {item.contents.map((content, idx) => (
                    <p 
                      key={idx} 
                      className="font-normal text-neutral-400 text-sm md:text-base leading-relaxed border-l border-neutral-800 pl-4 hover:border-purple-500/50 transition-colors"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
            from-transparent from-[0%] via-neutral-700 
            to-transparent to-[99%]  
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t 
              from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] 
              rounded-full" />
        </div>
      </div>
    </div>
  );
};