import { getProjects } from "@/actions/project";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getProjects();
  const projectsEntries: MetadataRoute.Sitemap =
    res?.map(({ id }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`,
    })) || [];
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    },
    ...projectsEntries,
  ];
}
