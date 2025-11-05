import { useEffect, useRef } from 'react';

export const useBodyScrollLock = (enabled: boolean = true) => {
  const originalBodyStyleRef = useRef<string | null>(null);

  useEffect(() => {
    if (enabled) {
      if (originalBodyStyleRef.current === null) {
        originalBodyStyleRef.current = document.body.style.overflow
      }

      document.body.style.overflow = 'hidden';
    } else {
      if (originalBodyStyleRef.current != null) {
        document.body.style.overflow = originalBodyStyleRef.current;
        originalBodyStyleRef.current = null;
      }
    }

    return () => {
      if (originalBodyStyleRef.current != null) {
        document.body.style.overflow = originalBodyStyleRef.current;
        originalBodyStyleRef.current = null;
      }
    }
  }, [enabled])
}
