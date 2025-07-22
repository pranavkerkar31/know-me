'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.1, // Try between 1.0 and 1.5 for smooth but responsive scroll
  easing: (t: number) => t, // Linear easing = direct & natural scroll feel
});
;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up if needed
    };
  }, []);

  return <>{children}</>;
}
