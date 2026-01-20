/**
 * Project data interface
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    category: 'water' | 'automotive' | 'software';
}

/**
 * Professional experience interface
 */
export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string[];
    skills: string[];
}

/**
 * Club/organization interface
 */
export interface Club {
    id: string;
    name: string;
    role: string;
    period: string;
    description: string;
    icon: string;
}

/**
 * GitHub repository interface
 */
export interface GithubRepo {
    id: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
}
