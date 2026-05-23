import type { Potion } from "@/features/potion/utils/types";

const getPotion = async ({ owner, repo }: { owner: string; repo: string }) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      next: {
        revalidate: 3600,
      },
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data: Potion = await res.json();
    return data;
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error occurred",
    );
  }

  return null;
};

export default getPotion;
