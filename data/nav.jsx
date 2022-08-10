const nav = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Store',
		url: '/store',
	},

	{
		title: 'Whitepaper',
		url: '/whitepaper',
	},
	{
		title: 'Audit',
		url: '/audit',
	},
	{
		title: 'Roadmap',
		url: '/roadmap',
	},
	{
		title: 'About',
		sub: true,
		subOpen: false,
		submenu: [
			{
				title: 'Team',
				url: '/team',
			},
			{
				title: 'AMAs',
				url: '/ama',
			},
			{
				title: 'FAQ',
				url: '/faq',
			},
			{
				title: 'Contact us',
				url: '/contact',
			},
		],
	},
];

export default nav;
