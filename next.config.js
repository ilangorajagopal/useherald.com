const { createSecureHeaders } = require('next-secure-headers');
const withPlugins = require('next-compose-plugins');
const withTm = require('next-transpile-modules')(['@useherald/react-widget']);
const { withDokz } = require('dokz/dist/plugin');

// const securityHeaders = [
// 	{
// 		key: 'X-Frame-Options',
// 		value: 'SAMEORIGIN'
// 	},
// 	{
// 		key: 'Permissions-Policy',
// 		value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
// 	},
// 	{
// 		key: 'X-Content-Type-Options',
// 		value: 'nosniff'
// 	},
// 	{
// 		key: 'Referrer-Policy',
// 		value: 'origin-when-cross-origin'
// 	},
// 	{
// 		key: 'Content-Security-Policy',
// 		value: ''
// 	}
// ];

module.exports = withPlugins([withDokz, withTm], {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders(),
			},
		];
	},
	images: {
		domains: ['useherald.com'],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
});

// module.exports =
