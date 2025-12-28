import { type NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, locales } from "./app/[lang]/i18n-config";

function getLocale(request: NextRequest): string {
  // Get headers as plain object for Negotiator
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // Get user's preferred languages from Accept-Language header
  const languages = new Negotiator({
    headers: negotiatorHeaders,
  }).languages();

  // Match against our supported locales
  return match(languages, locales as unknown as string[], defaultLocale);
}

export function proxy(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // If locale is already in pathname, continue normally
  if (pathnameHasLocale) return;

  // Get the best matching locale
  const locale = getLocale(request);

  // Redirect to the same path with locale prefix
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|_vercel|.*\\..*).*)"],
};
