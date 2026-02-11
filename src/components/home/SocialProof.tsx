import { Star } from "lucide-react";

export function SocialProof() {
    return (
        <section className="bg-primary py-8 text-white">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <p className="text-xl font-bold uppercase tracking-wide">
                        Rated 5/5 by 10,000+ Legends
                    </p>
                    <div className="flex items-center space-x-2">
                        <div className="flex text-secondary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-6 w-6 fill-current" />
                            ))}
                        </div>
                        <span className="font-semibold text-white/90">on TripAdvisor & Google</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
