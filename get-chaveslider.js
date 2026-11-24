const https = require('https');
const fs = require('fs');

const pageUrl = 'https://www.chaveslider.com/fechadura-eletronica-inteligente-tuya-wifi-biometria-senha-cartao';

https.get(pageUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    // Buscar links de imagens da loja
    const matches = html.match(/https:\/\/[^\s"'<>]+\.(?:jpg|png|jpeg|webp)/gi);
    const unique = [...new Set(matches || [])];
    console.log('TOTAL IMAGENS ENCONTRADAS:', unique.length);
    unique.forEach(u => console.log('IMG:', u));
  });
}).on('error', e => console.error(e));
