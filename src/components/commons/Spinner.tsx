import { LucideLoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <LucideLoaderCircle className="size-16 animate-spin" />
    </div>
  );
}
