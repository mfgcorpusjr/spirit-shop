import { Suspense } from "react";
import { Metadata } from "next";

import Heading from "@/components/common/Heading";
import Spinner from "@/components/common/Spinner";
import PotionDetails from "@/features/potion/components/PotionDetails";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mystery Potion",
};

export default function MysteryPotionPage() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading
        title="Mystery Potion"
        description="This potion is a mystery. It is a mystery. It is a mystery."
      />

      <Suspense fallback={<Spinner />}>
        <PotionDetails />
      </Suspense>
    </div>
  );
}
