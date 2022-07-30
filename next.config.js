const path = require('path');

module.exports = {
	basePath: '/thelandlord.biz',
	sassOptions: {
		includePaths: [path.join(__dirname, 'assets/scss')],
	},
};
