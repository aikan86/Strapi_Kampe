module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // Usa la porta fornita da Render o fallback su 1337
  app: {
    keys: env.array('APP_KEYS')
  },
  url: env('PUBLIC_URL', 'https://kampe-strapi.onrender.com')
});
