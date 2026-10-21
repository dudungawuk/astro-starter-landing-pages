---
title: "Content Collections in Astro: Type-Safe Content Management"
description: "Discover how Astro's Content Collections provide type-safe content management with schema validation for your Markdown and MDX files."
pubDate: 2024-02-10T09:00:00Z
author: "Astro Team"
coverImage: "/og-default.jpg"
tags: ["astro", "content-collections", "typescript", "cms"]
draft: false
---

Astro's Content Collections feature revolutionizes how you manage content in static sites. With built-in schema validation and TypeScript support, you get a type-safe content layer without a headless CMS.

## What Are Content Collections?

Content Collections are a way to organize and validate your content files (Markdown, MDX, etc.) with a defined schema. They provide:

- **Type safety**: Full TypeScript support for frontmatter
- **Validation**: Runtime validation with Zod schemas
- **Organization**: Structured content directories
- **Querying**: Easy filtering and sorting

## Setting Up a Collection

Create a `src/content.config.ts` file:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

## Using Collections in Pages

Query your content in Astro pages:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const publishedPosts = posts
  .filter(post => !post.data.draft)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<ul>
  {publishedPosts.map(post => (
    <li><a href={`/blog/${post.slug}/`}>{post.data.title}</a></li>
  ))}
</ul>
```

## Benefits Over Traditional CMS

1. **No external dependencies** - Content lives in your repo
2. **Version controlled** - Track changes with Git
3. **Zero cost** - No hosting fees for content
4. **Type-safe** - Catch errors at build time
5. **Fast** - No API calls at build or runtime

## Advanced Features

Content Collections also support:

- **Custom slugs**: Override the default file-based slug
- **Relationships**: Reference other collection entries
- **Transformers**: Process content before rendering
- **Multiple collections**: Separate blog, docs, products, etc.

## Conclusion

Content Collections bring the power of a headless CMS to your static site with zero infrastructure. They're perfect for blogs, documentation, portfolios, and any content-driven site.