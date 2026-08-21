"use client";

import { trackGoogleAdsConversion } from "@/lib/google-ads";
import { useEffect } from "react";

export function GoogleAdsConversion() {
  useEffect(() => {
    console.log("SENT GOOGLE DATA");
    trackGoogleAdsConversion();
  }, []);

  return null;
}
