import * as React from "react";

interface FadedRotationOptions {
  itemCount: number;
  intervalMs: number;
  transitionMs: number;
}

export function useFadedRotation({
  itemCount,
  intervalMs,
  transitionMs,
}: FadedRotationOptions) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId: number | undefined;
    let transitionId: number | undefined;

    const stop = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(transitionId);
      intervalId = undefined;
      transitionId = undefined;
    };

    const start = () => {
      stop();
      setIsVisible(true);
      if (document.hidden || reducedMotion.matches || itemCount <= 1) return;

      intervalId = window.setInterval(() => {
        setIsVisible(false);
        transitionId = window.setTimeout(() => {
          setActiveIndex((current) => (current + 1) % itemCount);
          setIsVisible(true);
        }, transitionMs);
      }, intervalMs);
    };

    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", start);
      reducedMotion.removeEventListener("change", start);
    };
  }, [intervalMs, itemCount, transitionMs]);

  return { activeIndex, isVisible };
}
