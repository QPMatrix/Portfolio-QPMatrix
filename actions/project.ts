"use server";
import { db } from "@/utils/db";

export const getProjects = async () => {
  try {
    return await db.projects.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getProjectById = async (id: number) => {
  console.log(id);
  try {
    const res = await db.projects.findFirstOrThrow({
      where: { id },
    });
    console.log(res);
    if (!res) throw new Error("Project not found");
    return res;
  } catch (error: any) {
    console.log(error.message);
  }
};
