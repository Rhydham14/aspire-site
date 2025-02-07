module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "https://teststrapi2.aspiresoftware.in",
        "https://testweb.aspiresoftware.in",
        "https://www.aspiresoftserv.com",
        "https://websiteapi.aspiresoftserv.com",
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
