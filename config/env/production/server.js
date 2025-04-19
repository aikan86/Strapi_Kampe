module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: process.env.PORT || 1337,
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']),
  },
  url: env('PUBLIC_URL', 'https://kampe-strapi.onrender.com')
});
