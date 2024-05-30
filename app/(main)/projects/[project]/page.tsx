import { getProjectById, getProjects } from "@/actions/project";
import ProjectPage from "@/components/project-page";

import { Metadata } from "next";
export interface Projects {
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
export async function generateMetadata({
  params: { project },
}: Projects): Promise<Metadata> {
  const id = parseInt(project);
  const res = await getProjectById(id);

  return {
    title: res?.title,
    description: res?.description,
    openGraph: {
      images: [
        {
          url: res?.thumbnail!,
          width: 1200,
          height: 680,
          alt: res?.title!,
        },
      ],
    },
  };
}
export async function generateStaticParams() {
  const res = await getProjects();

  return res?.map(({ id }) => id).slice(0, 5);
}

const Page = ({ params: { project } }: { params: { project: string } }) => {
  const id = parseInt(project);
  return <ProjectPage id={id} />;
};

export default Page;
