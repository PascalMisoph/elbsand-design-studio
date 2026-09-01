import * as React from "react";

export function useVisibleInterval(callback: () => void, delay: number, disabled = false) {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (disabled) return;
    let timer: number | undefined;

    const start = () => {
      window.clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(() => callbackRef.current(), delay);
    };

    start();
    document.addEventListener("visibilitychange", start);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", start);
    };
  }, [delay, disabled]);
}
