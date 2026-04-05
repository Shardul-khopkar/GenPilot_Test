import { useState, useCallback } from 'react';

interface UseDelayedActionOptions {
  delay?: number; // delay in milliseconds, default 2000 (2 seconds)
}

/**
 * Hook to add a delay to button actions with loading state
 * @param delay - delay in milliseconds before executing the action (default: 2000ms)
 * @returns [isDelayed, executeDelayed] - isDelayed state and function to execute action with delay
 */
export function useDelayedAction(delay: number = 2000) {
  const [isDelayed, setIsDelayed] = useState(false);

  const executeDelayed = useCallback(
    async (callback: () => void | Promise<void>) => {
      if (isDelayed) return;

      setIsDelayed(true);
      await new Promise((resolve) => setTimeout(resolve, delay));
      callback();
      setIsDelayed(false);
    },
    [delay, isDelayed]
  );

  return { isDelayed, executeDelayed };
}
