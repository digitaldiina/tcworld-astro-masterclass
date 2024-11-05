// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    version: z.string().optional(),
    version_mobile: z.string().optional(),
  }).passthrough(),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  docs: docsCollection,
};