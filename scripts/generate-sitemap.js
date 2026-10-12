const fs = require('fs');
const { cities } = require('../src/data/locationsData.ts');
const { servicesData } = require('../src/data/servicesData.ts');

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://likhitpackers.in';

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/quote', priority: '0.9', changefreq: 'weekly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.8', changefreq: 'monthly' },
  { path: '/locations', priority: '0.9', changefreq: 'weekly' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

staticPages.forEach(p => {
  xml += '  <url>\n';
  xml += '    <loc>' + baseUrl + p.path + '</loc>\n';
  xml += '    <lastmod>' + today + '</lastmod>\n';
  xml += '    <changefreq>' + p.changefreq + '</changefreq>\n';
  xml += '    <priority>' + p.priority + '</priority>\n';
  xml += '  </url>\n';
});

servicesData.forEach(s => {
  xml += '  <url>\n';
  xml += '    <loc>' + baseUrl + '/services/' + s.id + '</loc>\n';
  xml += '    <lastmod>' + today + '</lastmod>\n';
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
});

cities.forEach(c => {
  xml += '  <url>\n';
  xml += '    <loc>' + baseUrl + '/locations/' + c.slug + '</loc>\n';
  xml += '    <lastmod>' + today + '</lastmod>\n';
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated with ' + (staticPages.length + servicesData.length + cities.length) + ' URLs');
