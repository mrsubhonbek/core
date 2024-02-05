"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};

export const deleteCourseAction = async (
  command: DeleteCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.deleteCourseElement({ id: command.id });
  revalidatePath(revalidatePagePath);
};
