"use client";
import React, { useEffect, useState } from "react";
import { getProjectById } from "@/actions/project";
import Image from "next/image";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

interface Projects {
  id: bigint;
  created_at: Date;
  title: string;
  description: string;
  thumbnail: string;
  iconLists: string[];
  link: string;
  github: string;
  images: {
    ios?: string[];
    android?: string[];
    web?: string[];
  };
}

const Page = ({ params: { project } }: { params: { project: string } }) => {
  const id = parseInt(project);
  const [data, setData] = useState<Projects>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProjectById(id);
      //@ts-ignore
      setData(res);
    };
    fetchData();
  }, [id]);

  if (!data) return null;
  const { title, description, iconLists, images, thumbnail, link, github } =
    data;
  const allImages = [
    ...(images?.ios || []),
    ...(images?.android || []),
    ...(images?.web || []),
  ];

  return (
    <div>
      <div className="container mx-auto px-4 h-full bg-black-100">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
          >
            {description}
          </motion.p>
          <div className="flex flex-row mt-10  justify-center items-center">
            {iconLists &&
              iconLists.map((icon, idx) => (
                <div key={idx} className="mx-4">
                  <Image
                    src={icon}
                    alt={`icon-${idx}`}
                    width={50}
                    height={50}
                    quality={100}
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-row justify-center space-x-4 mt-10">
            {link && (
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href={link} target="_blank">
                  <span>Live Preview</span>
                </a>
              </button>
            )}
            {github && (
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <a href={github} target="_blank">
                  <span>View Source</span>
                </a>
              </button>
            )}
          </div>
        </HeroHighlight>
        {images && images.ios && images.android && (
          <div className="mt-2 ">
            <ImagesSlider
              images={allImages}
              className="h-[40rem]"
              direction="down"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
