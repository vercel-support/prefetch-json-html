module.exports = {
  locales: ["default", "pl"],
  defaultLocale: "default",
  defaultNS: "common",
  localeDetection: false,
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${map[lang]}/${ns}.json`).then((m) => m.default),
};

const map = {
  default: "en-US",
  pl: "pl-PL",
};
