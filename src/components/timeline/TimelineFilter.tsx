'use client';

interface TimelineFilterProps {
    selectedTheory: string;
    onTheoryChange: (theory: string) => void;
}

export function TimelineFilter({ selectedTheory, onTheoryChange }: TimelineFilterProps) {
    const theories = [
        { value: 'all', label: 'All Theories' },
        { value: 'wave', label: 'Wave Theory' },
        { value: 'particle', label: 'Particle Theory' },
        { value: 'both', label: 'Duality' }
    ];

    return (
        <div className="flex justify-center gap-4 mb-12">
            {theories.map(theory => (
                <button
                    key={theory.value}
                    onClick={() => onTheoryChange(theory.value)}
                    className={`
            px-6 py-3 rounded-lg transition-all duration-200
            font-medium text-sm tracking-wide
            ${selectedTheory === theory.value
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 shadow hover:shadow-md hover:scale-102'}
          `}
                >
                    {theory.label}
                </button>
            ))}
        </div>
    );
}