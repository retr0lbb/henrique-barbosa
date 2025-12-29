import { type NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, locales } from "./app/[lang]/i18n-config";

function getLocaleFromCookie(request: NextRequest): string | null {
  const cookie = request.cookies.get("preferred_language");
  if (cookie?.value && locales.includes(cookie.value as "en-US" | "pt-BR")) {
    return cookie.value;
  }
  return null;
}

function getLocaleFromHeader(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({
    headers: negotiatorHeaders,
  }).languages();

  return match(languages, locales as unknown as string[], defaultLocale);
}

export function proxy(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Priority: Cookie > Browser Header
  const locale = getLocaleFromCookie(request) || getLocaleFromHeader(request);

  // Redirect to the same path with locale prefix
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|_vercel|.*\\..*).*)"],
};
