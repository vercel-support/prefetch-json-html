import i18n from "./next-i18next.config.js";

export default {
  i18n: {
    defaultLocale: i18n.i18n.defaultLocale,
    locales: i18n.i18n.locales,
    localeDetection: i18n.i18n.localeDetection,
  },
  // basePath: "/pl",
  reactStrictMode: true,
};
