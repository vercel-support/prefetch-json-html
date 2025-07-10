import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <main className="text-center p-24 bg-green-700">
      <h1>{t("about")}</h1>
      <Link href="/">{t("goto", { link: t("home") })}</Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      foo: "bar",
    },
    revalidate: 60 * 60,
  };
};
