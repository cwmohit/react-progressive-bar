import { useState, useEffect } from 'react';

interface UseProgressBarProps {
  initialValue?: number;   // Initial value of the progress
  step?: number;           // Amount to increase the progress in each interval
  interval?: number;       // Time interval in milliseconds for progress updates
}

export const useProgressBar = ({
  initialValue = 0,
  step = 10,
  interval = 1000
}: UseProgressBarProps) => {
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