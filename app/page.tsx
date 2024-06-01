"use client";
import { getProjects } from "@/actions/project";
import Approach from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Projects } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState<Projects[] | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProjects();
      if (!res) return;
      setProjects(res);
    };
    fetchData();
  }, []);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip  mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects
          type="section"
          //@ts-ignore
          projects={projects}
        />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
