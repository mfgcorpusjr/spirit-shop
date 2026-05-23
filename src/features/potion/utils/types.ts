export type Potion = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
};

export type PotionType = "electric" | "ice" | "fire";
