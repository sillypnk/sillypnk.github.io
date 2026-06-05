import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const microblogs = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/microblogs',
    }),
    schema: z.object({
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
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
