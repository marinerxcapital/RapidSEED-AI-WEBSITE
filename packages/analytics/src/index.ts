declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function pageview(url: string, gaId: string): void {
  if (typeof window === "undefined") return;
  window.gtag("config", gaId, { page_path: url });
}

export function trackEvent({ action, category, label, value }: GTagEvent): void {
  if (typeof window === "undefined") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackConversion(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.gtag("event", eventName, params ?? {});
  if (window.fbq) {
    window.fbq("track", eventName, params ?? {});
  }
}

export function pushToDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}
