import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const ASIA_OFFSET_MS = 8 * 60 * 60 * 1000

const fixAsiaDate = (val: unknown) => {
	if (val instanceof Date) {
		// YAML already parsed this assuming UTC — undo that and reinterpret as PH time
		return new Date(val.getTime() - ASIA_OFFSET_MS)
	}
	if (typeof val === 'string') {
		return new Date(`${val}+08:00`)
	}
	return val
}

const microblogs = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/microblogs',
	}),
	schema: z.object({
		date: z.preprocess(fixAsiaDate, z.date()),
		updatedDate: z.preprocess(fixAsiaDate, z.date()).optional(),
		tags: z.array(z.string()).optional(),
		pinned: z.boolean().optional().default(false),
		images: z.array(z.string()).optional(),
	}),
})

// TODO: Blogs
// const blogs = defineCollection({
//     loader: glob({
//         pattern: '**/*.{md,mdx}',
//         base: './src/content/blogs',
//     }),
//     schema: ({image}) =>
//      z.object({
//          date: z.coerce.date(),
//          tags: z.array(z.string()),
//     }),
// })

export const collections = { microblogs }
