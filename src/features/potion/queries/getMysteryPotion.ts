import getPotions from "@/features/potion/queries/getPotions";

const getMysteryPotion = async () => {
  const potions = await getPotions();

  return potions.length === 0
    ? null
    : potions[Math.floor(Math.random() * potions.length)];
};

export default getMysteryPotion;
