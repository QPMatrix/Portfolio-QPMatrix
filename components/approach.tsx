"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          desc="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
          icon={<AceternityIcon title="Phase 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon title="Phase 2" />}
          desc="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon title="Phase 3" />}
          desc="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  desc,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  desc: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className=" absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          style={{ color: "#e4ecff" }}
          className="text-sm dark:text-white  text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {desc}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="inline-flex text-2xl font-bold h-12 animate-shimmer items-center justify-center rounded-lg  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 py-2  text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {title}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Approach;