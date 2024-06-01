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
  try {
    let res = await db.projects.findFirst({
      where: { id },
    });

    if (!res) {
      return null;
    }

    return res;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
