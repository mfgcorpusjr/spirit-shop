export const getPotionType = (stars: number) => {
  if (stars >= 200_000) {
    return "electric";
  } else if (stars >= 100_000) {
    return "ice";
  } else {
    return "fire";
  }
};

export const formatStats = (stats: number) => {
  if (stats >= 1_000_000) {
    return `${(stats / 1_000_000).toFixed(1)}M`;
  } else if (stats >= 1_000) {
    return `${(stats / 1_000).toFixed(1)}K`;
  } else {
    return stats;
  }
};
