import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		pillar: z.enum(['google-ads', 'meta-ads', 'attribution', 'case-study', 'general']),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
