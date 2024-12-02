'use client';

export function ConnectionLines() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1200 1000"
      >
        {/* Main Title to Theory Connections */}
        <g>
          {/* Wave Theory Connection */}
          <path
            d="M 600,100 Q 500,120 400,140"
            className="stroke-blue-500 stroke-2 fill-none"
          />

          {/* Particle Theory Connection */}
          <path
            d="M 600,100 Q 700,120 800,140"
            className="stroke-green-500 stroke-2 fill-none"
          />
        </g>

        {/* Branch Connections */}
        <g className="opacity-60">
          {/* Wave Theory Branches */}
          <path
            d="M 400,140 Q 350,200 300,250"
            className="stroke-blue-500 stroke-[1.5] fill-none"
            strokeDasharray="4,4"
          />
          <path
            d="M 400,140 Q 350,300 300,350"
            className="stroke-blue-500 stroke-[1.5] fill-none"
            strokeDasharray="4,4"
          />

          {/* Particle Theory Branches */}
          <path
            d="M 800,140 Q 850,200 900,250"
            className="stroke-green-500 stroke-[1.5] fill-none"
            strokeDasharray="4,4"
          />
          <path
            d="M 800,140 Q 850,300 900,350"
            className="stroke-green-500 stroke-[1.5] fill-none"
            strokeDasharray="4,4"
          />
        </g>
      </svg>
    </div>
  );
}
