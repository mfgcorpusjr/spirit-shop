import type { Potion } from "@/features/potion/utils/types";

const getPotions = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/search/repositories?q=topic:javascript+stars:>=5000&sort=stars&order=desc",
      {
        next: {
          revalidate: 3600,
        },
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data: { items: Potion[] } = await res.json();
    return data.items;
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error occurred",
    );
  }

  return [];
};

export default getPotions;
