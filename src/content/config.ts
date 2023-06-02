// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const mentorCollection = defineCollection({
  // type: "content", // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    city: z.string().optional(),
    picture: z.string().optional(),
    email: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  mentors: mentorCollection,
};
