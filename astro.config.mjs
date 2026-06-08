import icon from 'astro-iconset'
import playformCompress from '@playform/compress'

import { defineConfig, fontProviders } from 'astro/config'
import expressiveCode from 'astro-expressive-code'
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://sillypnk.is-a.dev',
	adapter: cloudflare(),
	integrations: [
		svelte(),
		expressiveCode({
			themes: ['ayu-dark', 'ayu-light'],
			useDarkModeMediaQuery: false,
			customizeTheme: theme => {
				if (theme.name === 'ayu-dark') theme.name = 'dark'
				if (theme.name === 'ayu-light') theme.name = 'light'
			},
		}),
		mdx(),
		sitemap(),
		icon({ iconDir: 'src/assets/icons' }),
		playformCompress(),
	],
	server: {
		host: true,
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		syntaxHighlight: false,
	},
	fonts: [
		// Raster Forge //
		{
			provider: fontProviders.local(),
			name: 'Raster Forge',
			cssVariable: '--font-raster-forge',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/Raster Forge.ttf'],
						weight: 'normal',
						style: 'normal',
					},
				],
			},
		},

		{
			provider: fontProviders.local(),
			name: 'Yuruka STD',
			cssVariable: '--font-yuruka-std',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/fot-yuruka-std.ttf'],
						weight: 'normal',
						style: 'normal',
					},
				],
			},
		},

		// Tickerbit //
		{
			provider: fontProviders.local(),
			name: 'Tickerbit',
			cssVariable: '--font-tickerbit',
			options: {
				variants: [
					{
						src: [
							'./src/assets/fonts/Tickerbit/Tickerbit-regular.otf',
						],
						weight: 'normal',
						style: 'normal',
					},
					{
						src: [
							'./src/assets/fonts/Tickerbit/Tickerbit-italic.otf',
						],
						weight: 'normal',
						style: 'italic',
					},
				],
			},
		},

		// ZPIX //
		{
			provider: fontProviders.local(),
			name: 'Zpix',
			cssVariable: '--font-zpix',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/zpix.ttf'],
						weight: 'normal',
						style: 'normal',
					},
				],
			},
		},

		// PixelMPlus //
		{
			provider: fontProviders.local(),
			name: 'PixelMPlus',
			cssVariable: '--font-pixelmplus',
			options: {
				variants: [
					{
						src: [
							'./src/assets/fonts/pixelmplus/PixelMplus10-Regular.ttf',
						],
						weight: 'normal',
						style: 'normal',
					},
					{
						src: [
							'./src/assets/fonts/pixelmplus/PixelMplus10-Bold.ttf',
						],
						weight: 'bold',
						style: 'normal',
					},
				],
			},
		},
	],
})
