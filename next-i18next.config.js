const path = require("node:path");
const fs = require("node:fs");

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
  localePath: path.join(__dirname, "static", "locales"),
  localeStructure: "{{lng}}/{{ns}}",
  preload: true,
};
