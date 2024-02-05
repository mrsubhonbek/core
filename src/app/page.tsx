import { Button } from "@/shared/ui/button";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export default async function Home() {
  const course = await db.course.findMany();
  console.log(course);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>test</Button>
    </main>
  );
}
