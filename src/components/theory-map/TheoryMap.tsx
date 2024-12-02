'use client';

import { ConnectionLines } from './ConnectionLines';
import { TheoryBranch } from './TheoryBranch';

export function TheoryMap() {
  return (
    <div className="min-h-screen p-8 overscroll-x-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 text-center bg-white/80 backdrop-blur-sm py-4 mb-16">
        <h1 className="text-4xl font-bold mb-2">Light is a...</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-between min-w-[1200px] px-8">
          <TheoryBranch type="wave" />
          <TheoryBranch type="particle" />
        </div>
        <ConnectionLines />
      </div>
    </div>
  );
}
