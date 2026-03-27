const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('data/food.ts', 'utf8');
const regex = /https:\/\/images\.unsplash\.com\/[^'"]+/g;
const urls = [...new Set(content.match(regex))];

console.log('Found', urls.length, 'URLs');
let pending = urls.length;

urls.forEach(url => {
  https.get(url, (res) => {
    if (res.statusCode !== 200 && res.statusCode !== 302) {
      console.log('INVALID:', res.statusCode, url);
    }
    pending--;
  }).on('error', (e) => {
    console.error('ERROR:', e, url);
    pending--;
  });
});
