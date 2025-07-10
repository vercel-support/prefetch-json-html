import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { foo: "bar" },
    revalidate: 60 * 60,
  };
};
