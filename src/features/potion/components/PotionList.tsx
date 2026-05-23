import PotionFilter from "@/features/potion/components/PotionFilter";
import PotionListItem from "@/features/potion/components/PotionListItem";
import Placeholder from "@/components/commons/Placeholder";

import getPotions from "@/features/potion/queries/getPotions";
import { getPotionType } from "@/features/potion/utils/helpers";

type Props = {
  type?: string;
};

export default async function PotionList({ type }: Props) {
  const potions = await getPotions();

  if (potions.length === 0) {
    return <Placeholder text="No potion found" />;
  }

  const filteredPotions = type
    ? potions.filter((potion) => {
        return getPotionType(potion.stargazers_count) === type;
      })
    : potions;

  return (
    <>
      <PotionFilter type={type} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPotions.map((potion) => (
          <PotionListItem key={potion.id} potion={potion} />
        ))}
      </div>
    </>
  );
}
