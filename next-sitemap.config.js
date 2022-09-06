module.exports = {
	siteUrl: 'https://thelandlord.biz',
	generateIndexSitemap: false,
	generateRobotsTxt: true,
	changefreq: 'weekly',

	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				disallow: '/en/',
			},
		],
	},

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

		if (path === '/faq') {
			return {
				loc: path,
				priority: 0.9,
				changefreq: config.changefreq,
				lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
				alternateRefs: config.alternateRefs ?? [],
			};
		}

		if (path === '/roadmap' || path === '/team') {
			return {
				loc: path,
				priority: 0.8,
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
