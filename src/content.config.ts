import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    importance: z.number(),
    selected: z.boolean().default(true),
    period: z.string(),
    affiliation: z.string(),
    advisor: z.string().optional(),
  }),
});

export const collections = { projects };
