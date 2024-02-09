import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="container flex flex-col py-10 items-center">
      <CreateCourseForm revalidatePagePath="/" className="min-w-80 mb-10" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
