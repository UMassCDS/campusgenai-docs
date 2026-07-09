// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.campusgenai.org',
	base: '/',
	integrations: [
		starlight({
			title: 'campusGenAI Docs',
			logo: {
				src: './src/assets/logo-primary.png',
				replacesTitle: true,
			},
			components: {
				// Point the upper-left logo at the marketing site instead of the docs home.
				SiteTitle: './src/components/SiteTitle.astro',
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'script',
					content: `
						if (!localStorage.getItem('starlight-theme')) {
							document.documentElement.dataset.theme = 'light';
						}
					`,
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/campusgenai' },
			],
			customCss: [
				'@fontsource/inter/400.css',
				'@fontsource/inter/500.css',
				'@fontsource/inter/600.css',
				'@fontsource/inter/700.css',
				'@fontsource/dm-sans/600.css',
				'@fontsource/dm-sans/700.css',
				'@fontsource/dm-sans/900.css',
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Quick Guide', slug: 'getting-started/quick-guide' },
					],
				},
				{
					label: 'Platform Guides',
					items: [
						{ label: 'The Chat Interface', slug: 'platform/chat-interface' },
						{ label: 'Working with Files', slug: 'platform/working-with-files' },
						{ label: 'Using Agents', slug: 'platform/using-agents' },
						{ label: 'Settings & Preferences', slug: 'platform/settings' },
						{ label: 'Credits & Tokens', slug: 'platform/credits-and-tokens' },
						{ label: 'Admin Portal', slug: 'platform/admin-portal' },
					],
				},
				{
					label: 'KeyMaker API',
					items: [
						{ label: 'Overview', slug: 'keymaker/overview' },
						{ label: 'Getting Started', slug: 'keymaker/getting-started' },
						{ label: 'Claude Code Setup', slug: 'keymaker/claude-code' },
						{ label: 'OpenAI Codex Setup', slug: 'keymaker/codex' },
						{ label: 'Python API Access', slug: 'keymaker/python' },
						{ label: 'Rotating Your Key', slug: 'keymaker/rotating-your-key' },
						{ label: 'Usage & Best Practices', slug: 'keymaker/usage' },
					],
				},
				{
					label: 'Models',
					items: [
						{ label: 'Model Comparison', slug: 'models/model-comparison' },
					],
				},
				{
					label: 'Skills & Techniques',
					items: [
						{ label: 'Prompt Engineering', slug: 'skills/prompt-engineering' },
						{ label: 'MCP & External Tools', slug: 'skills/mcp-guides' },
					],
				},
				{
					label: 'Security & Privacy',
					items: [
						{ label: 'Privacy & Data', slug: 'security/privacy-and-data' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Release Notes', slug: 'reference/release-notes' },
					],
				},
				{ label: 'Get Help', slug: 'get-help', icon: 'comment' },
			],
		}),
	],
});
