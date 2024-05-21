import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, techStacks, testimonials } from "@/data";
import { InfiniteTechStacks } from "./ui/infinite-tech-stacks";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind word from <span className="text-purple">satisfied clients </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <h1 className="heading mt-20">
        Some of the <span className="text-purple">technology stacks</span>{" "}
        I&apos;ve worked with
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteTechStacks items={techStacks} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Clients;
