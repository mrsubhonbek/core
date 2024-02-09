import { Cat } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <Cat className="h-6 w-6" />
      <span className="font-bold inline-block">Courses</span>
    </Link>
  );
}
