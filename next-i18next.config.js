const locales = ["pl-PL", "en-US"];

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: false,
  i18n: {
    defaultLocale: "pl-PL",
    locales,
    localeDetection: false,
  },
  ns: ["common"],
  // lowerCaseLng: true,
  localePath: "./locales",
  localeStructure: "{{lng}}/{{ns}}",
};
