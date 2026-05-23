import Image from "next/image";
import {
  LucideStar,
  LucideGitFork,
  LucideCode,
  LucideCalendar,
} from "lucide-react";
import { format } from "date-fns";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PotionSection from "@/features/potion/components/PotionSection";
import PotionAttribute from "@/features/potion/components/PotionAttribute";

import { cn } from "@/lib/utils";
import type { Potion } from "@/features/potion/utils/types";
import { getPotionType, formatStats } from "@/features/potion/utils/helpers";

type Props = {
  potion: Potion;
};

export default function PotionDetailsLeft({ potion }: Props) {
  const potionType = getPotionType(potion.stargazers_count);

  return (
    <Card className="relative space-y-8">
      <div className={cn(`card-gradient card-gradient-${potionType}`)} />

      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image
            src={potion.owner.avatar_url}
            alt={potion.name}
            width={40}
            height={40}
            className="rounded-full"
          />

          <div>
            <h4 className="text-sm font-medium">{potion.name}</h4>

            <p className="text-xs text-muted-foreground">
              {potion.owner.login}
            </p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <PotionSection title="Github Stats">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 text-sm text-muted-foreground">
            <PotionAttribute
              icon={<LucideStar />}
              iconClassName="size-4 text-yellow-500"
              text={`${formatStats(potion.stargazers_count)} star`}
              textClassName="text-sm"
            />

            <PotionAttribute
              icon={<LucideGitFork />}
              iconClassName="size-4 text-cyan-500"
              text={`${formatStats(potion.forks_count)} fork`}
              textClassName="text-sm"
            />
          </div>
        </PotionSection>

        <PotionSection title="Language">
          <PotionAttribute
            icon={<LucideCode />}
            iconClassName="size-4 text-green-500"
            text={potion.language ?? ""}
            textClassName="text-sm"
          />
        </PotionSection>

        <PotionSection title="Last Updated">
          <PotionAttribute
            icon={<LucideCalendar />}
            iconClassName="size-4 text-purple-500"
            text={format(potion.updated_at, "MMMM d, yyyy")}
            textClassName="text-sm"
          />
        </PotionSection>
      </CardContent>
    </Card>
  );
}
