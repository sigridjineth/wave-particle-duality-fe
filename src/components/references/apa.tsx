'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Reference {
    author: string;
    title: string;
    publication: string;
    url: string;
    date?: string;
}

const references: Reference[] = [
    {
        author: "Bevelacqua, Pete",
        title: "Maxwell's Equations",
        publication: "Maxwell's Equations",
        url: "https://maxwells-equations.com/"
    },
    {
        author: "Canon Global",
        title: "Light Is It a Wave or a Particle?",
        publication: "Canon Technology: Canon Science Lab",
        url: "https://global.canon/en/technology/s_labo/light/001/11.html"
    },
    // ... 나머지 참고문헌
];

export function References() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50"
            >
                <span className="font-bold">References</span>
                {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </button>

            {isExpanded && (
                <div className="max-h-96 overflow-y-auto p-6 space-y-4">
                    {references.map((ref, index) => (
                        <div key={index} className="flex items-start gap-4 text-sm">
                            <div className="text-gray-400 flex-shrink-0">[{index + 1}]</div>
                            <div>
                                <p className="text-gray-800">
                                    {ref.author}. "{ref.title}." <em>{ref.publication}</em>.
                                </p>
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1 mt-1"
                                >
                                    <ExternalLink size={14} />
                                    <span>View source</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}