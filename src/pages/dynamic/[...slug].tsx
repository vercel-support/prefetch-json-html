import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dynamic() {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation("common");

  return (
    <main className="text-center p-24 bg-green-700">
      <h1>
        {t("dynamic")}: {slug}
      </h1>
      <Link href="/">{t("goto", { link: t("home") })}</Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params || { slug: [] };

  return {
    props: { foo: "bar", slug },
    revalidate: 60 * 60,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
