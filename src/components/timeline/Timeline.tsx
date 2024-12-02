'use client';

import { useState } from 'react';
import { TimelineFilter } from './TimelineFilter';
import { TimelineItem } from './TimelineItem';
import { scientists } from "@/src/data/scientists";

export function Timeline() {
    const [selectedTheory, setSelectedTheory] = useState('all');

    const filteredScientists = selectedTheory === 'all'
        ? scientists
        : scientists.filter(s => s.theory === selectedTheory);

    return (
        <div className="timeline-container">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    The Nature of Light
                </h1>
                <p className="text-xl text-gray-600">
                    Wave-Particle Duality Through History
                </p>
            </div>

            {/* Filter */}
            <TimelineFilter
                selectedTheory={selectedTheory}
                onTheoryChange={setSelectedTheory}
            />

            {/* Timeline */}
            <div className="relative mt-20 pb-20">
                <div className="timeline-line" />
                {filteredScientists.map((scientist, index) => (
                    <TimelineItem
                        key={scientist.id}
                        scientist={scientist}
                        isLeft={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
}