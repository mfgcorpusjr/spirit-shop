import { Suspense } from "react";

import Hero from "@/components/home/Hero";
import PotionList from "@/features/potion/components/PotionList";
import Spinner from "@/components/commons/Spinner";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Hero />

      <Suspense fallback={<Spinner />}>
        <PotionList />
      </Suspense>
    </div>
  );
}
