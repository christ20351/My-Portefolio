const { hostname } = require("os");

module.exports = {
    i18n: {
      locales: ['fr', 'en'],
      defaultLocale: 'fr',
      localeDetection: false,
    },
    images: {
      remotePatterns: [
        {
          hostname: "**",
        },
      ],
    },
    trailingSlash: true,
  }