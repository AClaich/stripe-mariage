module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_URL', 'http://195.35.1.67'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5bGaWCKgRV9VuPfwr8l+xg=='),
    },
  },
  app: {
    keys: env.array('APP_KEYS', ['m6wjIgSYCfj1MKnrgYO+tQ==', 'lWqBrbMQZFSrQQYB/KReCA==']),
  },
  // webhooks: {
  //   populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  // },
});
