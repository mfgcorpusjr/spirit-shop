import { Suspense } from "react";
import { Metadata } from "next";

import Heading from "@/components/common/Heading";
import Spinner from "@/components/common/Spinner";
import PotionDetails from "@/features/potion/components/PotionDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const [, repo] = slug.split("__");

  return {
    title: repo,
  };
};

export default async function PotionDetailsPage({ params }: Props) {
  const { slug } = await params;
  const [owner, repo] = slug.split("__");

  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading
        title="Potion Details"
        description="Discover the magical properties of this enchanted brew."
      />

      <Suspense fallback={<Spinner />}>
        <PotionDetails owner={owner} repo={repo} />
      </Suspense>
    </div>
  );
}
