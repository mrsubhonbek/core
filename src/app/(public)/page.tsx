import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
<<<<<<< HEAD:src/app/(public)/page.tsx
    <main className="container flex flex-col py-10 items-center">
=======
    <main className="container flex flex-col min-h-screen py-10 items-center">
      <h1>Courses</h1>
>>>>>>> master:src/app/page.tsx
      <CreateCourseForm revalidatePagePath="/" className="min-w-80 mb-10" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
