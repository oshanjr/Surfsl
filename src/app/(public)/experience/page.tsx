"use client";

import Image from "next/image";
import { Coffee, Sun, Waves, Utensils, Moon, PartyPopper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const timeline = [
    {
        time: "07:00 AM",
        title: "Morning Yoga",
        description: "Start your day with a sunrise flow to warm up your muscles.",
        icon: Sun,
    },
    {
        time: "08:30 AM",
        title: "Healthy Breakfast",
        description: "Fuel up with smoothie bowls, fresh fruit, and local coffee.",
        icon: Coffee,
    },
    {
        time: "09:30 AM",
        title: "Surf Session",
        description: "Hit the waves with your instructor. Best conditions of the day!",
        icon: Waves,
    },
    {
        time: "01:00 PM",
        title: "Lunch & Chill",
        description: "Relax at the villa, take a dip in the pool, or nap in a hammock.",
        icon: Utensils,
    },
    {
        time: "04:30 PM",
        title: "Sunset Free Surf",
        description: "Practice what you learned or just enjoy the golden hour.",
        icon: Waves,
    },
    {
        time: "07:30 PM",
        title: "Direct Connect Dinner",
        description: "Family-style dinner with the whole crew. Fresh seafood & BBQs.",
        icon: Moon,
    },
];

const accommodation = [
    {
        title: "The Social Dorm",
        description: "Perfect for solo travelers looking to meet friends.",
        price: "From $20/night",
        features: ["AC & Ensuite Bathroom", "Secure Lockers", "4-Bed Layout", "Reading Lights"],
    },
    {
        title: "Private Garden Suite",
        description: "Your own sanctuary with a private balcony.",
        price: "From $60/night",
        features: ["King Size Bed", "Private Terrace", "Rain Shower", "Work Desk"],
    },
];

const socialLife = [
    {
        title: "Rooftop BBQ",
        description: "Every Wednesday, we fire up the grill for a feast under the stars.",
    },
    {
        title: "Jungle Party",
        description: "Friday nights are for dancing. We head to the famous jungle club.",
    },
    {
        title: "Yoga & Wellness",
        description: "Daily classes to stretch out those surf muscles and find your zen.",
    },
];

export default function ExperiencePage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply z-0" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
                        The Full Experience
                    </h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-200">
                        It's not just about the waves. It's about the people, the place, and the memories.
                    </p>
                </div>
            </section>

            {/* Accommodation */}
            <section className="py-24 container mx-auto px-4">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-center mb-12">
                    Where You'll Crash
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {accommodation.map((room) => (
                        <Card key={room.title} className="overflow-hidden">
                            <div className="h-64 bg-gray-200 relative flex items-center justify-center">
                                <span className="text-muted-foreground font-medium">{room.title} Image Placeholder</span>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-2xl">{room.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">{room.description}</CardDescription>
                                    </div>
                                    <span className="font-bold text-primary text-lg">{room.price}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid grid-cols-2 gap-2">
                                    {room.features.map((feature) => (
                                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full mt-6" variant="outline" asChild>
                                    <Link href="/booking">Book This Room</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* A Day in the Life */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-center mb-16">
                        A Day in the Life
                    </h2>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={item.time} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Icon */}
                                    <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-2 border-primary z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                        <item.icon className="w-4 h-4 text-primary" />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'text-left md:text-left' : 'md:text-right'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                                            <span className="text-sm font-bold text-secondary uppercase tracking-wider">{item.time}</span>
                                            <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Life */}
            <section className="py-24 container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">
                    Good Vibes Only
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {socialLife.map((event) => (
                        <div key={event.title} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <PartyPopper className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                            <p className="text-muted-foreground">{event.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
