# Astro Landing Page + Blog Starter

A production-ready, reusable starter repository built with **Astro 5** and **TypeScript**. Perfect for company profiles, service businesses, digital agencies, startups, and SEO-focused local business websites.

## Features

- 🚀 **Astro 5** with TypeScript (strict mode)
- 📝 **Markdown-based Blog** with Content Collections
- 🎨 **Design System** with CSS custom properties (design tokens)
- ♿ **Accessible** - Semantic HTML, WCAG AA compliant
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD, sitemap
- 📱 **Responsive** - Mobile-first, works on all devices
- ⚡ **Performance** - Zero-JS by default, optimized assets
- 🎯 **Configurable** - Centralized configuration for easy customization
- 🧩 **Modular Components** - Reusable UI and section components

## Quick Start

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd astro-landing-blog-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Check code formatting with Prettier |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Hero, About, Stats, Services, Portfolio, LatestBlog, CTA
│   └── ui/           # Button, Card, Container, Badge, Icon, Section, SEO
├── content/
│   └── blog/         # Markdown blog posts
├── content.config.ts # Content Collections schema
├── config/
│   └── site.ts       # Centralized site configuration
├── layouts/
│   ├── BaseLayout.astro      # Base HTML layout
│   └── BlogPostLayout.astro  # Blog post layout
├── lib/              # Utility functions
├── pages/
│   ├── index.astro           # Homepage
│   ├── 404.astro             # 404 page
│   └── blog/
│       ├── index.astro       # Blog listing
│       ├── [slug].astro      # Individual blog post
│       └── tags/[tag].astro  # Tag archive pages
├── styles/
│   ├── global.css    # Global styles & utilities
│   └── tokens.css    # Design tokens (CSS custom properties)
└── types.d.ts        # TypeScript declarations

public/
├── favicon.svg
├── robots.txt
├── site.webmanifest
└── *.svg             # Placeholder images
```

## Configuration

All site content and configuration is centralized in `src/config/site.ts`. Modify this file to customize:

- **Site Identity** - Name, URL, description, logo
- **Colors & Typography** - Via CSS custom properties in `src/styles/tokens.css`
- **Navigation** - Header links
- **Hero Section** - Headline, CTAs, image
- **About Section** - Mission, values, image
- **Stats** - Metrics and trust indicators
- **Services** - Service cards with icons
- **Portfolio** - Project showcase
- **Blog** - Latest posts display settings
- **CTA Section** - Call-to-action content
- **Footer** - Navigation, social links, copyright
- **Contact Info** - Email, phone, address
- **Social Links** - Twitter, LinkedIn, GitHub, etc.

### Example: Changing Brand Colors

Edit `src/styles/tokens.css`:

```css
:root {
  --color-primary: #your-brand-color;
  --color-primary-hover: #your-darker-shade;
  --color-secondary: #your-accent-color;
  /* ... */
}
```

### Example: Adding a New Service

Edit `src/config/site.ts`:

```typescript
export const servicesConfig: ServicesConfig = {
  enabled: true,
  title: 'Our Services',
  subtitle: 'What we offer',
  items: [
    // ... existing services
    {
      title: 'New Service',
      description: 'Description of your new service',
      icon: 'code', // or any icon name from Icon.astro
      link: { label: 'Learn More', href: '/#contact' }
    }
  ]
};
```

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
pubDate: 2024-01-15T10:00:00Z
updatedDate: 2024-01-20T14:30:00Z  # optional
author: "Author Name"  # optional
coverImage: "/path/to/image.jpg"  # optional
tags: ["tag1", "tag2"]
draft: false  # set to true to hide from production
---

Your content here with **Markdown** support.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `description` | Yes | SEO description & preview text |
| `pubDate` | Yes | Publication date (ISO 8601) |
| `updatedDate` | No | Last update date |
| `author` | No | Author name |
| `coverImage` | No | Path to cover image |
| `tags` | No | Array of tags |
| `draft` | No | Hide from production (default: false) |

### Publishing

1. Create the Markdown file
2. Set `draft: false`
3. The post automatically appears in:
   - Blog listing page (`/blog/`)
   - Homepage "Latest Articles" section
   - Tag archive pages
   - RSS feed (if configured)

## Customization Guide

### For a Different Business

1. **Update `src/config/site.ts`** with your business info
2. **Modify `src/styles/tokens.css`** for brand colors/typography
3. **Replace placeholder images** in `public/` with your assets
4. **Enable/disable sections** by setting `enabled: false` in config
5. **Add/remove services** in the services config
6. **Update portfolio projects** with your work
7. **Write blog posts** relevant to your industry

### Adding a New Section

1. Create `src/components/sections/NewSection.astro`
2. Add config to `src/config/site.ts` if needed
3. Import and add to `src/pages/index.astro`

### Using Different Icons

Icons are defined in `src/components/ui/Icon.astro`. Add new icons to the `icons` object:

```typescript
const icons: Record<string, string> = {
  // ... existing icons
  yourIcon: '<path d="..." stroke-linecap="round" stroke-linejoin="round"/>',
};
```

## Deployment

### Static Hosting (Recommended)

Deploy the `dist/` folder to any static host:

- **Netlify**: Connect repo, build command `npm run build`, publish `dist`
- **Vercel**: Connect repo, framework preset: Astro
- **Cloudflare Pages**: Build command `npm run build`, output `dist`
- **GitHub Pages**: Use GitHub Actions with `astro build`
- **AWS S3 + CloudFront**: Upload `dist/` contents

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Zero-JS by default** - Only interactive components hydrate
- **Optimized images** - Use `astro:assets` for automatic optimization
- **Prefetching** - Hover-based prefetching for instant navigation
- **Minimal CSS** - No unused styles, utility-first approach

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- ARIA labels and roles
- Focus management
- Skip to main content link
- Color contrast ratios (WCAG AA)
- Reduced motion support
- Keyboard navigation

## SEO Features

- Unique titles & meta descriptions per page
- Canonical URLs
- Open Graph & Twitter Card meta tags
- JSON-LD structured data (WebSite, BlogPosting)
- XML sitemap (`@astrojs/sitemap`)
- Robots.txt
- Semantic article markup
- Clean URLs with trailing slashes

## Tech Stack

- **Framework**: Astro 5
- **Language**: TypeScript (strict)
- **Styling**: Vanilla CSS with custom properties
- **Content**: Markdown + Content Collections
- **Icons**: Inline SVG (zero dependencies)
- **Formatting**: Prettier + prettier-plugin-astro

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for any project, personal or commercial.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run typecheck && npm run lint`
5. Submit a pull request

## Support

- **Documentation**: [Astro Docs](https://docs.astro.build)
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions