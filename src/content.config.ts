import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    pinned: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    pullQuote: z.string().optional(),
  }),
});

export const collections = { notes };
