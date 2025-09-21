import { useMemo } from 'react';

/**
 * Custom hook for star rating logic
 * @param stars - Number of filled stars (0-5)
 * @returns Object with filledStars and emptyStars arrays
 */
export const useStarRating = (stars: number) => {
  return useMemo(() => {
    const clampedStars = Math.max(0, Math.min(5, stars));

    return {
      filledStars: Array.from({ length: clampedStars }, (_, i) => i),
      emptyStars: Array.from({ length: 5 - clampedStars }, (_, i) => i),
    };
  }, [stars]);
};
