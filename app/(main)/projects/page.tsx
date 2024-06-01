"use client";
import { getProjects } from "@/actions/project";
import RecentProjects from "@/components/recent-projects";
import { Projects } from "@prisma/client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<Projects[] | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProjects();
      setProjects(res);
    };
    fetchData();
  }, []);
  if (!projects) return null;
  return <RecentProjects type="Page" projects={projects} />;
};

export default Page;
