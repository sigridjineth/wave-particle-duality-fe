'use client';

interface TimelineItemProps {
    scientist: any;
    isLeft: boolean;
}

export function TimelineItem({ scientist, isLeft }: TimelineItemProps) {
    return (
        <div className={`timeline-item ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Dot */}
            <div className="timeline-dot">
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2
                     bg-white px-2 py-1 rounded-full shadow text-sm font-semibold">
          {scientist.year}
        </span>
            </div>

            {/* Content */}
            <div className="timeline-content hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-6">
                    <img
                        src={scientist.image}
                        alt={scientist.name}
                        className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                        <h3 className="text-xl font-bold mb-2">{scientist.name}</h3>
                        <p className="text-gray-600 mb-4">{scientist.discovery}</p>
                        <span className={`
              inline-block px-3 py-1 rounded-full text-sm font-medium
              ${scientist.theory === 'wave'
                            ? 'bg-blue-100 text-blue-800'
                            : scientist.theory === 'particle'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-purple-100 text-purple-800'}
            `}>
              {scientist.theory === 'wave' ? 'Wave Theory' :
                  scientist.theory === 'particle' ? 'Particle Theory' :
                      'Wave-Particle Duality'}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}