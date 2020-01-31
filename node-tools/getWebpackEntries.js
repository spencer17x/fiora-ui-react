const path = require('path');
const fs = require('fs');

module.exports = function getWebpackEntries(dir) {
	return fs.readdirSync(path.resolve(dir));
};
