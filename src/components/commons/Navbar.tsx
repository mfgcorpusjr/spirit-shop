import Link from "next/link";
import { LucideSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-4">
      <Link href="/">
        <h1 className="flex items-center gap-2 text-purple-300 font-bold">
          <LucideSparkles className="size-4 animate-pulse" /> Spirit Shop
        </h1>
      </Link>

      <Button asChild variant="secondary" size="sm">
        <Link href="/mystery-potion">Mystery Potion 🔥</Link>
      </Button>
    </nav>
  );
}
