module.exports = {
	apps: [
		{
			name: 'website',
			script: 'npm',
			args: 'start',
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			env: {
				NODE_ENV: 'production',
			},
		},
	],
};
