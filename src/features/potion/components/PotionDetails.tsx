import getPotion from "@/features/potion/queries/getPotion";

type Props = {
  owner: string;
  repo: string;
};

export default async function PotionDetails({ owner, repo }: Props) {
  const potion = await getPotion({ owner, repo });
  console.log(potion);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-1">Left</div>

      <div className="md:col-span-2">Right</div>
    </div>
  );
}
