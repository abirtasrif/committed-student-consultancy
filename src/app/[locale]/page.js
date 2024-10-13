import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("about");

  return (
    <main className="font-[family-name:var(--font-geist-sans)] px-10">
      <h1>Committed Corporate Limited</h1>
      <h2>Committed For Better Service</h2>

      <div className="text-center">
        <h4 className="text-4xl mb-4">{t("title")}</h4>
        <p className="text-xl">{t("description")}</p>
      </div>
    </main>
  );
}
