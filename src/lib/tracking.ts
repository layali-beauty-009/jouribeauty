type TrackPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, payload?: TrackPayload) {
  if (typeof window === "undefined") return;
  const w = window as Window & { fbq?: (...args: unknown[]) => void; ttq?: { track: (...args: unknown[]) => void } };
  try {
    w.fbq?.("track", name, payload);
    w.ttq?.track(name, payload);
  } catch {
    /* analytics optional */
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[track]", name, payload);
  }
}
