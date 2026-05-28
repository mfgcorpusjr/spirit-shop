import { Suspense } from "react";

import Hero from "@/components/home/Hero";
import PotionList from "@/features/potion/components/PotionList";
import Spinner from "@/components/common/Spinner";

type Props = {
  searchParams: Promise<{
    type?: string;
  }>;
};

export default async function HomePage({ searchParams }: Props) {
  const { type } = await searchParams;

  return (
    <div className="flex-1 flex flex-col gap-8">
      <Hero />

      <Suspense fallback={<Spinner />}>
        <PotionList type={type} />
      </Suspense>
    </div>
  );
}
