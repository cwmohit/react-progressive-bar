import { useState, useEffect } from 'react';

// Custom hook to manage progress bar state
export const useProgressBar = (
  initialValue: number = 0,  // Initial value of the progress
  step: number = 10,         // Amount to increase the progress in each interval
  interval: number = 1000    // Time interval in milliseconds for progress updates
) => {
  const [progress, setProgress] = useState<number>(initialValue);

  useEffect(() => {
    if (interval > 0 && step > 0) {
      const timer = setInterval(() => {
        setProgress(prev => (prev + step >= 100 ? 100 : prev + step));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [step, interval]);

  return { progress, setProgress };
};