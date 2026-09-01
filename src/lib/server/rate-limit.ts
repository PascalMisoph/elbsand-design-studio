interface RateLimiterOptions {
  maxRequests: number;
  windowMs: number;
  maxEntries?: number;
}

export function createInMemoryRateLimiter({
  maxRequests,
  windowMs,
  maxEntries = 10_000,
}: RateLimiterOptions) {
  const requestHistory = new Map<string, number[]>();
  let lastSweep = 0;

  return (key: string) => {
    const now = Date.now();

    if (now - lastSweep >= windowMs) {
      for (const [storedKey, timestamps] of requestHistory) {
        if (!timestamps.some((timestamp) => now - timestamp < windowMs)) {
          requestHistory.delete(storedKey);
        }
      }
      lastSweep = now;
    }

    const recent = (requestHistory.get(key) ?? []).filter(
      (timestamp) => now - timestamp < windowMs,
    );
    if (recent.length >= maxRequests) return true;
    if (!requestHistory.has(key) && requestHistory.size >= maxEntries) return true;

    recent.push(now);
    requestHistory.set(key, recent);
    return false;
  };
}
