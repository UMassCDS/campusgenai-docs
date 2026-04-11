// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://umasscds.github.io',
	base: '/campusgenai-docs',
	integrations: [
		starlight({
			title: 'campusGenAI Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/campusgenai' },
			],
			customCss: [
				'@fontsource/inter/400.css',
				'@fontsource/inter/500.css',
				'@fontsource/inter/600.css',
				'@fontsource/inter/700.css',
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
						{ label: 'Admin Dashboard', slug: 'platform/admin-dashboard' },
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
			],
		}),
	],
});
