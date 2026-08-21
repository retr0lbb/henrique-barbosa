declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleAdsConversion({
  value,
  currency = "BRL",
  transactionId,
}: {
  value?: number;
  currency?: string;
  transactionId?: string;
} = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.gtag) {
    console.warn("Google Ads tag ainda não foi carregada.");
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18264083412/QIXxCJKZx-UcENSX_4RE",
    ...(value !== undefined && { value }),
    ...(currency && { currency }),
    ...(transactionId && { transaction_id: transactionId }),
  });
}
