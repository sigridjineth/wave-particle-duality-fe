import {TheoryMap} from "@/src/components/theory-map/TheoryMap";
import {References} from "@/src/components/references/apa";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <TheoryMap />
            <References />
        </main>
    );
}