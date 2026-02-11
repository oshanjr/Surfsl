"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const singleLessons = [
    {
        name: "The Drop In",
        duration: "90 Mins",
        price: "$25",
        description: "Perfect for your first time on a board.",
        features: ["1-on-1 Tuition", "Board Rental Included", "Theory & Safety Briefing", "Rash Guard Provided"],
    },
    {
        name: "The Next Level",
        duration: "3 x 90 Mins",
        price: "$70",
        description: "Master the basics and catch your first green wave.",
        features: ["Progressive Coaching", "Video Analysis (1 Session)", "Board Rental", "Transport to Spots"],
    },
    {
        name: "Private Session",
        duration: "120 Mins",
        price: "$40",
        description: "Dedicated attention to refine your technique.",
        features: ["Exclusive Instructor", "Advanced Maneuvers", "Spot Guiding", "GoPro Footage"],
    },
];

const surfCamps = [
    {
        name: "The Weekender",
        duration: "3 Days / 2 Nights",
        price: "$150",
        description: "A quick getaway to recharge and surf.",
        features: ["2 Nights Accommodation", "3 Surf Lessons", "Breakfast Included", "Airport Transfer (One Way)"],
        popular: true,
    },
    {
        name: " The Stoke Week",
        duration: "7 Days / 6 Nights",
        price: "$450",
        description: "Immerse yourself in the surf lifestyle.",
        features: ["6 Nights Accommodation", "5 Surf Lessons", "Daily Breakfast & 3 Dinners", "Yoga Sessions (x3)", "Video Analysis"],
    },
    {
        name: "The Pro Soul",
        duration: "10 Days / 9 Nights",
        price: "$650",
        description: "Go from kook to local legend.",
        features: ["9 Nights Accommodation", "10 Surf Lessons", "Full Board Meals", "Unlimited Yoga", "Day Trip Excursion", "Professional Photo Package"],
    },
];

export default function PackagesPage() {
    const [view, setView] = useState<"single" | "camps">("camps");

    const packages = view === "single" ? singleLessons : surfCamps;

    return (
        <div className="bg-background min-h-screen py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
                        Surf Packages
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Choose the perfect package for your level and schedule.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-12">
                    <div className="bg-secondary/10 p-1 rounded-full flex relative">
                        <motion.div
                            className="absolute h-full top-0 bottom-0 bg-secondary rounded-full"
                            layoutId="activeTab"
                            initial={false}
                            animate={{
                                width: "50%",
                                x: view === "single" ? "0%" : "100%",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setView("single")}
                            className={cn(
                                "relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors",
                                view === "single" ? "text-white" : "text-foreground hover:text-primary"
                            )}
                        >
                            Single Lessons
                        </button>
                        <button
                            onClick={() => setView("camps")}
                            className={cn(
                                "relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors",
                                view === "camps" ? "text-white" : "text-foreground hover:text-primary"
                            )}
                        >
                            Full Camps
                        </button>
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className={`h-full flex flex-col ${// @ts-ignore
                                pkg.popular ? "border-primary shadow-xl ring-2 ring-primary ring-opacity-50" : ""
                                }`}>
                                {/* @ts-ignore */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white uppercase tracking-wide shadow-md">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl uppercase">{pkg.name}</CardTitle>
                                    <CardDescription className="text-lg font-medium text-secondary">{pkg.duration}</CardDescription>
                                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-6 flex items-baseline border-b pb-6">
                                        <span className="text-4xl font-extrabold">{pkg.price}</span>
                                        <span className="ml-2 text-muted-foreground">{view === 'single' ? '/ session' : '/ person'}</span>
                                    </div>
                                    <ul className="space-y-4">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-sm text-foreground/90">
                                                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full text-lg py-6 rounded-full" variant={// @ts-ignore
                                        pkg.popular ? "default" : "outline"
                                    } asChild>
                                        <Link href="/booking">Book This Package</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 p-8 rounded-2xl flex items-start gap-4">
                    <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-lg text-primary">Need custom dates?</h3>
                        <p className="text-muted-foreground">We are flexible! If our standard packages don't fit your schedule, contact us and we'll build a custom surf camp just for you.</p>
                        <Link href="/contact" className="text-secondary font-semibold hover:underline mt-2 inline-block">Contact Support &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
