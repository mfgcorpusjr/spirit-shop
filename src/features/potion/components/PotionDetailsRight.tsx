import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PotionSection from "@/features/potion/components/PotionSection";

import type { Potion } from "@/features/potion/utils/types";

type Props = {
  potion: Potion;
};

export default function PotionDetailsRight({ potion }: Props) {
  return (
    <Card className="space-y-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight">
          Repository Details
        </CardTitle>

        <CardDescription>{potion.description}</CardDescription>

        <CardAction>
          <Button asChild size="xs">
            <Link href={potion.html_url} target="_blank">
              View on Github
            </Link>
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PotionSection title="Organization">
            <div className="flex items-center gap-2">
              <Image
                src={potion.owner.avatar_url}
                alt={potion.name}
                width={32}
                height={32}
                className="rounded-full"
              />

              <h4 className="text-sm font-medium">{potion.owner.login}</h4>
            </div>
          </PotionSection>

          <PotionSection title="Repository Name">
            <h4 className="text-sm font-medium">{potion.name}</h4>
          </PotionSection>
        </div>

        <PotionSection title="Topics">
          <div className="flex flex-wrap items-center gap-2">
            {potion.topics.map((topic, index) => (
              <Badge key={index} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </PotionSection>
      </CardContent>
    </Card>
  );
}
