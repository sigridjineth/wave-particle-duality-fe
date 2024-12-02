interface TheoryNodeProps {
    type: 'wave' | 'particle';
}

export function TheoryNode({ type }: TheoryNodeProps) {
    const theory = theoriesData[type];

    return (
        <div className="flex flex-col items-center">
            <div className="border rounded p-4 mb-4">
                {theory.title}
            </div>

            <div className="space-y-4">
                {theory.children.map((scientist) => (
                    <ScientistCard key={scientist.id} scientist={scientist} />
                ))}
            </div>
        </div>
    );
}