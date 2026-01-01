import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { locales } from "./i18n-config";
import { notFound } from "next/navigation";
import { TopSideNavigation, VerticalDivider } from "@/components/navigator";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { getDictionary } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Henrique Barbosa",
  description: "Fullstack developer portfolio",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!lang) {
    notFound();
  }
  const dict = await getDictionary(lang as "pt-BR" | "en-US");

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto_mono.variable} antialiased bg-zinc-950`}
      >
        <TopSideNavigation.Root>
          <TopSideNavigation.LocaleButton />
          <VerticalDivider />
          <TopSideNavigation.Nav>
            <TopSideNavigation.SectionLink
              Icon={FaHouse}
              text={dict.navBar.home}
              to={`/${lang}/`}
            />
            <TopSideNavigation.SectionLink
              Icon={FaUser}
              text={dict.navBar.about}
              to={`/${lang}/#about`}
            />
            <TopSideNavigation.SectionLink
              Icon={IoGrid}
              text={dict.navBar.projects}
              to={`/${lang}/#projects`}
            />
            <TopSideNavigation.SectionLink
              Icon={MdEmail}
              text={dict.navBar.contact}
              to={`/${lang}/#contact`}
            />
          </TopSideNavigation.Nav>
        </TopSideNavigation.Root>
        {children}
      </body>
    </html>
  );
}
