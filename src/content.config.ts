// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Blog collection schema
const blogSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.date(),
  image: z.string(),
  author: z.string().optional(),
  featured: z.boolean().optional().default(false),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: defineCollection({ schema: blogSchema }),
};