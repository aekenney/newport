/**
 * Site-wide configuration constants
 */
export const SITE_CONFIG = {
    name: 'Aiden',
    title: 'Systems Software Engineer',
    tagline: 'Systems Infrastructure & Embedded Performance',
    description: 'Systems Software Engineer specializing in low-latency performance, SCADA infrastructure, and automotive telemetry. Expert in C++, Rust, and real-time data processing.',
    url: 'https://yourwebsite.com',
} as const;

/**
 * Social media and contact links
 */
export const SOCIAL_LINKS = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your.email@example.com',
    resume: '/resume.pdf',
} as const;

/**
 * Navigation links
 */
export const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#repos', label: 'Manifest' },
    { href: '#experience', label: 'History' },
    { href: '#community', label: 'Leadership' },
] as const;

/**
 * Footer links
 */
export const FOOTER_LINKS = [
    { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.github, label: 'GitHub' },
    { href: SOCIAL_LINKS.email, label: 'Email' },
] as const;

/**
 * Hero section content
 */
export const HERO_CONTENT = {
    title: SITE_CONFIG.name,
    subtitle: SITE_CONFIG.tagline,
    sessionLabel: 'Session_Active',
    sessionSubtext: 'Autonomous_Vector_Rendering',
} as const;

/**
 * About section content
 */
export const ABOUT_CONTENT = {
    badge: 'Core Mission',
    headline: {
        prefix: 'Engineering',
        highlight1: 'robust',
        middle: 'systems for',
        highlight2: 'volatile',
        suffix: 'environments.',
    },
    description: 'Developing critical infrastructure at the intersection of software and physical reality. Specializing in high-throughput data processing for industrial SCADA and performance automotive telemetry.',
    capabilities: [
        {
            icon: 'car',
            title: 'Low Latency',
            description: 'Reducing execution overhead in performance-critical C++ environments for real-time sensor ingestion.',
            color: 'orange',
        },
        {
            icon: 'droplets',
            title: 'Fluid Dynamics',
            description: 'Modeling complex hydraulic logic and automated valve control for regional wastewater management.',
            color: 'blue',
        },
    ],
} as const;

/**
 * Section headers
 */
export const SECTION_HEADERS = {
    repos: {
        title: 'Source Registry',
        subtitle: 'Software Infrastructure',
    },
    experience: {
        title: 'Professional',
        subtitle: 'History',
    },
    community: {
        title: 'Leadership',
        subtitle: 'Organizations',
    },
} as const;

/**
 * Footer content
 */
export const FOOTER_CONTENT = {
    taglines: [
        'Precision Engineering.',
        'Infrastructure Architecture.',
        'Performance Optimization.',
    ],
} as const;
