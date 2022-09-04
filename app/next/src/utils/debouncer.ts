import { useEffect, useState } from 'react';

export function useDebounce(
  value: string | number | null,
  callback: () => void
): void {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) clearTimeout(timer);
    if (!value) return;

    setTimer(
      setTimeout(() => {
        void callback();
      }, 800)
    );
  }, [value]);
}
