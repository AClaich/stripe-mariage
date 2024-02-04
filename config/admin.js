module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5bGaWCKgRV9VuPfwr8l+xg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'RoiWJVwkvhqpuGFD+sIHRw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'E4fynCu4El5u7hDENcBCbw=='),
    },
  },
  // flags: {
  //   nps: env.bool('FLAG_NPS', true),
  //   promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  // },
});
