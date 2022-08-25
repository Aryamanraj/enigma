const { readFileSync } = require('fs');
let loadData = () => JSON.parse(readFileSync('./upload1.json'));


module.exports = { loadData };
