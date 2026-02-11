"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
    const scrollToPackages = () => {
        const packagesSection = document.getElementById("packages");
        if (packagesSection) {
            packagesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video / Image Placeholder */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-slate-900/80">
                {/* TODO: Add video element here. Current gradient is a placeholder. */}
                {/* <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/surf-hero.mp4" type="video/mp4" />
         </video> */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Learn to Surf in <span className="text-secondary">Paradise</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
                        Professional coaching, luxury stay, and unforgettable vibes in Sri Lanka.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
                >
                    <Button
                        size="lg"
                        className="rounded-full px-8 py-6 text-lg font-semibold"
                        onClick={scrollToPackages}
                    >
                        Find My Wave
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-white px-8 py-6 text-lg font-semibold text-white hover:bg-white hover:text-primary"
                        asChild
                    >
                        <Link href="/experience">Explore the Vibe</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
                <button
                    onClick={scrollToPackages}
                    className="animate-bounce rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                    <ArrowDown className="h-6 w-6" />
                </button>
            </motion.div>
        </section>
    );
}
