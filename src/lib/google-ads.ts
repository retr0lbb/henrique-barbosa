declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportConversion({
  value,
  transactionId,
}: {
  value?: number;
  transactionId?: string;
}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "purchase", {
    value,
    currency: "BRL",
    transaction_id: transactionId,
  });
}
