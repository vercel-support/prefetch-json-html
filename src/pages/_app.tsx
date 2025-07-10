import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation, UserConfig } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";

const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
