// Google Analytics 4 helper functions.
// GA_MEASUREMENT_ID is safe to keep here (it's public, visible in page source anyway).
export const GA_MEASUREMENT_ID = "G-2C2PCM39FE";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Sends a page_view event — called automatically on route change.
export function pageview(url: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

// Sends a custom event, e.g. trackEvent("buy_now_click", { source: "navbar" }).
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}