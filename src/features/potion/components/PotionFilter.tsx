import Link from "next/link";
import { LucideSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <Tooltip key={filter.type}>
          <TooltipTrigger>
            <Button
              asChild
              variant="ghost"
              className={`rounded-full button-${filter.type}`}
            >
              <Link href={`/?type=${filter.type}`}>
                <PotionIcon
                  className={cn("size-5", {
                    "animate-ping": filter.type === type,
                  })}
                  potionType={filter.type}
                />

                {filter.label}
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            {filter.type === "electric"
              ? ">= 200,000 stars"
              : filter.type === "ice"
                ? "100,000 <= stars < 200,000"
                : "5,000 <= stars < 100,000"}
          </TooltipContent>
        </Tooltip>
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
