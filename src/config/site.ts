export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'Next.js 14 Starter',
    description: 'Next.js 14 Starter Template',

    nav: [
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
    ],

    social: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'Twitter', url: 'https://twitter.com' },
    ],
};