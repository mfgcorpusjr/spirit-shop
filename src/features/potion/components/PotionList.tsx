import PotionListItem from "@/features/potion/components/PotionListItem";

import getPotions from "@/features/potion/queries/getPotions";

export default async function PotionList() {
  const potions = await getPotions();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {potions.map((potion) => (
        <PotionListItem key={potion.id} potion={potion} />
      ))}
    </div>
  );
}
