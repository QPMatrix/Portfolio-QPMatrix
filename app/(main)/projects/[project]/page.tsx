"use client";
import React, { useEffect, useState } from "react";
import { getProjectById } from "@/actions/project";
import Image from "next/image";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import Head from "next/head";

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
    <div className="flex justify-center space-y-10 items-center">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={link} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container  mx-auto  px-4 f-full bg-black-100">
        <h1 className="heading">{title}</h1>
        <p className="text-center leading-10 text-wrap text-clip">
          {description}
        </p>
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
