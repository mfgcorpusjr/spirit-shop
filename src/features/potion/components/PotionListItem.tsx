import Link from "next/link";
import Image from "next/image";
import { LucideStar, LucideGitFork } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PotionIcon from "@/features/potion/components/PotionIcon";
import PotionAttribute from "@/features/potion/components/PotionAttribute";

import { cn } from "@/lib/utils";
import type { Potion } from "@/features/potion/utils/types";
import { getPotionType, formatStats } from "@/features/potion/utils/helpers";

type Props = {
  potion: Potion;
};

export default function PotionListItem({ potion }: Props) {
  const potionType = getPotionType(potion.stargazers_count);

  return (
    <Link href={`/potions/${potion.owner.login}__${potion.name}`}>
      <Card className={cn(`h-full relative card-ring card-ring-${potionType}`)}>
        <div className={cn(`card-gradient card-gradient-${potionType}`)} />

        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image
              src={potion.owner.avatar_url}
              alt={potion.name}
              width={32}
              height={32}
              className="rounded-full"
            />

            <div>
              <h4 className="text-sm font-medium">{potion.name}</h4>

              <p className="text-xs text-muted-foreground">
                {potion.owner.login}
              </p>
            </div>
          </CardTitle>

          <CardAction>
            <PotionIcon className="size-4" potionType={potionType} />
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="h-15 text-sm text-muted-foreground line-clamp-3">
            {potion.description}
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 h-full">
          <div className="w-full flex justify-between items-center gap-4">
            <PotionAttribute
              icon={<LucideStar />}
              iconClassName="text-yellow-500"
              text={`${formatStats(potion.stargazers_count)} star`}
            />

            <PotionAttribute
              icon={<LucideGitFork />}
              iconClassName="text-cyan-500"
              text={`${formatStats(potion.forks_count)} fork`}
            />
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
    </Link>
  );
}
