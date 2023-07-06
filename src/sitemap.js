const sitemap = require('sitemap');
const hostname = 'https://www.vidriosdelacosta.com';
const fs = require('fs');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/:productos', changefreq: 'monthly', priority: 0.8 },
  { url: '/itemDetails/item/:id', changefreq: 'monthly', priority: 0.8 },
  { url: '/cart', changefreq: 'monthly', priority: 0.8 },
  { url: '/formularioContacto', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());