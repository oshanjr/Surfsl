"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Waves } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Experience", href: "/experience" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-sm"
                    : "bg-transparent text-white"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link href="/" className="flex items-center gap-2">
                            <Waves className={cn("h-8 w-8", scrolled ? "text-primary" : "text-white")} />
                            <span className={cn("font-bold text-xl tracking-tighter uppercase font-heading", scrolled ? "text-primary" : "text-white")}>
                                Surf Online
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium transition-colors hover:text-secondary",
                                        scrolled ? "text-foreground" : "text-white/90"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Button asChild variant={scrolled ? "default" : "secondary"} className="rounded-full">
                            <Link href="/booking">Book Now</Link>
                        </Button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "inline-flex items-center justify-center rounded-md p-2 focus:outline-none",
                                scrolled ? "text-foreground hover:bg-gray-100" : "text-white hover:bg-white/20"
                            )}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 backdrop-blur-xl border-b border-white/20"
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/10 hover:text-secondary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/booking"
                                onClick={() => setIsOpen(false)}
                                className="block w-full mt-4"
                            >
                                <Button className="w-full">Book Now</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
