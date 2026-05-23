import Link from "next/link";
import { LucideSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import PotionIcon from "@/features/potion/components/PotionIcon";

import { PotionType } from "@/features/potion/utils/types";
import { cn } from "@/lib/utils";

const filters: { type: PotionType; label: string }[] = [
  { type: "fire", label: "Fire-type" },
  { type: "ice", label: "Ice-type" },
  { type: "electric", label: "Electric-type" },
];

type Props = {
  type?: string;
};

export default function PotionFilter({ type }: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {filters.map((filter) => (
        <Button
          key={filter.type}
          asChild
          variant="ghost"
          className={`rounded-full button-${filter.type}`}
        >
          <Link href={filter.type ? `/?type=${filter.type}` : "/"}>
            <PotionIcon
              className={cn("size-5", {
                "animate-ping": filter.type === type,
              })}
              potionType={filter.type}
            />

            {filter.label}
          </Link>
        </Button>
      ))}

      <Button asChild variant="ghost" className="rounded-full">
        <Link href="/">
          <LucideSparkles
            className={cn("size-5 text-purple-300", {
              "animate-ping": !type,
            })}
          />
          All Types
        </Link>
      </Button>
    </div>
  );
}
