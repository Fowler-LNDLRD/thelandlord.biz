module.exports = {
	siteUrl: 'https://thelandlord.biz',
	generateIndexSitemap: false,
	generateRobotsTxt: true,
	changefreq: 'weekly',

	transform: async (config, path) => {
		if (path === '/') {
			return {
				loc: path,
				priority: 1,
				changefreq: config.changefreq,
				lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
				alternateRefs: config.alternateRefs ?? [],
			};
		}

		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? [],
		};
	},
};
