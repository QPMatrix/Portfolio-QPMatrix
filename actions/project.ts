import { db } from "@/utils/db";

export const getProjects = async () => {
  try {
    return await db.projects.findMany();
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getProjectById = async (id: number) => {
  try {
    const res = await db.projects.findUnique({
      where: {
        id,
      },
    });
    if (!res) throw new Error("Project not found");
    return res;
  } catch (error: any) {
    console.log(error.message);
  }
};
