const fs = require('fs');
const version = require('../package.json').version;
const file = 'nested-lovelace-card.js';
const content = fs.readFileSync(file, 'utf8');
fs.writeFileSync(file, content.replace(/Version: \$\{'[^']*'\}/, "Version: ${'" + version + "'}"));
console.log(`Updated ${file} to version ${version}`);
