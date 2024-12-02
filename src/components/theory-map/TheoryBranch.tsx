import {theoriesData, TheoryType} from '@/src/data/theories';
import {ScientistCard} from "@/src/components/theory-map/ScientistCard";

interface TheoryBranchProps {
    type: TheoryType;
}

export function TheoryBranch({ type }: TheoryBranchProps) {
    const theory = theoriesData[type];

    return (
        <div className="flex flex-col items-center w-[500px]">
            {/* Theory Title */}
            <div className={`
        px-8 py-4 rounded-lg shadow-lg text-xl font-bold mb-12
        ${type === 'wave' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}
      `}>
                {theory.title}
            </div>

            {/* Scientists Timeline */}
            <div className="space-y-8">
                {theory.children.map((scientist, index) => (
                    <ScientistCard
                        key={scientist.id}
                        scientist={scientist}
                        isLeft={type === 'wave'}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}