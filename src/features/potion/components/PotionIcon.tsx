import { LucideFlame, LucideBox, LucideZap } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  potionType: "electric" | "ice" | "fire";
  className?: string;
};

export default function PotionIcon({ potionType, className }: Props) {
  return potionType === "fire" ? (
    <LucideFlame className={cn(`icon-${potionType}`, className)} />
  ) : potionType === "ice" ? (
    <LucideBox className={cn(`icon-${potionType}`, className)} />
  ) : (
    <LucideZap className={cn(`icon-${potionType}`, className)} />
  );
}
