module.exports = ({ env }) => ({
  connection: {
    client: "mysql2",
    connection: {
      host: 'srv1015.hstgr.io',
      port: 3306,
      database: 'u525962591_mariage',
      user: 'u525962591_mariage',
      password: 't|w!1r!g8T',
      ssl: {
        rejectUnauthorized:  true,
      },
    },
  }
});
