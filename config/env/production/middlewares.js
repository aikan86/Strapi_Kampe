module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com', '*.digitaloceanspaces.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com', '*.digitaloceanspaces.com'],
          upgradeInsecureRequests: null,
        },
      },
      frameguard: false,
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:8000',
        'https://tuosito.vercel.app',  // Sostituisci con l'URL del tuo frontend
        'https://tuosito.netlify.app', // Sostituisci con altri URL se necessario
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
