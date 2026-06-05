import mdx from '@astrojs/mdx'
import { defineConfig, fontProviders } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-iconset'
import svelte from '@astrojs/svelte'

export default defineConfig({
	// site: 'https://pumochii.pages.dev',
	adapter: cloudflare(),
	integrations: [svelte(), mdx(), icon({ iconDir: 'src/assets/icons' })],
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
