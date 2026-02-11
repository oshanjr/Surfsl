import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const vibes = [
    {
        title: "Surf",
        description: "ISA Licensed Coaches, 30+ Spots",
        image: "/images/surf-vibe.jpg", // Placeholder
    },
    {
        title: "Stay",
        description: "AC Dorms & Private Suites, Coworking WiFi",
        image: "/images/stay-vibe.jpg", // Placeholder
    },
    {
        title: "Play",
        description: "Rooftop BBQ, Yoga, Friday Jungle Parties",
        image: "/images/play-vibe.jpg", // Placeholder
    },
];

export function VibeGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
                        The Vibe
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        More than just surfing. It's a lifestyle.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {vibes.map((vibe) => (
                        <div key={vibe.title} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2">
                            <div className="aspect-[3/4] w-full bg-gray-200 relative">
                                {/* Fallback for missing image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                                    <span className="text-lg font-medium">{vibe.title} Image</span>
                                </div>
                                {/* <Image
                  src={vibe.image}
                  alt={vibe.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold uppercase">{vibe.title}</h3>
                                    <p className="mt-2 text-sm text-gray-300">{vibe.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
