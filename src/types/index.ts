export interface Scientist {
    id: number;
    year: number;
    name: string;
    theory: 'wave' | 'particle' | 'both';
    discovery: string;
    details: string;
    image: string;
}

export type TheoryType = 'all' | 'wave' | 'particle' | 'both';

interface TheoryNode {
    id: string;
    type: 'wave' | 'particle';
    title: string;
    description?: string;
    children: Scientist[];
}

interface Scientist {
    id: string;
    name: string;
    year: number;
    description: string;
    image: string;
    details?: string;
    equations?: string;
}

