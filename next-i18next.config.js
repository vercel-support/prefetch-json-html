const locales = ["pl-PL", "en-US"];

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: true,
  i18n: {
    defaultLocale: "pl-PL",
    locales,
    localeDetection: false,
  },
  ns: ["common"],
  // lowerCaseLng: true,
  localePath:
    typeof window === "undefined" ? __dirname + "/public/locales" : "/locales",
  localeStructure: "{{lng}}/{{ns}}",
  preload: true,
};
