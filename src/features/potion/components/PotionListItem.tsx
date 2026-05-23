import Image from "next/image";
import {
  LucideStar,
  LucideGitFork,
  LucideFlame,
  LucideBox,
  LucideZap,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { Potion } from "@/features/potion/utils/types";
import { getPotionType, formatStats } from "@/features/potion/utils/helpers";

type Props = {
  potion: Potion;
};

export default function PotionListItem({ potion }: Props) {
  const potionType = getPotionType(potion.stargazers_count);

  return (
    <Card className={cn(`relative card-ring card-ring-${potionType}`)}>
      <div className={cn(`card-gradient card-gradient-${potionType}`)} />

      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image
            src={potion.owner.avatar_url}
            alt={potion.name}
            width={32}
            height={32}
            className="rounded-full border border-primary"
          />

          <div>
            <h4 className="text-sm font-medium">{potion.name}</h4>

            <p className="text-xs text-muted-foreground">
              {potion.owner.login}
            </p>
          </div>
        </CardTitle>

        <CardAction>
          {potionType === "fire" ? (
            <LucideFlame className={cn(`size-4 icon-${potionType}`)} />
          ) : potionType === "ice" ? (
            <LucideBox className={cn(`size-4 icon-${potionType}`)} />
          ) : (
            <LucideZap className={cn(`size-4 icon-${potionType}`)} />
          )}
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="h-15 text-sm text-muted-foreground line-clamp-3">
          {potion.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 h-full">
        <div className="w-full flex justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <LucideStar className="size-3 text-yellow-500" />

            <span>{formatStats(potion.stargazers_count)} star</span>
          </div>

          <div className="flex items-center gap-2">
            <LucideGitFork className="size-3 text-cyan-500" />

            <span>{formatStats(potion.forks_count)} fork</span>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center gap-2">
          {potion.topics.splice(0, 3).map((topic, index) => (
            <Badge key={index} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
