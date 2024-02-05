import { revalidatePath } from "next/cache";
import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";
import { deleteCourseAction } from "../actions";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();
  const handleDeleteAction = async (courseId: string) => {
    "use server";
    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };
  return (
    <div className="container mx-auto flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
          key={course.id}
        />
      ))}
    </div>
  );
}
