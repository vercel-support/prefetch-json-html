import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params || { slug: [] };

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pl-PL", ["common"])),
      foo: "bar",
      slug,
    },
    revalidate: 60 * 60,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
