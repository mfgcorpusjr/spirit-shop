import PotionFilter from "@/features/potion/components/PotionFilter";
import PotionListItem from "@/features/potion/components/PotionListItem";

import getPotions from "@/features/potion/queries/getPotions";
import { getPotionType } from "@/features/potion/utils/helpers";

type Props = {
  query?: string;
};

export default async function PotionList({ query }: Props) {
  const potions = await getPotions();

  if (potions.length === 0) {
    return null;
  }

  const filteredPotions = query
    ? potions.filter((potion) => {
        return getPotionType(potion.stargazers_count) === query;
      })
    : potions;

  return (
    <>
      <PotionFilter query={query} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPotions.map((potion) => (
          <PotionListItem key={potion.id} potion={potion} />
        ))}
      </div>
    </>
  );
}
