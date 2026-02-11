import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
    {
        name: "The Drop In",
        duration: "Single Lesson",
        price: "$25",
        features: ["90 Mins", "1-on-1 Tuition", "Board Rental"],
    },
    {
        name: "The Weekender",
        duration: "3 Days",
        price: "$150",
        features: ["Accommodation", "3 Lessons", "Breakfast Included"],
        popular: true,
    },
    {
        name: "The Pro Soul",
        duration: "7 Days",
        price: "$550",
        features: ["Full Board", "10 Lessons", "Video Analysis"],
    },
];

export function FeaturedPackages() {
    return (
        <section id="packages" className="bg-secondary/10 py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
                        Choose Your Wave
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        From first-timers to pros, we have a package for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {packages.map((pkg) => (
                        <Card key={pkg.name} className={`relative flex flex-col ${pkg.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl uppercase">{pkg.name}</CardTitle>
                                <CardDescription>{pkg.duration}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-6 flex items-baseline">
                                    <span className="text-4xl font-extrabold">{pkg.price}</span>
                                    <span className="ml-2 text-muted-foreground">/ person</span>
                                </div>
                                <ul className="space-y-3">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-foreground/80">
                                            <Check className="mr-2 h-4 w-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                                    <Link href="/booking">Book Now</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button variant="link" asChild className="text-lg">
                        <Link href="/packages">View All Packages &rarr;</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
