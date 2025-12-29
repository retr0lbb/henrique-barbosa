import { DictionaryProvider } from "@/hooks/use-dictionary-context";
import { getDictionary } from "../dictionaries";

interface ProjectsLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function ProjectsLayout({
  children,
  params,
}: ProjectsLayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "pt-BR" | "en-US");

  return (
    <DictionaryProvider dictionary={dict}>
      <div className="w-full min-h-dvh flex flex-col gap-10">{children}</div>
    </DictionaryProvider>
  );
}
