"use client";

import { trackGoogleAdsConversion } from "@/lib/google-ads";
import { useEffect } from "react";

export function GoogleAdsConversion() {
  useEffect(() => {
    trackGoogleAdsConversion();
  }, []);

  return null;
}
