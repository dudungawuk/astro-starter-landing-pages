export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  logo: {
    text: string;
    icon?: string;
  };
  favicon: string;
  social: SocialLinks;
  contact: ContactInfo;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  email?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroConfig {
  enabled: boolean;
  headline: string;
  description: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  image?: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface AboutConfig {
  enabled: boolean;
  title: string;
  description: string;
  mission?: string;
  values?: ValueItem[];
  image?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface StatsConfig {
  enabled: boolean;
  title?: string;
  subtitle?: string;
  items: StatItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface ServicesConfig {
  enabled: boolean;
  title: string;
  subtitle?: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

export interface PortfolioConfig {
  enabled: boolean;
  title: string;
  subtitle?: string;
  items: ProjectItem[];
}

export interface LatestBlogConfig {
  enabled: boolean;
  title: string;
  subtitle?: string;
  maxPosts: number;
}

export interface CtaSectionConfig {
  enabled: boolean;
  title: string;
  description: string;
  button: CtaButton;
  backgroundImage?: string;
}

export interface FooterConfig {
  copyright: string;
  navigation: FooterNavSection[];
  social: SocialLinks;
}

export interface FooterNavSection {
  title: string;
  links: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Astro Starter',
  url: 'https://example.com',
  description: 'A production-ready Astro landing page + blog starter',
  defaultTitle: 'Astro Starter - Build Fast, Modern Websites',
  defaultDescription: 'Production-ready Astro starter with landing page and blog system. TypeScript, SEO-optimized, and fully customizable.',
  ogImage: '/og-default.jpg',
  logo: {
    text: 'AstroStarter',
  },
  favicon: '/favicon.svg',
  social: {
    twitter: 'https://twitter.com/example',
    linkedin: 'https://linkedin.com/company/example',
    github: 'https://github.com/example',
    email: 'mailto:hello@example.com',
  },
  contact: {
    email: 'hello@example.com',
    phone: '+1 (555) 000-0000',
    address: '123 Example St, San Francisco, CA 94102',
  },
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/#contact' },
];

export const heroConfig: HeroConfig = {
  enabled: true,
  headline: 'Build Better Websites with Astro',
  description: 'A production-ready starter for landing pages and blogs. Fast, accessible, and fully customizable out of the box.',
  primaryCta: {
    label: 'Get Started',
    href: '/#contact',
    variant: 'primary',
  },
  secondaryCta: {
    label: 'View Demo',
    href: '/blog/',
    variant: 'outline',
  },
  image: '/hero-image.svg',
};

export const aboutConfig: AboutConfig = {
  enabled: true,
  title: 'About Us',
  description: 'We help businesses build modern, performant websites using Astro and modern web technologies.',
  mission: 'To make the web faster and more accessible, one website at a time.',
  values: [
    { title: 'Performance First', description: 'Zero-JS by default for lightning-fast page loads.' },
    { title: 'Accessibility', description: 'Semantic HTML and WCAG compliance built in.' },
    { title: 'Developer Experience', description: 'Type-safe, maintainable code that scales.' },
    { title: 'SEO Ready', description: 'Meta tags, sitemaps, and structured data included.' },
  ],
  image: '/about-image.svg',
};

export const statsConfig: StatsConfig = {
  enabled: true,
  title: 'Our Experience',
  subtitle: 'Numbers that speak for themselves',
  items: [
    { label: 'Projects Delivered', value: '150+', description: 'Successfully completed' },
    { label: 'Happy Clients', value: '80+', description: 'Long-term partnerships' },
    { label: 'Years Experience', value: '10+', description: 'In web development' },
    { label: 'Team Members', value: '12', description: 'Skilled professionals' },
  ],
};

export const servicesConfig: ServicesConfig = {
  enabled: true,
  title: 'Our Services',
  subtitle: 'What we can do for you',
  items: [
    {
      title: 'Custom Web Development',
      description: 'Tailored websites built with Astro, React, and modern tooling.',
      icon: 'code',
      link: { label: 'Learn More', href: '/#contact' },
    },
    {
      title: 'Performance Optimization',
      description: 'Audit and improve Core Web Vitals for better rankings.',
      icon: 'speed',
      link: { label: 'Learn More', href: '/#contact' },
    },
    {
      title: 'SEO & Content Strategy',
      description: 'Technical SEO, content architecture, and growth strategies.',
      icon: 'search',
      link: { label: 'Learn More', href: '/#contact' },
    },
    {
      title: 'Design Systems',
      description: 'Scalable component libraries and design tokens.',
      icon: 'design',
      link: { label: 'Learn More', href: '/#contact' },
    },
    {
      title: 'Migration & Modernization',
      description: 'Move from legacy stacks to modern, maintainable architecture.',
      icon: 'migrate',
      link: { label: 'Learn More', href: '/#contact' },
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing updates, monitoring, and technical support.',
      icon: 'support',
      link: { label: 'Learn More', href: '/#contact' },
    },
  ],
};

export const portfolioConfig: PortfolioConfig = {
  enabled: true,
  title: 'Latest Projects',
  subtitle: 'A selection of our recent work',
  items: [
    {
      title: 'SaaS Platform Redesign',
      description: 'Complete redesign and rebuild of a B2B SaaS platform.',
      image: '/project-1.svg',
      category: 'Web App',
      link: { label: 'View Case Study', href: '#', external: false },
    },
    {
      title: 'E-commerce Migration',
      description: 'Migrated legacy store to headless commerce with Astro.',
      image: '/project-2.svg',
      category: 'E-commerce',
      link: { label: 'View Case Study', href: '#', external: false },
    },
    {
      title: 'Corporate Website',
      description: 'Multi-language corporate site with blog and careers.',
      image: '/project-3.svg',
      category: 'Corporate',
      link: { label: 'View Case Study', href: '#', external: false },
    },
  ],
};

export const latestBlogConfig: LatestBlogConfig = {
  enabled: true,
  title: 'Latest Articles',
  subtitle: 'Insights, tutorials, and updates from our team',
  maxPosts: 3,
};

export const ctaSectionConfig: CtaSectionConfig = {
  enabled: true,
  title: 'Ready to Start Your Project?',
  description: 'Let\'s build something great together. Get in touch for a free consultation.',
  button: {
    label: 'Contact Us',
    href: '/#contact',
    variant: 'primary',
  },
};

export const footerConfig: FooterConfig = {
  copyright: '© 2024 Astro Starter. All rights reserved.',
  navigation: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/#about' },
        { label: 'Services', href: '/#services' },
        { label: 'Portfolio', href: '/#portfolio' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog/' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Templates', href: '/templates' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ],
  social: {
    twitter: 'https://twitter.com/example',
    linkedin: 'https://linkedin.com/company/example',
    github: 'https://github.com/example',
    email: 'mailto:hello@example.com',
  },
};