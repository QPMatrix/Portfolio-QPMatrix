"use client";
import "swiper/css";

import SwiperCore from "swiper/core";
import "@/app/globals.css";
import { getProjectById } from "@/actions/project";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import MagicButton from "./ui/magic-button";
import { FaGithub, FaWebflow } from "react-icons/fa6";
interface Projects {
  params: { project: string };
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

const ProjectPage = ({ id }: { id: number }) => {
  const [data, setData] = useState<Projects | undefined>();
  SwiperCore.use([Pagination]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProjectById(id);

      // @ts-ignore
      setData(res);
    };
    fetchData();
  }, [id]);
  if (data === null) {
    return notFound();
  }
  if (!data) return;
  const { title, description, iconLists, images, thumbnail, link, github } =
    data;
  const allImages = [
    ...(images?.ios || []),
    ...(images?.android || []),
    ...(images?.web || []),
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl text-purple font-bold line-clamp-1">
        {title}
      </h1>
      <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-full h-[30vh] overflow-hidden mb-10">
        <div className="relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162d]">
          <img src="/bg.png" alt="bg-img" />
        </div>
        <img
          src={thumbnail!}
          alt={title!}
          className="z-10 absolute bottom-0 object-contain w-full h-full"
        />
      </div>
      <p className="text-sm md:text-lg text-center font-light">{description}</p>
      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {iconLists.map((icon, index) => (
            <div
              key={icon}
              className="border border-white/[0.2] rounded-full bg-black lg:w-20 lg:h-20 w-14 h-14 flex justify-center items-center"
              style={{
                transform: `translateX(-${10 * index * 2})px`,
              }}
            >
              <img src={icon} alt={icon} className="p-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-7 mb-3 justify-between">
        {link && (
          <Link href={link}>
            <MagicButton
              title={"Visit Website"}
              icon={<FaWebflow />}
              position={"right"}
            />
          </Link>
        )}
        <div className="mr-5" />
        {github && (
          <Link href={github}>
            <MagicButton
              title={"Github"}
              icon={<FaGithub />}
              position={"right"}
            />
          </Link>
        )}
      </div>
      {allImages.length > 0 && (
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={0}
          property="images"
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={index.toString()} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProjectPage;
