const { readFileSync } = require('fs');
let loadURLs = () => JSON.parse(readFileSync('url.json'));


module.exports = { loadURLs };

