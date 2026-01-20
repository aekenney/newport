import type { Project, Experience, Club, GithubRepo } from '@/types';

// Export configuration constants
export * from './config';
export * from './metadata';
export const REPOS: GithubRepo[] = [
    {
        id: 'r1',
        name: 'turbo-stream-cpp',
        description: 'Ultra-low latency streaming library for Linux-based telemetry systems.',
        language: 'C++',
        stars: 124,
        forks: 18,
        url: '#'
    },
    {
        id: 'r2',
        name: 'fluid-grid-compiler',
        description: 'Experimental compiler for domain-specific language used in hydraulic modeling.',
        language: 'TypeScript',
        stars: 89,
        forks: 5,
        url: '#'
    },
    {
        id: 'r3',
        name: 'obd2-neural-scan',
        description: 'Neural network implementation for predictive ECU diagnostics via standard OBD2 ports.',
        language: 'Python',
        stars: 210,
        forks: 42,
        url: '#'
    }
] as const;

export const CLUBS: Club[] = [
    {
        id: 'c1',
        name: 'Formula SAE Electric',
        role: 'Lead Software Engineer',
        period: '2022 - Present',
        description: 'Developing the real-time battery management system (BMS) firmware and high-speed dashboard telemetry for our competitive electric racer.',
        icon: 'car'
    },
    {
        id: 'c2',
        name: 'ACM Student Chapter',
        role: 'Technical Workshop Lead',
        period: '2021 - Present',
        description: 'Organizing deep-dive sessions on systems programming, concurrency patterns, and high-performance computing.',
        icon: 'terminal'
    },
    {
        id: 'c3',
        name: 'Water Resources Association',
        role: 'Digital Infrastructure Liaison',
        period: '2023 - Present',
        description: 'Advising on the implementation of IoT sensor networks for regional waste-water runoff monitoring.',
        icon: 'droplet'
    }
] as const;

export const EXPERIENCES: Experience[] = [
    {
        id: 'exp1',
        company: 'Core Systems Infrastructure',
        role: 'Systems Software Engineer Intern',
        period: 'Summer 2024',
        description: [
            'Developed kernel-level drivers for high-speed sensor data ingestion.',
            'Refactored concurrency models in legacy telemetry services, reducing CPU overhead by 25%.',
            'Implemented automated regression testing suites for real-time SCADA communications.'
        ],
        skills: ['C', 'Rust', 'Linux Kernel', 'gRPC']
    },
    {
        id: 'exp2',
        company: 'AutoOptic Analytics',
        role: 'Full Stack Developer',
        period: '2022 - 2023',
        description: [
            'Built a real-time visualization platform for engine dyno data using WebSockets and React.',
            'Optimized backend SQL queries for multi-terabyte diagnostic databases.',
            'Designed a responsive mobile app for field engineers to calibrate ECU parameters.'
        ],
        skills: ['Go', 'PostgreSQL', 'React', 'Docker']
    }
] as const;