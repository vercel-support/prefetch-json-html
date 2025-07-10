import { Inter } from "next/font/google";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>{t("greeting")}</h1>
      <Link href="/about">{t("about")}</Link>
    </main>
  );
}
