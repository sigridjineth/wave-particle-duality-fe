'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ScientistCardProps {
    scientist: {
        id: string;
        year: number;
        name: string;
        title: string;
        description: string;
        details?: string[];
        image: string;
    };
    isLeft: boolean;
}

export function ScientistCard({ scientist, isLeft }: ScientistCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`
      relative group
      ${isLeft ? 'mr-8' : 'ml-8'}
    `}>
            {/* Year Badge */}
            <div className={`
        absolute top-4 ${isLeft ? '-right-16' : '-left-16'}
        bg-white px-3 py-1 rounded-full shadow-md
        font-mono text-sm font-bold text-gray-600
        transform transition-transform group-hover:scale-110
      `}>
                {scientist.year}
            </div>

            {/* Main Card */}
            <div className={`
        bg-white rounded-xl shadow-md hover:shadow-xl
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'scale-105' : 'scale-100'}
        border border-gray-100
      `}>
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-6">
                        {/* Image */}
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                                src={scientist.image}
                                alt={scientist.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{scientist.name}</h3>
                            <div className="text-sm text-gray-600 italic mb-3">
                                {scientist.title}
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {scientist.description}
                            </p>
                        </div>
                    </div>

                    {/* Expandable Details */}
                    {scientist.details && (
                        <div>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full mt-4 pt-4 border-t border-gray-100
                         flex items-center justify-center gap-2
                         text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {isExpanded ? (
                                    <>
                                        <ChevronUp size={16} />
                                        <span>Show less</span>
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown size={16} />
                                        <span>Show more</span>
                                    </>
                                )}
                            </button>

                            {isExpanded && (
                                <div className="mt-4 space-y-3 text-sm text-gray-600
                              animate-fadeIn">
                                    {scientist.details.map((detail, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="text-gray-400">•</span>
                                            <span>{detail}</span>
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}