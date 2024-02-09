import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center md:items-center gap-6 text-sm font-medium flex-col md:flex-row">
      <Link
        href={"/map"}
        className="transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Map
      </Link>
      <Link
        href={"/learn"}
        className="transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Learn
      </Link>
    </nav>
  );
}
