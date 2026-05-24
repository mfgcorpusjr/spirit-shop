import { notFound } from "next/navigation";

import PotionDetailsLeft from "@/features/potion/components/PotionDetailsLeft";
import PotionDetailsRight from "@/features/potion/components/PotionDetailsRight";

import getPotion from "@/features/potion/queries/getPotion";
import getMysteryPotion from "@/features/potion/queries/getMysteryPotion";

type Props = {
  owner?: string;
  repo?: string;
};

export default async function PotionDetails({ owner, repo }: Props) {
  const potion =
    owner && repo ? await getPotion({ owner, repo }) : await getMysteryPotion();

  if (!potion) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <PotionDetailsLeft potion={potion} />
      </div>

      <div className="md:col-span-2">
        <PotionDetailsRight potion={potion} />
      </div>
    </div>
  );
}
