import { useState, useEffect } from 'react';

export const useProgressBar = (initialValue: number, step: number, interval: number) => {
  const [progress, setProgress] = useState<number>(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev + step >= 100 ? 100 : prev + step));
    }, interval);

    return () => clearInterval(timer);
  }, [step, interval]);

  return { progress, setProgress };
};