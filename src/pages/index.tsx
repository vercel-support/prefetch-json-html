import { Inter } from "next/font/google";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main className="text-center p-24 bg-slate-400">
      <h1 className="">{t("greeting")}</h1>
      <Link href="/about">{t("goto", { link: t("about") })}</Link>
      <br />
      <Link href="/dynamic/123">{t("goto", { link: t("dynamic") })}</Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pl-PL", ["common"])),
    },
  };
};
